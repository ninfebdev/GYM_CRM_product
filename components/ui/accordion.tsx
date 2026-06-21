'use client';

import * as React from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface AccordionContextType {
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextType | null>(null);

export function Accordion({
  children,
  className,
  defaultValue = null,
  ...props
}: Omit<React.ComponentProps<'div'>, 'defaultValue'> & { defaultValue?: string | null }) {
  const [openValue, setOpenValue] = React.useState<string | null>(defaultValue);

  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div
        className={cn(
          'divide-border border-border ring-foreground/10 divide-y border ring-1',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemContextType {
  value: string;
}

const AccordionItemContext = React.createContext<AccordionItemContextType | null>(null);

export function AccordionItem({
  children,
  value,
  className,
  ...props
}: React.ComponentProps<'div'> & { value: string }) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn('bg-card/95 transition-colors', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<'button'>) {
  const context = React.useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);

  if (!context || !itemContext) {
    throw new Error('AccordionTrigger must be used inside Accordion and AccordionItem');
  }

  const { openValue, setOpenValue } = context;
  const { value } = itemContext;
  const isOpen = openValue === value;

  const handleToggle = () => {
    setOpenValue(isOpen ? null : value);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        'text-foreground hover:bg-muted/30 focus-visible:ring-ring/50 flex w-full cursor-pointer items-center justify-between px-5 py-4 text-left text-sm font-semibold transition-all outline-none focus-visible:ring-1',
        className,
      )}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <CaretDownIcon
        size={16}
        className={cn(
          'text-muted-foreground shrink-0 transition-transform duration-250 ease-in-out',
          isOpen ? 'text-foreground rotate-180' : '',
        )}
      />
    </button>
  );
}

export function AccordionContent({ children, className, ...props }: React.ComponentProps<'div'>) {
  const context = React.useContext(AccordionContext);
  const itemContext = React.useContext(AccordionItemContext);

  if (!context || !itemContext) {
    throw new Error('AccordionContent must be used inside Accordion and AccordionItem');
  }

  const { openValue } = context;
  const { value } = itemContext;
  const isOpen = openValue === value;

  return (
    <div
      className={cn(
        'border-border/40 overflow-hidden transition-all duration-300 ease-in-out',
        isOpen
          ? 'max-h-250 border-t opacity-100'
          : 'pointer-events-none max-h-0 border-t-0 opacity-0',
        className,
      )}
      {...props}
    >
      <div className="p-5">{children}</div>
    </div>
  );
}
