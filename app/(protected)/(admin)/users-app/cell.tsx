'use client';

import { deleteUser } from '@/actions/delete-user';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CellProps {
  row: {
    getValue: (key: string) => string;
    original: {
      id: string;
    };
  };
}

export default function Cell({ row }: CellProps) {
  const router = useRouter();
  const id = row.original.id.toString();
  // const deleteUser = async ({ userId }: { userId: string }) => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXTAUTH_URL}/api/users/${userId}`,
  //       {
  //         method: 'DELETE',
  //       }
  //     );

  //     console.log('response', response);

  //     if (response.ok) {
  //       const responseData = await response.json();
  //       router.refresh();
  //     } else {
  //       // Handle the error
  //       const responseData = await response.json();
  //       console.log('deleteSupabaseItem - Response not OK', responseData);
  //     }
  //   } catch (error) {}
  // };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          <Button size={'sm'} className="w-full px-0 " variant={'userEdite'}>
            <Link
              href={`/users-app/${decodeURIComponent(id)}`}
              className="flex items-center rounded-md justify-center w-full h-full"
            >
              Edit
            </Link>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Button
            size={'sm'}
            variant={'destructive'}
            className="w-full"
            onClick={() => deleteUser(decodeURIComponent(id))}
          >
            Delete
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
