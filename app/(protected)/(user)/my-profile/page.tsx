'use client';
import HomeTitle from '@/components/home-title';
import ProfileForm from '@/components/profile-form';
import { useCurrentUser } from '@/hooks/use-current-user';

const SettingsPage = () => {
  const user = useCurrentUser();
  return (
    <div className="py-4 bg-gray-100 h-full">
      <HomeTitle title="My Profile" />

      <ProfileForm user={user} />
    </div>
  );
};

export default SettingsPage;
