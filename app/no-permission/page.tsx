import { Button } from '@/components/ui/button';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const NoPermission = () => {
  return (
    <div className="bg-gray-100 h-screen flex gap-2 items-center justify-center flex-col text-red-500 text-2xl">
      <ExclamationTriangleIcon className="w-8 h-8" />
      <h3 className="">
        You cannot access this page. You do not have permission to access it
      </h3>
      <Button variant="destructive" size={'sm'}>
        <Link href={'/home'} className="">
          Go To Home
        </Link>
      </Button>
    </div>
  );
};

export default NoPermission;
