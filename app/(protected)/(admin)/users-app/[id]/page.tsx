import HomeTitle from '@/components/home-title';
import ProfileForm from '@/components/profile-form';
import UserForm from '@/components/user-form';

async function UserDetails({ userId }: { userId: string }) {
  // Wait for the playlists
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${userId}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
const UserDetailScreen = async ({
  params: { id },
}: {
  params: { id: string };
}) => {
  const user = await UserDetails({ userId: id });
  // console.log('user', user);
  return (
    <div className="py-4 bg-gray-100 h-full">
      <HomeTitle title="User Details" />

      <UserForm user={user} />
    </div>
  );
};

export default UserDetailScreen;
