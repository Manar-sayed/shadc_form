import LoginForm from '@/components/login-form';
import { currentUser } from '@/lib/auth';

import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await currentUser();

  if (user && user.role == 'ADMIN') {
    redirect('/all-applications');
  } else if (user && user.role == 'USER') {
    redirect('/home');
  }

  return <LoginForm />;
}
