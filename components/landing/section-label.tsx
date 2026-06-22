import type { ReactNode } from 'react';

/**
 * Small `# Label` eyebrow used above section headings.
 * Inline element — alignment (left / centered) is controlled by the parent.
 */
export function SectionLabel({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-geom text-base font-semibold bg-linear-to-r from-stone-600 to-orange-500 bg-clip-text text-transparent ${
        className ? ` ${className}` : ''
      }`}
    >
      <span aria-hidden className="text-stone-600">
        #
      </span>{' '}
      {children}
    </span>
  );
}
