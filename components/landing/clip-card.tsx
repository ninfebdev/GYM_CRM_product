import type { ReactNode } from 'react';

/**
 * Cut-corner card with a border that stays visible on every edge (including
 * the diagonal notches). A colored layer sits behind a slightly inset fill,
 * so the gap reads as a crisp border all the way around — `clip-path` alone
 * would clip the border away.
 *
 * The notch size is driven by the `--notch` CSS variable (default 24px). Set it
 * via `outerClassName="[--notch:10px]"` and the inner layer inherits it.
 */
export function ClipCard({
  border = 'bg-stone-300',
  outerClassName = '',
  className = '',
  children,
}: {
  border?: string;
  outerClassName?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`clip-notch ${border} p-[1.5px] ${outerClassName}`}>
      <div className={`clip-notch ${className}`}>{children}</div>
    </div>
  );
}
