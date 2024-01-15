import { DataTable } from '@/components/DataTable';
import { User, columns } from '../search-applications/columns';
import HomeTitle from '@/components/home-title';
async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  );
  const data = await res.json();
  return data;
}
const Users = async () => {
  const data = await getUsers();
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
