import { onRequest } from 'firebase-functions/v2/https';
import { ChatBot } from '../../entities/ChatBot';
import { superUserStrategy } from './lib';
import { Channels } from '../../entities/ChatBot/types';
import TelegramBot from '../../entities/TelegramBot';

const CONFIG = {
  channels: {
    telegram: [{
      enabled: true,
      path: '/',
      accessToken: '6574419616:AAHWsX5WlmwGnaWERJgyfiHf_1k4FLIZ9xc',
    }],
  },
};

const chatBot = new TelegramBot(Channels.Telegram, superUserStrategy);

export const getTelegramBotWebhook = onRequest({}, async (req, res) => {
  const requestHandler = await chatBot.initRequestHandler(CONFIG);

  await requestHandler(req);

  res.send({ res: true });
});
