import React, { useState } from 'react';
import TextField from '../../../lib/components/textfield';
import { ITextFieldProps } from '../../../lib/components/textfield/types';
import { IconUpdate } from '../../../lib/components/icons';
import Typography from '../../../lib/components/typography';
import { Card } from '../../../lib/components/card';
import Row from '../../../lib/components/row';
import Grid from '../../../lib/components/grid';
import Col from '../../../lib/components/col';

interface IChallengeFieldProps extends Pick<ITextFieldProps,
  'isError' |
  'isDisabled' |
  'onInput'
> {
  isNew?: boolean;
  name: string;
  onChange?(name: string): void;
};

const ChallengeField: React.FC<IChallengeFieldProps> = ({
  isNew = false,
  isError,
  isDisabled,
  name,
  onInput,
  onChange: _onChange,
}) => {
  const onChange = (e) => {
    const { value } = e.target;

    if (_onChange) {
      _onChange(value);
    }
  };

  return (
    <>
      {!isNew && (
        <Card title="Challenge Terms">
          <Grid>
            <Row>
              <Col>
                <Typography
                  isBranding
                  isLoading={!name}
                  variant="body2"
                >
                  {name}
                </Typography>
              </Col>
            </Row>

            {name && (
              <Row>
                <Col>
                  <Typography
                    variant="body1"
                    marginTop={2}
                    fontWeight={500}
                    color="primary"
                  >
                    {(name?.length > 100
                      ? `Seems quite challenging! Go get your reward💪`
                      : 'Looks soo easy! Take it now!')}
                  </Typography>
                </Col>
              </Row>
            )}
          </Grid>
        </Card>
      )}

      {isNew && (
        <>
          <Typography variant="h6">
            Challenge Terms
          </Typography>

          <div style={{ marginTop: '1.6rem' }} />

          <TextField
            isBranding
            isFullWidth
            hiddenLabel
            autoFocus
            isError={isError}
            isDisabled={isDisabled}
            size="large"
            placeholder="Few words to describe the challenge"
            helperText="Just a short playful description"
            errorText="Required Minimum 10 symbols"
            // label="Challenge name"
            value={name}
            InputProps={{ endAdornment: <IconUpdate fill="currentColor" />, }}
            onInput={onInput}
            onChange={onChange}
          />
        </>
      )}
    </>
  );
};

export default ChallengeField;
