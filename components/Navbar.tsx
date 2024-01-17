'use client';

import UserButton from '@/components/user-button';
import { useCurrentUser } from '@/hooks/use-current-user';

function Navbar() {
  const user = useCurrentUser();
  return (
    <>
      <nav className="py-3 bg-gray-300/70 px-6 flex justify-between items-center border-b border-white relative">
        <h3>Welcome,{user?.name}</h3>
        <UserButton />
      </nav>
    </>
  );
}

export default Navbar;
