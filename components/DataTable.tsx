'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  VisibilityState,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { downloadToExcel } from '@/lib/xlsx';
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [emailFilter, setEmailFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');

  const [toDateFilter, setToDateFilter] = useState<string>('');
  const [fromDateFilter, setFromDateFilter] = useState<string>('');
  const [appNumFilter, setAppNumFilter] = useState<string>('');
  const [stuNaIDFilter, setStuNaIDFilter] = useState<string>('');
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
  });
  const handleFilterButtonClick = () => {
    table.getColumn('email')?.setFilterValue(emailFilter);
    table.getColumn('name')?.setFilterValue(nameFilter);
  };

  return (
    <div className="pb-4">
      <div className="grid grid-cols-2 gap-3 mt-5 w-[80%] mx-auto">
        <div>
          <label htmlFor="fromDate" className="block mb-2 text-black">
            From Date:
          </label>
          <input
            type="date"
            name="fromDate"
            id="fromDate"
            placeholder="YYYY-MM-DD"
            value={fromDateFilter}
            onChange={(event) => setFromDateFilter(event.target.value)}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="toDate" className="block mb-2 text-black">
            To Date:
          </label>
          <input
            type="date"
            name="toDate"
            id="toDate"
            placeholder="YYYY-MM-DD"
            value={toDateFilter}
            onChange={(event) => setToDateFilter(event.target.value)}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="appNum" className="block mb-2 text-black">
            Application Number:
          </label>
          <input
            type="number"
            name="appNum"
            id="appNum"
            min={0}
            value={appNumFilter}
            onChange={(event) => setAppNumFilter(event.target.value)}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
        <div>
          <label htmlFor="stuNaID" className="block mb-2 text-black">
            Student National ID:
          </label>
          <input
            type="number"
            name="stuNaID"
            id="stuNaID"
            min={0}
            value={stuNaIDFilter}
            onChange={(event) => setStuNaIDFilter(event.target.value)}
            className="border border-sky-500 px-3  rounded py-1 w-full"
          />
        </div>
      </div>
      <div className="mt-5 mb-4 text-end w-[80%] mx-auto">
        <button
          onClick={handleFilterButtonClick}
          className="bg-primary-color text-white px-5 py-1 rounded shadow-sm"
        >
          GO
        </button>
      </div>
      <div className="bg-white">
        <div className="flex items-center py-4 gap-3">
          {/* <Input
            placeholder="Filter names..."
            value={nameFilter}
            onChange={(event) => setNameFilter(event.target.value)}
            className="max-w-sm ml-2"
          />
          <Input
            placeholder="Filter emails..."
            value={emailFilter}
            onChange={(event) => setEmailFilter(event.target.value)}
            className="max-w-sm"
          />
          <Button onClick={handleFilterButtonClick}>Filter</Button> */}

          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu> */}
        </div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
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
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                  <TableCell>
                    <button className="bg-sky-500 py-1 px-3 text-white">
                      {' '}
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>

      <div className="flex justify-end w-full my-4">
        <Button variant={'customOutline'} onClick={() => downloadToExcel(data)}>
          Export to Excel
        </Button>
      </div>
    </div>
  );
}
