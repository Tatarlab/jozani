import { RequestContext, ChannelBot, Action } from 'bottender';
import { IncomingMessage } from 'http';
import { curry } from 'lodash';
import fromEntries from 'object.fromentries';
import { match } from 'path-to-regexp';
import url from 'url';
import { Channels, IChatBotConfig } from '../types';
import getChannelBots from './getChannelBots';

type ChannelBotRequestAndContext = {
  requestContext: RequestContext;
  channelBot: ChannelBot;
} | undefined;

const getChannelBotMatch = (pathname: string, webhookPath: string) => {
  const matchPath = match<Record<string, string>>(webhookPath);

  return matchPath(pathname);
};

export default function initChannelBot(
  channel: Channels,
  config: IChatBotConfig,
  entryAction: Action<any, any>,
) {
  const channelBots = getChannelBots(channel, config, entryAction);

  return (req: IncomingMessage): ChannelBotRequestAndContext => {
    if (!channelBots?.length) {
      return undefined;
    }

    const hostname = (req as any).hostname || req.headers.host;
    const protocol = (req as any).protocol || 'https';
    const requestUrl = `${protocol}://${hostname}${req.url}`;
    const { pathname, searchParams } = new url.URL(requestUrl);
    const getMatch = curry(getChannelBotMatch)(pathname);
    const channelBot = channelBots?.find(
      ({ webhookPath }) => !!getMatch(webhookPath),
    );

    if (!channelBot) {
      return undefined;
    }

    const matchResult = getMatch(channelBot?.webhookPath);
    const query = fromEntries(searchParams.entries());

    return {
      channelBot,
      requestContext: {
        id: (req as any).id,
        method: req.method as string,
        path: pathname,
        query,
        headers: req.headers,
        rawBody: (req as any).rawBody,
        body: (req as any).body,
        params: (matchResult as any).params,
        url: requestUrl,
      },
    };
  };
}
