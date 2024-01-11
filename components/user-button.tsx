'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import LogoutButton from './logout-button';

import { LogOut, UserCog } from 'lucide-react';
import Link from 'next/link';
const UserButton = () => {
  const user = 'walaa';
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback className="bg-primary-color text-white">
            {user?.slice(0, 2)}
            {/* <FaUser className="text-white" /> */}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 " align="end">
        <DropdownMenuItem className="">
          <Link href={'/all-applications'} className="flex w-full h-full ">
            <UserCog className="h-5 w-5 mr-2" /> Admin
          </Link>
        </DropdownMenuItem>
        <LogoutButton>
          <DropdownMenuItem>
            <LogOut className="h-5 w-5 mr-2" /> Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
