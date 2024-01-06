import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  return (
    <div>
      <header className="h-[200px] flex justify-center">
        <Image
          src={'/images/img-a.jpeg'}
          alt="banner"
          width={900}
          height={200}

          // className="w-full h-full"
        />
      </header>

      <Navbar />
      {children}
    </div>
  );
}
