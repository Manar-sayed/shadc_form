import TestForm from '@/components/FORM/testForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-50">
      <div className="">
        <Image
          src={'/images/img-a.jpeg'}
          alt="banner"
          width={1200}
          height={800}
          className="w-full h-full"
        />

        <div className="mt-8 text-center ">
          <h1 className="mb-8 text-[#878885] text-3xl font-bold">
            Welcome to Dhahran Ahliyya Schools
          </h1>
          <Link
            href="/login"
            className="bg-primary-color px-3 py-2 border border-primary-color text-white rounded-sm duration-300 hover:bg-transparent hover:text-primary-color shadow-sm"
          >
            Login
          </Link>
        </div>
        {/* <section className="py-24">
      <div className="container">
        <TestForm />
      </div>
    </section> */}
      </div>
    </section>
  );
}
