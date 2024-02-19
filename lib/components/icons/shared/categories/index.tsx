import Image, { ImageProps } from 'next/image';
import { default as ANIMAL_PROPS } from '../../../../../public/assets/categories/animal.svg';
import { default as BUSINESS_PROPS } from '../../../../../public/assets/categories/business.svg';
import { default as FOLKS_PROPS } from '../../../../../public/assets/categories/folks.svg';
import { default as GIVING_PROPS } from '../../../../../public/assets/categories/giving.svg';
import { default as HEALTH_PROPS } from '../../../../../public/assets/categories/healthcare.svg';
import { default as HOUSING_PROPS } from '../../../../../public/assets/categories/housing.svg';
import { default as LEARN_PROPS } from '../../../../../public/assets/categories/learn.svg';
import { default as NATURE_PROPS } from '../../../../../public/assets/categories/nature.svg';
import { default as NUTRITION_PROPS } from '../../../../../public/assets/categories/nutrition.svg';
import { default as PRAY_PROPS } from '../../../../../public/assets/categories/pray.svg';
import { default as PROMISE_PROPS } from '../../../../../public/assets/categories/promise.svg';
import { default as REST_PROPS } from '../../../../../public/assets/categories/rest.svg';
import { default as SPORT_PROPS } from '../../../../../public/assets/categories/sport.svg';
import { Category } from './types';

const Icon: React.FC<Pick<ImageProps, 'width' | 'height'> & { src?: string; }> = (props) => (
  <img {...props} />
);

export const IconCategory = {
  [Category.Animal]: (props) => (<Icon {...props} src={ANIMAL_PROPS.src} />),
  [Category.Business]: (props) => (<Icon {...props} src={BUSINESS_PROPS.src} />),
  [Category.Folks]: (props) => (<Icon {...props} src={FOLKS_PROPS.src} />),
  [Category.Giving]: (props) => (<Icon {...props} src={GIVING_PROPS.src} />),
  [Category.Health]: (props) => (<Icon {...props} src={HEALTH_PROPS.src} />),
  [Category.Housing]: (props) => (<Icon {...props} src={HOUSING_PROPS.src} />),
  [Category.Learn]: (props) => (<Icon {...props} src={LEARN_PROPS.src} />),
  [Category.Nature]: (props) => (<Icon {...props} src={NATURE_PROPS.src} />),
  [Category.Nutrition]: (props) => (<Icon {...props} src={NUTRITION_PROPS.src} />),
  [Category.Pray]: (props) => (<Icon {...props} src={PRAY_PROPS.src} />),
  [Category.Promise]: (props) => (<Icon {...props} src={PROMISE_PROPS.src} />),
  [Category.Rest]: (props) => (<Icon {...props} src={REST_PROPS.src} />),
  [Category.Sport]: (props) => (<Icon {...props} src={SPORT_PROPS.src} />),
};

export * from './constants';

export default IconCategory;
