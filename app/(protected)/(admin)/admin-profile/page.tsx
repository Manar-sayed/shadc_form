'use client';
import HomeTitle from '@/components/home-title';
import ProfileForm from '@/components/profile-form';
import { useCurrentUser } from '@/hooks/use-current-user';

const AdminProfile = () => {
  const user = useCurrentUser();

  console.log('user', user);
  return (
    <div className="py-4 bg-gray-100 h-full  relative">
      <HomeTitle title="My Profile" />

      <ProfileForm user={user} />
    </div>
  );
};

export default AdminProfile;
