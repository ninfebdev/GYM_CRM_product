'use client';

import { Switch as SwitchPrimitive } from '@base-ui/react/switch';

import { cn } from '@/lib/utils';

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/50 border-input focus-visible:border-ring focus-visible:ring-ring/50 relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-none border px-0.5 transition-colors outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-background pointer-events-none block size-3.5 rounded-none shadow-sm transition-transform duration-150 data-checked:translate-x-4 data-unchecked:translate-x-0"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
