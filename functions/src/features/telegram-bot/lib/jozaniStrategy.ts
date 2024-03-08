import { first, pick } from 'lodash';
import { ChatBotContext, Route } from '../../../entities/ChatBot/types';
import TelegramBot from '../../../entities/TelegramBot';
import { _createTelegramSubscription } from '../../subscription';

/* eslint-disable no-invalid-this */
export async function jozaniStrategy(
  this: TelegramBot,
): Promise<Route<ChatBotContext, any>[]> {
  // const next = (context: Context, props?: Props<any>) => {
  //   if (_next) {
  //     _next(context, props);
  //   }
  // };

  return [
    this.text(/^(hi|hello)$/i, async (context, { next }) => {
      await context.sendText('Hello!');

      next(context);
    }),
    // message can't pipe next!
    this.message(async (context) => {
      const {
        text = '',
        entities = [],
        from: telegramUser
      } = pick(context?.event?.message, ['text', 'entities', 'from', 'chat']);

      const entity: any = first(entities);

      if (entity?.type !== 'bot_command') {
        await context.sendText('Do not understand...');
        return;
      }

      const [command, param] = text.split(' ');

      switch (command) {
        case '/start':
        default: {
          if (param) {
            await context.sendText(`Subscribe to ${param}`);

            await _createTelegramSubscription({ address: param, ...telegramUser });

            await context.sendText(`You're done. Check for updates`);
          }

          await context.sendText(`Welcome ${telegramUser?.username}`);

          return;
        }
      }
    }),
  ];
}
