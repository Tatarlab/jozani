import { IChatBotConfig } from '../../entities/ChatBot/types';
import { TELEGRAM_BOT_JOZANI_TOKEN } from '../../shared';

export const BOTS_CONFIG: IChatBotConfig = {
  channels: {
    telegram: [{
      enabled: true,
      path: '/',
      accessToken: TELEGRAM_BOT_JOZANI_TOKEN,
    }],
  },
};
