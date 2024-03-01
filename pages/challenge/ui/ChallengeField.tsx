import React, { useState } from 'react';
import TextField from '../../../lib/components/textfield';
import { ITextFieldProps } from '../../../lib/components/textfield/types';
import { IconUpdate } from '../../../lib/components/icons';
import Typography from '../../../lib/components/typography';

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
      <Typography variant="h6">
        Challenge Info
      </Typography>

      <div style={{ marginTop: '1.6rem' }} />

      {!isNew && (
        <Typography
          isBranding
          variant="body2"
        >
          {name}
        </Typography>
      )}

      {isNew && (
        <TextField
          isBranding
          isFullWidth
          hiddenLabel
          autoFocus
          isError={isError}
          isDisabled={isDisabled}
          size="large"
          placeholder="Few words to describe the challenge"
          helperText="A short playful description"
          errorText="Required Minimum 10 symbols"
          // label="Challenge name"
          value={name}
          InputProps={{ endAdornment: <IconUpdate fill="currentColor" />, }}
          onInput={onInput}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default ChallengeField;
