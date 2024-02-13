import {
  Action, Bot, Plugin,
} from 'bottender';
import invariant from 'invariant';
import { merge } from 'lodash';
import { pascalcase } from 'messaging-api-common';
import getSessionStore from 'bottender/dist/shared/getSessionStore';
import { CHANNELS } from '../constants';
import { Channels, IChatBotConfig } from '../types';

const getChannelConnector = (
  channel: Channels,
  config: unknown,
  defaultConnector: (...args: unknown[]) => unknown,
) => {
  if (defaultConnector) {
    invariant(defaultConnector, `The connector of ${channel} is missing.`);

    return defaultConnector(config);
  }

  if (CHANNELS.includes(channel)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const ChannelConnector = require(
      `bottender/dist/${channel}/${pascalcase(channel)}Connector`
    ).default;

    return new ChannelConnector(config);
  }

  invariant(defaultConnector, `The connector of ${channel} is missing.`);

  return defaultConnector;
};

export default function getChannelBots(
  channel: Channels,
  config: IChatBotConfig,
  entryAction: Action<any, any>,
) {
  const {
    initialState,
    plugins,
    channels = {},
  } = merge(config);
  const channelConfig = channels[channel] as unknown[] || [];
  const channelConfigs = channelConfig
    .filter(({ enabled }: any) => enabled);
  const sessionStore = getSessionStore();
  const initializeBot = (bot: Bot<any, any, any, any>): void => {
    if (initialState) {
      bot.setInitialState(initialState);
    }

    if (plugins) {
      plugins.forEach((plugin: Plugin<any>) => {
        bot.use(plugin);
      });
    }

    bot.onEvent(entryAction);
  };

  if (!channelConfigs.length) {
    return;
  }

  return channelConfigs.map(({
    path: webhookPath,
    sync,
    onRequest,
    connector,
    ...connectorConfig
  }: any) => {
    const channelConnector = getChannelConnector(
      channel as Channels, connectorConfig, connector,
    );
    const channelBot = new Bot({
      sessionStore,
      sync,
      onRequest,
      connector: channelConnector,
    }) as Bot<any, any, any, any>;

    initializeBot(channelBot);

    return {
      webhookPath: webhookPath || `/webhooks/${channel}`,
      bot: channelBot,
    };
  });
}
