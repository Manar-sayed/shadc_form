import Header from '@/components/header';
import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { AdminMenuItems } from '@/lib/staticData';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <section className="flex gap-2 pt-2">
        <Sidebar MenuItems={AdminMenuItems} />
        <div className="flex flex-col w-full  overflow-hidden ltr:mr-2 rtl:ml-2">
          <Navbar />
          {children}
        </div>
      </section>
    </div>
  );
}
