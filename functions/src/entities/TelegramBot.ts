import { telegram } from 'bottender/router';
import { ChatBot } from './ChatBot';
import { Channels, ChatBotContext, Route } from './ChatBot/types';

export default class TelegramBot extends ChatBot {
  constructor(
    protected getStrategy?: () => Promise<Route<ChatBotContext, any>[]>,
  ) {
    super(Channels.Telegram, getStrategy);
  }

  any = telegram.any;

  message = telegram.message;
  editedMessage = telegram.editedMessage;

  channelPost = telegram.channelPost;
  editedChannelPost = telegram.editedChannelPost;

  inlineQuery = telegram.inlineQuery;
  chosenInlineResult = telegram.chosenInlineResult;
  callbackQuery = telegram.callbackQuery;
  shippingQuery = telegram.shippingQuery;
  preCheckoutQuery = telegram.preCheckoutQuery;

  poll = telegram.poll;
  pollAnswer = telegram.pollAnswer;
}
