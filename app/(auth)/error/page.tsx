import { Button } from '@/components/ui/button';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const AuthErrorPage = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <h3>Oops! Something went wrong!</h3>
        <ExclamationTriangleIcon className=" text-destructive" />

        <Button variant="link" className="font-normal w-full" size="sm" asChild>
          <Link href={'/login'}>Back to Login</Link>
        </Button>
      </div>
    </div>
  );
};

export default AuthErrorPage;
