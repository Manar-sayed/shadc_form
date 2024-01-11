'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { ArrowLeftCircle, ArrowRightCircle, LogOut } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  link: string;
  icon: React.ReactNode;
}
interface SidebarProps {
  MenuItems: MenuItem[];
}
function Sidebar({ MenuItems }: SidebarProps) {
  const [open, setOpen] = useState<boolean>(true);
  const [deviceSize, changeDeviceSize] = useState<number | undefined>(
    typeof window !== 'undefined' ? window.innerWidth : undefined
  );

  const pathname = usePathname();

  useEffect(() => {
    const resizeW = () => {
      if (typeof window !== 'undefined') {
        changeDeviceSize(window.innerWidth);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeW);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeW);
      }
    };
  }, []);
  useEffect(() => {
    if (deviceSize !== undefined && deviceSize <= 768) {
      setOpen(false);
    }
  }, [deviceSize, setOpen]);

  const renderSideBarMenus = MenuItems.map(
    ({ name, link, icon, id }, i) => {
      const isActive = pathname.startsWith(link);
      return (
        <Link
          href={link}
          key={id}
          className={`cursor-pointer group flex items-center text-xs text-gray-500 capitalize font-normal  gap-3.5  px-1 pb-1.5 hover:text-secondary-color rounded-md ${
            isActive && 'text-primary-color font-semibold'
          }`}
        >
          <div className="w-[24px] h-[24px]">{icon}</div>
          <h3
            style={{
              transitionDelay: `${id + 3}00ms`,
            }}
            className={`whitespace-pre duration-500 ${
              !open && 'opacity-0 translate-x-28  overflow-hidden  '
            }`}
          >
            {name}
          </h3>
          <h3
            className={`${open && 'hidden'} ${
              isActive && 'text-primary-color'
            } absolute left-28  z-20 bg-white font-semibold whitespace-pre text-gray-900 rounded-sm drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14  group-hover:duration-300 group-hover:w-fit  `}
          >
            {name}
          </h3>
        </Link>
      );
    }
  );

  return (
    <div
      className={`bg-gray-50 dark:bg-gray-900 border-0 ltr:border-r-[1px] rtl:border-l-[1px]  border-solid    ltr:border-r-gray-200 rtl:border-l-gray-200 dark:ltr:border-r-gray-400 dark:rtl:border-l-gray-400 shadow-sm min-h-screen ${
        open ? 'w-[220px]' : 'w-16'
      } duration-500 text-dark-color dark:text-gray-100 px-4`}
    >
      <div
        className={`py-2 hidden md:flex ${
          open ? 'justify-end' : 'justify-center'
        } `}
      >
        {open ? (
          <ArrowLeftCircle
            className={`cursor-pointer text-4xl text-black `}
            onClick={() => setOpen(false)}
          />
        ) : (
          <ArrowRightCircle
            className={`cursor-pointer text-4xl text-black`}
            onClick={() => setOpen(true)}
          />
        )}
      </div>
      <div className="mt-2 flex flex-col gap-4 relative pt-12 md:pt-0">
        {renderSideBarMenus}

        <button
          className={`border-0 outline-none bg-transparent group flex items-center text-xs text-gray-500 capitalize font-normal  gap-3.5  px-1 pb-1.5 hover:text-primary-color `}
        >
          <div className="h-[24px] w-[24px] ">
            <LogOut />
          </div>
          <h3
            style={{
              transitionDelay: `${8 + 3}00ms`,
            }}
            className={`whitespace-pre duration-500 ${
              !open &&
              'opacity-0 ltr:translate-x-28 rtl:-translate-x-28 overflow-hidden  '
            }`}
          >
            Logout
          </h3>

          <h3
            className={`${
              open && 'hidden'
            } absolute  left-48  z-20 bg-white font-semibold whitespace-pre text-gray-900 rounded-sm drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14  group-hover:duration-300 group-hover:w-fit  `}
          >
            Logout
          </h3>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
