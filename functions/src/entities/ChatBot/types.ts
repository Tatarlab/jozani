import {
  Action,
  Context,
  LineContext,
  MessengerContext,
  SlackContext,
  TelegramContext,
  ViberContext,
} from 'bottender';
import { RoutePredicate } from 'bottender/router';

export type ChatBotContext = LineContext
  | MessengerContext
  | SlackContext
  | TelegramContext
  | ViberContext;

export interface IChatBotConfig {
  channels: {
    messenger?: unknown[];
    line?: unknown[];
    telegram?: unknown[];
    slack?: unknown[];
    viber?: unknown[];
    whatsapp?: unknown[];
  };
}

export enum Channels {
  Messenger = 'messenger',
  LINE = 'line',
  Telegram = 'telegram',
  Slack = 'slack',
  Viber = 'viber',
  Whatsapp = 'whatsapp',
}

export type Route<C extends Context, AC extends Context = C> = {
  predicate: RoutePredicate<C>;
  action: Action<AC, any>;
};

export type MatchPattern = string | Array<string> | RegExp;

export { Action } from 'bottender';
