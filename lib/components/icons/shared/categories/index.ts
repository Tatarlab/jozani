import { default as IconCategoryAnimal } from '../../../../../public/assets/categories/animal.svg';
import { default as IconCategoryBusiness } from '../../../../../public/assets/categories/business.svg';
import { default as IconCategoryFolks } from '../../../../../public/assets/categories/folks.svg';
import { default as IconCategoryGiving } from '../../../../../public/assets/categories/giving.svg';
import { default as IconCategoryHealth } from '../../../../../public/assets/categories/healthcare.svg';
import { default as IconCategoryHousing } from '../../../../../public/assets/categories/housing.svg';
import { default as IconCategoryLearn } from '../../../../../public/assets/categories/learn.svg';
import { default as IconCategoryNature } from '../../../../../public/assets/categories/nature.svg';
import { default as IconCategoryNutrition } from '../../../../../public/assets/categories/nutrition.svg';
import { default as IconCategoryPray } from '../../../../../public/assets/categories/pray.svg';
import { default as IconCategoryPromise } from '../../../../../public/assets/categories/promise.svg';
import { default as IconCategoryRest } from '../../../../../public/assets/categories/rest.svg';
import { default as IconCategorySport } from '../../../../../public/assets/categories/sport.svg';
import { Category } from './types';

export const IconCategory = {
  [Category.Animal]: IconCategoryAnimal,
  [Category.Business]: IconCategoryBusiness,
  [Category.Folks]: IconCategoryFolks,
  [Category.Giving]: IconCategoryGiving,
  [Category.Health]: IconCategoryHealth,
  [Category.Housing]: IconCategoryHousing,
  [Category.Learn]: IconCategoryLearn,
  [Category.Nature]: IconCategoryNature,
  [Category.Nutrition]: IconCategoryNutrition,
  [Category.Pray]: IconCategoryPray,
  [Category.Promise]: IconCategoryPromise,
  [Category.Rest]: IconCategoryRest,
  [Category.Sport]: IconCategorySport,
};

export * from './constants';

export default IconCategory;
