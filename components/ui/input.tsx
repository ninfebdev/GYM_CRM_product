import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';

import { cn } from '@/lib/utils';

type NativeInputProps = React.ComponentProps<'input'>;

function normalizeInputValue(value: NativeInputProps['value']) {
  if (typeof value === 'number' && Number.isNaN(value)) {
    return '';
  }

  return value;
}

function Input(inputProps: NativeInputProps) {
  const { className, type, value, defaultValue, ...props } = inputProps;

  const normalizedValue = normalizeInputValue(value);
  const normalizedDefaultValue = normalizeInputValue(defaultValue);
  const isControlled = Object.prototype.hasOwnProperty.call(inputProps, 'value');

  const valueProps = isControlled
    ? { value: normalizedValue ?? '' }
    : normalizedDefaultValue !== undefined
      ? { defaultValue: normalizedDefaultValue }
      : {};

  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      {...valueProps}
      className={cn(
        'dark:bg-input/30 border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 file:text-foreground placeholder:text-muted-foreground h-8 w-full min-w-0 rounded-none border bg-white px-2.5 py-1 text-sm transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-1 md:text-sm',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
