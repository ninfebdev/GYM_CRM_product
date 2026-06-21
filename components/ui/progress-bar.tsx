export function ProgressBar({
  progress,
  variant = 'default',
}: {
  progress: number;
  variant?: 'default' | 'warning' | 'success';
}) {
  const bgColor = {
    default: 'bg-primary',
    warning: 'bg-amber-500',
    success: 'bg-emerald-500',
  };

  return (
    <div className="bg-muted h-2 w-full overflow-hidden">
      <div
        className={`h-full transition-all duration-500 ease-out ${bgColor[variant]}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
