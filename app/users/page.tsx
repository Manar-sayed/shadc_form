import {
  User,
  columns,
} from '../(protected)/(admin)/search-applications/columns';
import { DataTable } from '@/components/DataTable';
async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  );
  const data = await res.json();
  return data;
}
async function Users() {
  const data = await getUsers();
  return (
    <section className="py-24">
      <div className="container">
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}

export default Users;
