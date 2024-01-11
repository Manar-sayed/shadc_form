import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  return (
    <div>
      <Header />

      {children}
    </div>
  );
}
