import React, {
  useEffect, useRef, useState 
} from 'react';
import {
  get, pick 
} from 'lodash';
import { capitalize } from '@mui/material';
import { Card } from '../../../lib/components/card';
import {
  CATEGORIES, CATEGORY_COLORS, CATEGORY_SRC, 
} from '../../../lib/components/icons';
import { Category } from '../../../lib/components/icons/shared/categories/types';
import Typography from '../../../lib/components/typography';
import Grid from '../../../lib/components/grid';
import Col from '../../../lib/components/col';
import Row from '../../../lib/components/row';
import { dayjs, } from '../../../lib/domains';
import { IChallenge } from '../../../lib/store/challenge/types';
import Skeleton from '../../../lib/components/skeleton';
import { formatAmountCurrency } from '../../../lib/utils';

export interface ICategoryBoxProps extends Pick<IChallenge,
  'category' |
  'reward' |
  'currency'
> {
  isNew?: boolean;
  charityReward: number;
  createdAt?: Date | number;
  onChange(category: Category): void;
}

export const helperCategoryBackgroundProps = (c: Category = Category.Promise) => {
  const from = get(CATEGORY_COLORS, `${c}[0]`, CATEGORY_COLORS[Category.Promise][0]);
  const to = get(CATEGORY_COLORS, `${c}[1]`, CATEGORY_COLORS[Category.Promise][1]);

  return {
    backgroundImage: `linear-gradient(333deg, ${from}, ${to})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
};

export const helperCategoryMaskProps = (c: Category = Category.Promise, isActive = false) => {
  const src = get(CATEGORY_SRC, c, CATEGORY_SRC[Category.Promise]);

  return {
    ...(isActive ? { backgroundColor: 'white' } : helperCategoryBackgroundProps(c)),
    maskImage: `url(${src})`,
    maskRepeat: 'no-repeat',
    maskPosition: 'center',
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/naming-convention
    '-webkit-mask-image': `url(${src})`,
  };
};

const CategoryBox: React.FC<ICategoryBoxProps> = ({
  isNew = false,
  category: categoryOrigin,
  currency,
  reward,
  charityReward,
  createdAt,
  onChange,
}) => {
  const isLoading = !reward;
  const [category, setCategory] = useState(categoryOrigin);
  const ref = useRef<HTMLDivElement>(null);

  const onCategoryClick = (newCategory: Category) => {
    setCategory(newCategory);
    onChange(newCategory);
  };

  const renderCategory = (c, i) => {
    const isActive = c === category;

    const backgroundProps = helperCategoryBackgroundProps(c);

    const maskProps = helperCategoryMaskProps(c, isActive);
    
    return (
      <div
        key={i}
        id={`charity-category-${c}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          cursor: 'pointer',
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
    if (!ref || !ref.current || !isNew) {
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
  }, [isNew, ref, category]);

  return (
    <section>
      {isNew && (
        <Typography variant="h6">
          Charity Initiative

          <div>
            <Typography variant="body1">
              Stuck challenges donate funds to selected charity
            </Typography>
          </div>
        </Typography>
      )}

      {!isNew && (
        <Grid outgap={[16, 0]}>
          <Card>
            <Grid outgap={0}>
              <Row spacing={2}>
                <Col mobile="auto">
                  {isLoading && (
                    <Skeleton
                      variant="circular"
                      width={32}
                      height={32}
                    />
                  ) || (
                    <i
                      style={{
                        display: 'flex',
                        width: 32,
                        height: 32,
                        ...helperCategoryMaskProps(category),
                      }}
                    />
                  )}
                </Col>

                <Col>
                  <Typography
                    isLoading={isLoading}
                    variant="body2"
                  >
                    {`${capitalize(category || Category.Promise)} Initiative`}
                  </Typography>

                  <Typography
                    isLoading={isLoading}
                    variant="caption"
                  >
                    <strong style={{ fontWeight: 600 }}>
                      {`Active since: `}
                    </strong>

                    {`${dayjs(createdAt).format('D MMM YYYY')}`}
                  </Typography>
                </Col>

                <Col mobile="auto" justifyContent="center">
                  <Typography
                    isLoading={isLoading}
                    variant="h6"
                  >
                    {formatAmountCurrency(charityReward, currency)}
                  </Typography>
                </Col>
              </Row>
            </Grid>
          </Card>
        </Grid>
      )}

      {isNew && (
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
      )}
    </section>
  );
};

export default CategoryBox;
