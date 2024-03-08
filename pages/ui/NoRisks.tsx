import React from 'react';
import { chunk } from 'lodash';
import Typography from '../../lib/components/typography';
import Grid from '../../lib/components/grid';
import { Category } from '../../lib/components/icons/shared/categories/types';
import Row from '../../lib/components/row';
import Col from '../../lib/components/col';
import { Card } from '../../lib/components/card';
import { helperCategoryMaskProps } from '../challenge/ui/CategoryBox';

const CATEGORIES = Object.values(Category).filter((c) => c !== Category.Giving);
const CATEGORIES_ROWS = chunk(CATEGORIES, 6);

const NoRisks: React.FC = () => (
  <>
    <Typography
      variant="h2"
      textAlign="center"
      fontWeight="bold"
      style={{ marginBottom: '2rem', }}
    >
      No more risks
    </Typography>

    <Typography variant="h6" textAlign="center">
      Deposited funds are sent to friends or charities
    </Typography>

    <Grid outgap={[32, 0]}>
      {CATEGORIES_ROWS.map((row, i) => (
        <Grid key={i} outgap={[4, 0]}>
          <Row spacing={1}>
            {row.map((c, i) => (
              <Col key={i} alignItems="center" mobile>
                <Card
                  sx={{ margin: '0 auto', }}
                >
                  <i
                    style={{
                      display: 'flex',
                      width: 32,
                      height: 32,
                      ...helperCategoryMaskProps(c),
                    }}
                  />
                </Card>

                <Typography variant="caption" marginTop={1}>
                  {c}
                </Typography>
              </Col>
            ))}
          </Row>
        </Grid>
      ))}
    </Grid>
  </>
);

export default NoRisks;
