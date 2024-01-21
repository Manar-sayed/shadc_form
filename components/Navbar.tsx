'use client';

import UserButton from '@/components/user-button';
import { useCurrentUser } from '@/hooks/use-current-user';
import { usePathname } from 'next/navigation';

function Navbar() {
  const user = useCurrentUser();
  const pathname = usePathname();
  // console.log('pathname', pathname);
  function convertText(inputText: string) {
    // console.log('inputText', inputText);
    if (inputText == '/users-app') {
      return inputText
        .replace('/', '')
        .split('-')[0]
        ?.split('')
        .join('')
        ?.replace(/^\w/, (c) => c.toUpperCase());
    }
    if (inputText.startsWith('/users-app/')) {
      return 'User Detail';
    }
    if (inputText.includes('-') && inputText != '/users-app') {
      return inputText
        .replace('/', '')
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    } else {
      return inputText.charAt(1).toUpperCase() + inputText.slice(2);
    }
  }

  return (
    <>
      <nav className="py-3 bg-gray-300/70 px-6 flex justify-between items-center border-b border-white relative">
        <div>{convertText(pathname)}</div>
        <div className="flex gap-2 items-center">
          <h3>Welcome,{user?.name}</h3>
          <UserButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
