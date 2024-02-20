import { ImageProps } from 'next/image';import { Category } from './types';

const Icon: React.FC<Pick<ImageProps, 'width' | 'height'> & { src?: string; }> = (props) => (
  <img {...props} />
);

export const IconCategory = {
  [Category.Animal]: (props) => (<Icon {...props} src="assets/categories/animal.svg" />),
  [Category.Business]: (props) => (<Icon {...props} src="assets/categories/business.svg" />),
  [Category.Folks]: (props) => (<Icon {...props} src="assets/categories/folks.svg" />),
  [Category.Giving]: (props) => (<Icon {...props} src="assets/categories/giving.svg" />),
  [Category.Health]: (props) => (<Icon {...props} src="assets/categories/healthcare.svg" />),
  [Category.Housing]: (props) => (<Icon {...props} src="assets/categories/housing.svg" />),
  [Category.Learn]: (props) => (<Icon {...props} src="assets/categories/learn.svg" />),
  [Category.Nature]: (props) => (<Icon {...props} src="assets/categories/nature.svg" />),
  [Category.Nutrition]: (props) => (<Icon {...props} src="assets/categories/nutrition.svg" />),
  [Category.Pray]: (props) => (<Icon {...props} src="assets/categories/pray.svg" />),
  [Category.Promise]: (props) => (<Icon {...props} src="assets/categories/promise.svg" />),
  [Category.Rest]: (props) => (<Icon {...props} src="assets/categories/rest.svg" />),
  [Category.Sport]: (props) => (<Icon {...props} src="assets/categories/sport.svg" />),
};

export * from './constants';

export default IconCategory;
