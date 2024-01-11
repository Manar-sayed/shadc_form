import HomeTitle from '@/components/home-title';
import ProfileForm from '@/components/profile-form';

const AdminProfile = () => {
  return (
    <div className="py-4 bg-gray-100 h-full">
      <HomeTitle title="My Profile" />

      <ProfileForm />
    </div>
  );
};

export default AdminProfile;
