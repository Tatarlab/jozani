import React, {
  useEffect, useRef, useState 
} from 'react';
import { pick } from 'lodash';
import { Card } from '../../../lib/components/card';
import {
  CATEGORIES, CATEGORY_COLORS, CATEGORY_SRC, 
} from '../../../lib/components/icons';
import { Category } from '../../../lib/components/icons/shared/categories/types';
import Typography from '../../../lib/components/typography';

export interface ICategoryBoxProps {
  category: Category;
  onChange(category: Category): void;
}

const CategoryBox: React.FC<ICategoryBoxProps> = ({
  category: categoryOrigin,
  onChange,
}) => {
  const [category, setCategory] = useState(categoryOrigin);
  const ref = useRef<HTMLDivElement>(null);

  const onCategoryClick = (newCategory: Category) => {
    setCategory(newCategory);
    onChange(newCategory);
  };

  const renderCategory = (c, i) => {
    const isActive = c === category;
    const [from, to] = CATEGORY_COLORS[c];

    const backgroundProps = {
      backgroundImage: `linear-gradient(333deg, ${from}, ${to})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    };

    const maskProps = {
      ...(isActive ? { backgroundColor: 'white' } : backgroundProps),
      maskImage: `url(${CATEGORY_SRC[c]})`,
      maskRepeat: 'no-repeat',
      maskPosition: 'center',
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '-webkit-mask-image': `url(${CATEGORY_SRC[c]})`,
    };
    
    return (
      <div
        key={i}
        id={`charity-category-${c}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <Card
          style={(isActive ? backgroundProps : {})}
          onClick={() => onCategoryClick(c)}
        >
          <i
            style={{
              display: 'flex',
              width: 32,
              height: 32,
              ...maskProps,
            }}
          />
        </Card>

        <Typography variant="caption" marginTop={1}>
          {c}
        </Typography>
      </div>
    );
  };

  useEffect(() => {
    if (!ref || !ref.current) {
      return;
    }

    const charityCategoryEl = document.getElementById(`charity-category-${category}`);
    const {
      offsetLeft = 0,
      offsetWidth = 0,
    } = pick(charityCategoryEl, ['offsetLeft', 'offsetWidth']);
    const {
      offsetLeft: offsetLeftParent = 0,
      offsetWidth: offsetWidthParent = 0,
    } = ref.current;

    ref.current.scrollTo({
      left: (offsetLeft - offsetLeftParent) + (offsetWidth / 2) - (offsetWidthParent / 2), // places el scroll to center
      behavior: 'smooth',
    });
  }, [ref, category]);

  return (
    <section>
      <Typography variant="h6">
        Charity Initiative
      </Typography>

      <div
        ref={ref}
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.6rem',
          paddingTop: '1.6rem',
          overflow: 'auto',
        }}
      >
        {CATEGORIES.map(renderCategory)}
      </div>
    </section>
  );
};

export default CategoryBox;
