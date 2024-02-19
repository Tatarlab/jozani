import { onRequest } from 'firebase-functions/v2/https';
import { jozaniStrategy } from './lib';
import TelegramBot from '../../entities/TelegramBot';
import { BOTS_CONFIG } from './constants';

const chatBot = new TelegramBot(jozaniStrategy);

export const getTelegramBotWebhookJozani = onRequest({}, async (req, res) => {
  const requestHandler = await chatBot.initRequestHandler(BOTS_CONFIG);

  await requestHandler(req);

  res.send({ res: true });
});
