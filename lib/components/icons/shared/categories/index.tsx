import { ImageProps } from 'next/image';import { Category } from './types';
import { CATEGORY_SRC } from './constants';

const Icon: React.FC<Pick<ImageProps, 'width' | 'height'> & { src?: string; }> = (props) => (
  <img {...props} />
);

export const IconCategory = {
  [Category.Animal]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Animal]} />),
  [Category.Business]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Business]} />),
  [Category.Confession]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Confession]} />),
  [Category.Folks]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Folks]} />),
  [Category.Food]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Food]} />),
  [Category.Giving]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Giving]} />),
  [Category.Health]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Health]} />),
  [Category.Learn]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Learn]} />),
  [Category.Nature]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Nature]} />),
  [Category.Promise]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Promise]} />),
  [Category.Rest]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Rest]} />),
  [Category.Sport]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Sport]} />),
  [Category.Shelter]: (props) => (<Icon {...props} src={CATEGORY_SRC[Category.Shelter]} />),
};

export * from './constants';

export default IconCategory;
