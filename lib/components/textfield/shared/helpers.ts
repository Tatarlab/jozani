/* eslint-disable no-unsafe-optional-chaining */
import {
  ROWS_MAX, SYMBOL_WIDTH 
} from './constants';

export const getSymbolsInRow = (
  el: HTMLElement,
) => {
  if (!el) {
    return 30;
  }

  const symbolsByRow = parseInt(`${el?.clientWidth / SYMBOL_WIDTH}`);

  return symbolsByRow;
}

export const getLines = (comment: string) => comment.replace(/(.*[^\n])/g, '').length + 1;

export const getRows = (
  comment: string,
  el: HTMLElement,
) => {
  if (!comment || !el) {
    return 1;
  }

  const symbolsInRow = getSymbolsInRow(el);
  const lines = getLines(comment);
  const linesByString = parseInt(`${comment.length / (symbolsInRow)}`) + 1;
  const linesMax = Math.max(lines, linesByString);

  return Math.min(Math.max(1, linesMax), ROWS_MAX);
}
