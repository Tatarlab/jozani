import { telegram } from 'bottender/router';
import { ChatBot } from './ChatBot';

export default class TelegramBot extends ChatBot {
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
