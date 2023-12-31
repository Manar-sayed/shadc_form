import React from 'react';

import FormPanel from './FormPanel';
import { User, columns } from './columns';
import { DataTable } from '@/components/DataTable';

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  );
  const data = await res.json();
  return data;
}
async function AdminPageScreen() {
  const data = await getUsers();
  // const [formData, setFormData] = useState<FormData>({
  //   fromDate: '',
  //   toDate: '',
  //   appNum: '',
  //   stuNaID: '',
  // });
  // تحديث الحالة عند تغيير القيمة داخل input
  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };
  return (
    <section className="p-4 bg-gray-50 h-screen">
      <div className="container px-4 mx-auto">
        <h3 className="font-bold text-xl border-b border-sky-500/40 pb-2 mb-3">
          Admin User
        </h3>

        <p className="text-primary-color font-semibold text-center my-5">
          Search All Applications
        </p>

        {/* <FormPanel
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          formData={formData}
        /> */}

        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}

export default AdminPageScreen;
