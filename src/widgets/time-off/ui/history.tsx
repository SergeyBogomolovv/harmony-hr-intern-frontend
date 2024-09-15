"use client";
import { RiFolderHistoryLine } from "react-icons/ri";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { CategoryDropdown, CountDropdown, HistroryDropdown } from "./dropdowns";

type TimeOff = {
  date: string;
  description: string;
  usedDays?: string;
  earnedDays?: string;
  balance: string;
};

export const timeoffs: TimeOff[] = [
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    balance: (3).toFixed(2),
    earnedDays: (3).toFixed(2),
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    balance: (3).toFixed(2),
    usedDays: "-6",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    balance: (3).toFixed(2),
    earnedDays: (3).toFixed(2),
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    balance: (3).toFixed(2),
    earnedDays: (3).toFixed(2),
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    balance: (3).toFixed(2),
    usedDays: "-6",
  },
  {
    date: "23/05/2024",
    description: "Accrual for 23/05/2024 to 20/11/2024",
    balance: (3).toFixed(2),
    earnedDays: (3).toFixed(2),
  },
];

export const columns: ColumnDef<TimeOff>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "usedDays",
    header: "Used Days (-)",
  },
  {
    accessorKey: "earnedDays",
    header: "Earned Days (+)",
  },
  {
    accessorKey: "balance",
    header: "Balance",
  },
];

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader className="bg-primary">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="text-foreground text-nowrap"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="text-nowrap" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default function TimeOffHistory() {
  return (
    <>
      <div className="flex items-center gap-2">
        <RiFolderHistoryLine className="size-4" />
        <p className="text-blue text-sm">History</p>
      </div>
      <div className="flex gap-2 md:flex-row flex-col">
        <CategoryDropdown />
        <div className="flex justify-between gap-2 w-full">
          <CountDropdown />
          <HistroryDropdown />
        </div>
      </div>
      <DataTable columns={columns} data={timeoffs} />
    </>
  );
}
