import { format } from 'date-fns';
import { CalendarDotsIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type DatePickerFieldProps = {
  label: string;
  value: string | null | undefined;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: { message?: string };
  fromDate?: Date;
  toDate?: Date;
};

export function DatePickerField({
  label,
  value,
  onChange,
  placeholder = 'Pick a date',
  disabled,
  error,
  fromDate,
  toDate,
}: DatePickerFieldProps) {
  const selectedDate = value ? new Date(value) : undefined;

  const disabledMatchers = [
    ...(fromDate ? [{ before: fromDate }] : []),
    ...(toDate ? [{ after: toDate }] : []),
  ];

  return (
    <Field data-invalid={!!error}>
      <FieldLabel>{label}</FieldLabel>
      <Popover>
        <PopoverTrigger
          disabled={disabled}
          render={
            <Button
              variant="outline"
              className="border-border/90 h-8 w-full justify-between rounded-none bg-white px-3 font-normal"
            />
          }
        >
          <span className="text-sm">
            {value ? format(new Date(value), 'dd MMM yyyy') : placeholder}
          </span>
          <CalendarDotsIcon className="text-muted-foreground size-4" />
        </PopoverTrigger>
        <PopoverContent className="w-fit rounded-none p-0" align="start" sideOffset={6}>
          <Calendar
            mode="single"
            captionLayout="dropdown"
            selected={selectedDate}
            onSelect={(date) => onChange(date ? format(date, 'yyyy-MM-dd') : '')}
            disabled={disabledMatchers.length > 0 ? disabledMatchers : undefined}
            startMonth={fromDate}
            endMonth={toDate}
          />
        </PopoverContent>
      </Popover>
      <FieldError errors={[error]} />
    </Field>
  );
}
