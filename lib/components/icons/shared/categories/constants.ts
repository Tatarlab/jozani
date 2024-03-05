import { Category } from './types';

export const CATEGORIES = Object.values(Category);

export const CATEGORY_COLORS: Record<Category, string[]> = {
  [Category.Animal]: ['#7d4707', '#f0a967'],
  [Category.Business]: ['#753511', '#8f6035'],
  [Category.Confession]: ['#63daff', '#e1fffc'],
  [Category.Folks]: ['#ee4d87', '#e79bbb'],
  [Category.Food]: ['#f5963d', '#ffedad'],
  [Category.Giving]: ['#e11b00', '#f98662'],
  [Category.Health]: ['#e89e86', '#ffe0c3'],
  [Category.Learn]: ['#c90c00', '#d37f42'],
  [Category.Nature]: ['#51dc5f', '#03f4ac'],
  [Category.Rest]: ['#e9b020', '#fff7ab'],
  [Category.Promise]: ['#262727', '#7c8082'],
  [Category.Sport]: ['#1d2e87', '#20bff4'],
  [Category.Shelter]: ['#f47703', '#fbcf35'],
};

export const CATEGORY_SRC = {
    [Category.Animal]: 'assets/categories/animal.svg',
    [Category.Business]: 'assets/categories/business.svg',
    [Category.Confession]: 'assets/categories/confession.svg',
    [Category.Folks]: 'assets/categories/folks.svg',
    [Category.Food]: 'assets/categories/food.svg',
    [Category.Giving]: 'assets/categories/giving.svg',
    [Category.Health]: 'assets/categories/health.svg',
    [Category.Learn]: 'assets/categories/learn.svg',
    [Category.Nature]: 'assets/categories/nature.svg',
    [Category.Promise]: 'assets/categories/promise.svg',
    [Category.Rest]: 'assets/categories/rest.svg',
    [Category.Sport]: 'assets/categories/sport.svg',
    [Category.Shelter]: 'assets/categories/shelter.svg',
  };
