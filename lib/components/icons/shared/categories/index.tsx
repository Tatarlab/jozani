import { ImageProps } from 'next/image';import { Category } from './types';
import { CATEGORY_SRC } from './constants';

const Icon: React.FC<Pick<ImageProps, 'width' | 'height'> & { src?: string; }> = (props) => (
  <img {...props} />
);

export const IconCategory = {
  [Category.Animal]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Animal]} />),
  [Category.Business]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Business]} />),
  [Category.Folks]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Folks]} />),
  [Category.Giving]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Giving]} />),
  [Category.Health]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Health]} />),
  [Category.Housing]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Housing]} />),
  [Category.Learn]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Learn]} />),
  [Category.Nature]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Nature]} />),
  [Category.Nutrition]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Nutrition]} />),
  [Category.Pray]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Pray]} />),
  [Category.Promise]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Promise]} />),
  [Category.Rest]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Rest]} />),
  [Category.Sport]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Sport]} />),
};

export * from './constants';

export default IconCategory;
