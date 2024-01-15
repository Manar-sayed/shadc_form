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
  isUser: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  isUser,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [emailFilter, setEmailFilter] = useState<string>('');
  const [nameFilter, setNameFilter] = useState<string>('');

  const [toDateFilter, setToDateFilter] = useState<string>('');
  const [fromDateFilter, setFromDateFilter] = useState<string>('');
  const [appNumFilter, setAppNumFilter] = useState<string>('');
  const [stuNaIDFilter, setStuNaIDFilter] = useState<string>('');
  const [academicYearFilter, setAcademicYearFilter] = useState<string>('');
  const [gradeLevelFilter, setGradeLevelFilter] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<string>('');
  const [aramcoFilter, setAramcoFilter] = useState<string>('');
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
      {!isUser && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5 w-full md:w-[80%] mx-auto">
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
                className="border border-primary-color px-3  rounded py-1 w-full"
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
                className="border border-primary-color px-3  rounded py-1 w-full"
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
                className="border border-primary-color px-3  rounded py-1 w-full"
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
                className="border border-primary-color px-3  rounded py-1 w-full"
              />
            </div>

            {/* <div>
          <label htmlFor="academicYear" className="block mb-2 text-black">
            Academic Year:
          </label>
          <select
            onChange={(event) => setAcademicYearFilter(event.target.value)}
            value={academicYearFilter}
            id="academicYear"
            className="w-full border border-primary-color px-3  rounded h-[36px]"
          >
            <option value=""></option>
            <option value={'all'}>All</option>
            <option value={'5'}>5</option>
            <option value={'3'}>2</option>
            <option value={'1'}>1</option>
          </select>
        </div>
        <div>
          <label htmlFor="gradeLevel" className="block mb-2 text-black">
            Grade Level:
          </label>
          <select
            onChange={(event) => setGradeLevelFilter(event.target.value)}
            value={gradeLevelFilter}
            id="gradeLevel"
            className="w-full border border-primary-color px-3  rounded h-[36px]"
          >
            <option value=""></option>
            <option value={'all'}>All</option>
            <option value={'5'}>5</option>
            <option value={'3'}>2</option>
            <option value={'1'}>1</option>
          </select>
        </div>

        <div>
          <label htmlFor="gender" className="block mb-2 text-black">
            Gender:
          </label>
          <select
            onChange={(event) => setGenderFilter(event.target.value)}
            value={genderFilter}
            id="gender"
            className="w-full border border-primary-color px-3  rounded h-[36px]"
          >
            <option value=""></option>
            <option value={'all'}>All</option>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="aramco" className="block mb-2 text-black">
            Aramco:
          </label>
          <select
            onChange={(event) => setAramcoFilter(event.target.value)}
            value={aramcoFilter}
            id="aramco"
            className="w-full border border-primary-color px-3  rounded h-[36px]"
          >
            <option value=""></option>
            <option value={'mother'}>Mother</option>
            <option value={'father'}>Father</option>
            <option value={'both'}>Both</option>
          </select>
        </div> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full md:w-[80%] mx-auto mt-5">
            <div>
              <label htmlFor="academicYear" className="block mb-2 text-black">
                Academic Year:
              </label>
              <select
                onChange={(event) => setAcademicYearFilter(event.target.value)}
                value={academicYearFilter}
                id="academicYear"
                className="w-full border border-primary-color px-3  rounded h-[36px]"
              >
                <option value=""></option>
                <option value={'all'}>All</option>
                <option value={'5'}>5</option>
                <option value={'3'}>2</option>
                <option value={'1'}>1</option>
              </select>
            </div>
            <div>
              <label htmlFor="gradeLevel" className="block mb-2 text-black">
                Grade Level:
              </label>
              <select
                onChange={(event) => setGradeLevelFilter(event.target.value)}
                value={gradeLevelFilter}
                id="gradeLevel"
                className="w-full border border-primary-color px-3  rounded h-[36px]"
              >
                <option value=""></option>
                <option value={'all'}>All</option>
                <option value={'5'}>5</option>
                <option value={'3'}>2</option>
                <option value={'1'}>1</option>
              </select>
            </div>

            <div>
              <label htmlFor="gender" className="block mb-2 text-black">
                Gender:
              </label>
              <select
                onChange={(event) => setGenderFilter(event.target.value)}
                value={genderFilter}
                id="gender"
                className="w-full border border-primary-color px-3  rounded h-[36px]"
              >
                <option value=""></option>
                <option value={'all'}>All</option>
                <option value={'male'}>Male</option>
                <option value={'female'}>Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="aramco" className="block mb-2 text-black">
                Aramco:
              </label>
              <select
                onChange={(event) => setAramcoFilter(event.target.value)}
                value={aramcoFilter}
                id="aramco"
                className="w-full border border-primary-color px-3  rounded h-[36px]"
              >
                <option value=""></option>
                <option value={'mother'}>Mother</option>
                <option value={'father'}>Father</option>
                <option value={'both'}>Both</option>
              </select>
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
        </>
      )}
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
                    <button className="bg-gray-600 py-1 px-3 text-white rounded-[1px]">
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
