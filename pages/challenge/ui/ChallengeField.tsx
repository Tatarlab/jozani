import React, { useState } from 'react';
import TextField from '../../../lib/components/textfield';
import { ITextFieldProps } from '../../../lib/components/textfield/types';
import { IconUpdate } from '../../../lib/components/icons';
import Typography from '../../../lib/components/typography';

type IChallengeFieldProps = Pick<ITextFieldProps,
  'isError' |
  'isDisabled' |
  'onInput' |
  'onChange'
>;

const ChallengeField: React.FC<IChallengeFieldProps> = ({
  isError,
  isDisabled,
  onInput,
  onChange: _onChange,
}) => {
  const [name, setName] = useState('');

  const onChange = (e) => {
    const { value } = e.target;

    setName(value);

    if (_onChange) {
      _onChange(value);
    }
  };

  return (
    <>
      <Typography variant="h6">
        Challenge name
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
        helperText="Few words to describe the challenge"
        errorText="Required Minimum 10 symbols"
        // label="Challenge name"
        value={name}
        InputProps={{ endAdornment: <IconUpdate fill="currentColor" />, }}
        onInput={onInput}
        onChange={onChange}
      />
    </>
  );
};

export default ChallengeField;
