import {
  get, join, kebabCase, transform
} from 'lodash';

export const map2CssVars = (
  vocabulary: Record<never, unknown>,
  prefix: string,
) => `${join(
  transform(
    vocabulary,
    (r, value, key) => r.push(`--prbt-${prefix}-${/([0-9]+)/.test(key) && key || kebabCase(key)}: ${get(vocabulary, key)}`),
    [] as string[]),
  ';\r\n'
)};`;

export const getCssVar = (prefix: string, key: unknown): string => `var(--prbt-${prefix}-${key})`;
