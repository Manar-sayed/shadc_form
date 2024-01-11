'use client';
import { AlignJustify, X } from 'lucide-react';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navAuthLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
];
const navLinks = [
  { name: 'My Applicaitons', href: '/myApplication' },
  { name: 'Submit New Application', href: '/admission' },
  { name: 'Admin Panel', href: '/admin-panel' },
];

function Navbar() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuOpen]);
  return (
    <>
      <nav className="py-3 bg-gray-300/70 px-6 flex justify-end md:justify-between items-center border-b border-white relative">
        <div className="hidden md:block">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                className={
                  isActive ? 'font-bold mr-4 text-primary-color' : ' mr-4'
                }
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:block">
          {navAuthLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                className={
                  isActive ? 'font-bold mr-4 text-primary-color' : ' mr-4'
                }
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary-color focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <AlignJustify size={24} />}
          </button>
          {menuOpen && (
            <div
              ref={menuRef}
              className="md:hidden absolute top-14 left-0 right-0 w-full h-full "
            >
              <div className="bg-gray-300 md:bg-gray-300/70 p-4">
                {navLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      className={`block mb-2 ${
                        isActive ? 'font-bold  text-primary-color' : ''
                      }`}
                      href={link.href}
                      key={link.name}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                {navAuthLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      className={`block mb-2 ${
                        isActive ? 'font-bold  text-primary-color' : ''
                      }`}
                      href={link.href}
                      key={link.name}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
