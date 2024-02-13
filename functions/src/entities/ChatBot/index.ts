import { bottender } from 'bottender';
import { payload, route, router, text } from 'bottender/router';
import {
  Channels, ChatBotContext, IChatBotConfig, Route,
} from './types';
import initChannelBot from './utils/initChannelBot';

export class ChatBot {
  broker = bottender({ dev: false });

  constructor(
    protected channel: Channels,
    protected getStrategy?: () => Promise<Route<ChatBotContext, any>[]>,
  ) {}

  startApp = async () => {
    if (!this.getStrategy) {
      return router([]);
    }

    const getStrategy = this.getStrategy.bind(this);
    const strategy = await getStrategy();

    return router(strategy);
  };

  initRequestHandler = async (config: IChatBotConfig) => {
    const getChannelBotAndRequestContext = initChannelBot(
      this.channel, config, this.startApp,
    );

    return async (req: unknown) => {
      const {
        channelBot, requestContext,
      } = getChannelBotAndRequestContext(req as never) || {};

      if (!channelBot || !requestContext) {
        return;
      }

      const request = {
        ...requestContext,
        body: requestContext.body,
        rawBody: JSON.stringify(requestContext.body),
      };
      const bot = channelBot.bot;
      // eslint-disable-next-line no-await-in-loop
      const result = await (bot.connector as any).preprocess(request);
      const { shouldNext } = result;

      if (!shouldNext) {
        return result.response;
      }

      const requestHandler = bot.createRequestHandler();

      return await requestHandler(
        {
          ...requestContext.query,
          ...requestContext.body,
        },
        requestContext,
      );
    };
  };

  route = route;

  text = text;

  payload = payload;
}
