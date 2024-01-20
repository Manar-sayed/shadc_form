import { DataTable } from '@/components/DataTable';
import { User, columns } from './columns';
import HomeTitle from '@/components/home-title';

async function getUsers() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
const Users = async () => {
  const data = await getUsers();

  console.log('data', data);
  return (
    <section className="p-4 bg-gray-50 h-full">
      <div className="container px-4 mx-auto">
        {/* <p className="text-primary-color font-semibold text-center my-5">
          Users
        </p> */}
        <HomeTitle title="Users" />

        {/* <FormPanel
      handleSubmit={handleSubmit}
      handleInputChange={handleInputChange}
      formData={formData}
    /> */}

        <DataTable columns={columns} data={data} isUser={true} />
      </div>
    </section>
  );
};

export default Users;
