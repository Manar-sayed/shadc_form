import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { UserMenuItems } from '@/lib/staticData';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <section className="flex gap-2">
        <Sidebar MenuItems={UserMenuItems} />
        <div className="flex flex-col w-full  overflow-hidden ltr:mr-2 rtl:ml-2">
          <Navbar />
          {children}
        </div>
      </section>
    </div>
  );
}
