'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import LogoutButton from './logout-button';
import { logout } from '@/actions/logout';
import { LogOut, UserCog } from 'lucide-react';
import Link from 'next/link';
import { ExtendedUser } from '@/next-auth-d';
import { useCurrentUser } from '@/hooks/use-current-user';

const UserButton = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logout();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarFallback className="bg-primary-color text-white">
            {user?.name?.slice(0, 2)}
            {/* <FaUser className="text-white" /> */}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 " align="end">
        <LogoutButton>
          <DropdownMenuItem onClick={onClick} className=" cursor-pointer">
            <LogOut className="h-5 w-5 mr-2" /> Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
