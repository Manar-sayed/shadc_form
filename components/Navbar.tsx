'use client';

import UserButton from '@/components/user-button';

function Navbar() {
  return (
    <>
      <nav className="py-3 bg-gray-300/70 px-6 flex justify-between items-center border-b border-white relative">
        <h3>Welcome,Walaa</h3>
        <UserButton />
      </nav>
    </>
  );
}

export default Navbar;
