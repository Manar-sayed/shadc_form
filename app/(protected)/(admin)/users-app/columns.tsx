'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import { useState } from 'react';
import Cell from './cell';
import Link from 'next/link';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  name: string;

  email: string;
  image: string;
  emailVerified: string;
  role: 'USER' | 'ADMIN';
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'email',
    // header: 'Email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: 'emailVerified',
    // header: 'Verification Date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Verification Date
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('emailVerified'));

      const formatted = format(date, 'MM/dd/yyyy');

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'role',
    // header: 'Role',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Role
          <ArrowUpDown className="ml-1 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      // const id = row.original.id.toString();

      // console.log('fg', id);
      return (
        <Cell row={row} />
        // <DropdownMenu>
        //   <DropdownMenuTrigger asChild>
        //     <Button variant="ghost" className="h-8 w-8 p-0">
        //       <span className="sr-only">Open menu</span>
        //       <MoreHorizontal className="h-4 w-4" />
        //     </Button>
        //   </DropdownMenuTrigger>
        //   <DropdownMenuContent align="end">
        //     {/* <DropdownMenuLabel>Actions</DropdownMenuLabel>
        //     <DropdownMenuItem
        //       onClick={() => navigator.clipboard.writeText(user.id)}
        //     >
        //       Copy user ID
        //     </DropdownMenuItem>
        //     <DropdownMenuSeparator /> */}
        //     <DropdownMenuItem>
        //       <Button size={'sm'} className="w-full">
        //         <Link href={`/users-app/${decodeURIComponent(id)}`}>Edit</Link>
        //       </Button>
        //     </DropdownMenuItem>
        //     <DropdownMenuItem>
        //       <Button size={'sm'} variant={'destructive'} className="w-full">
        //         Delete
        //       </Button>
        //     </DropdownMenuItem>
        //   </DropdownMenuContent>
        // </DropdownMenu>
      );
    },
  },
];
