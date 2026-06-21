import { TableCell, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

interface DataTableSkeletonProps {
  columnCount: number;
  rowCount?: number;
}

export function DataTableSkeleton({ columnCount, rowCount = 8 }: DataTableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rowCount }).map((_, i) => (
        <TableRow key={i} className="border-border/70 border-b hover:bg-transparent">
          {Array.from({ length: columnCount }).map((_, j) => (
            <TableCell key={j} className="h-12 px-3">
              <Skeleton className="h-4 w-full rounded-sm" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
