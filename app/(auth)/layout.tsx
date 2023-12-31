'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navAuthLinks = [
  { name: 'Register', href: '/register' },
  { name: 'Login', href: '/login' },
];
const navLinks = [
  { name: 'My Applicaitons', href: '/myApplication' },
  { name: 'Submit New Application', href: '/admission' },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <header className="h-[200px]">
        <Image
          src={'/images/img-a.jpeg'}
          alt="banner"
          width={1300}
          height={270}
          className="w-full h-full"
        />
      </header>
      <nav className="py-3 bg-gray-300/70 px-6 flex justify-between items-center border-b border-white">
        <div>
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
        <div>
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
      </nav>
      {children}
    </div>
  );
}
