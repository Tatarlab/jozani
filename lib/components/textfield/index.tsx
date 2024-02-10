import cn from 'classnames';
import React, {
  ChangeEvent, KeyboardEvent, useCallback, useEffect, useRef, useState
} from 'react';
import { getRows } from './shared/helpers';
import { ITextFieldProps } from './types';
import { StyledTextField } from './shared';
import { TRIM_SYMBOLS } from './shared/constants';

const TextField = React.forwardRef<unknown, ITextFieldProps>(
  ({
    isError = false,
    isContrast = false,
    isDisabled = false,
    isFullWidth = false,
    isMultiline = false,
    isDynamicMultiline = false,
    className,
    value,
    onChange: _onChange,
    onKeyDown: _onKeyDown,
    onKeyUp: _onKeyUp,
    errorText,
    helperText,
    ...props
  }: ITextFieldProps) => {
    // @TODO: move dynamic multiline functionality to the hoc

    const ref = useRef<null | HTMLInputElement>(null);

    const [rows, setRows] = useState(1);

    const additionalText = isError ? errorText : helperText;

    const onChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        const update = (value: string) => {
          if (_onChange) {
            _onChange(e);
          }
        };

        if (!isDynamicMultiline) {
          update(value);

          return;
        }

        const lastChar = value.substr(-1);
        const preLastChar = value.substr(-2, 1);

        if (lastChar === preLastChar && TRIM_SYMBOLS.includes(preLastChar)) {
          e.preventDefault();

          return;
        }

        update(value);
      },
      [isDynamicMultiline, _onChange]
    );

    const onKeyDown = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (!isDynamicMultiline) {
          return;
        }

        if (_onKeyDown) {
          _onKeyDown(e);

          return;
        }

        e.stopPropagation();
      },
      [isDynamicMultiline, ref, _onKeyDown]
    );

    const onKeyUp = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (!isDynamicMultiline) {
          return;
        }

        if (_onKeyUp) {
          _onKeyUp(e);
        }

        e.stopPropagation();
      },
      [isDynamicMultiline, _onKeyUp]
    );

    useEffect(() => {
      const rows = getRows(value, ref.current as HTMLElement);

      setRows(rows);
    }, [value, ref.current]);

    return (
      <StyledTextField
        inputRef={ref}
        error={isError}
        disabled={isDisabled}
        multiline={isMultiline || isDynamicMultiline}
        isFullWidth={isFullWidth}
        className={cn(className, { contrast: isContrast })}
        value={value}
        rows={rows}
        helperText={additionalText}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        {...props}
      />
    );
  }
);

TextField.displayName = 'TextField';

export default TextField;
