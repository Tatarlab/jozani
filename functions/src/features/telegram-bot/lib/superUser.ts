import { first, pick } from 'lodash';
import { ChatBotContext, Route } from '../../../entities/ChatBot/types';
import TelegramBot from '../../../entities/TelegramBot';

/* eslint-disable no-invalid-this */
export async function superUserStrategy(
  this: TelegramBot,
): Promise<Route<ChatBotContext, any>[]> {
  return [
    this.message(async (context) => {
      const {
        text = '', entities = [],
      } = pick(context?.event?.message, ['text', 'entities']);

      const entity: any = first(entities);

      if (entity?.type !== 'bot_command') {
        return;
      }

      const [command, param] = text.split(' ');

      if (command === '/start') {
        await context.sendText(`Got your param: ${param}`);
      }

      await context.sendText(`Welcome`);
    }),
    this.text(/^(hi|hello)$/i, async (context) => {
      await context.sendText('Hello!');
    }),
  ];
}
