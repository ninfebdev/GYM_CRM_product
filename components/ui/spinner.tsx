import { cn } from '@/lib/utils';

type SpinnerProps = {
  className?: string;
  ariaLabel?: string;
};

export function Spinner({ className, ariaLabel = 'Loading' }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label={ariaLabel}
      className={cn(
        'border-border/70 border-t-primary size-4 animate-spin rounded-full border',
        className,
      )}
    />
  );
}
