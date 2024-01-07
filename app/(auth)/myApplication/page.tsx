import HomeTitle from '@/components/HomeTitle';
import React from 'react';

function MyApplications() {
  return (
    <section className="py-5  bg-gray-100 h-screen">
      <div className="container mx-auto pt-8 ">
        <HomeTitle title="My Applications" />
        <div className="mt-8 w-full md:w-[90%] mx-auto">
          <div className="flex flex-col bg-gray-100">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full min-h-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full  text-left text-sm font-light border-2 border-black">
                    <thead className="border-b-2 border-black font-medium text-center  md:text-xl">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 border-r-2 border-black"
                        >
                          Application Number
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 border-r-2 border-black"
                        >
                          Application Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 border-r-2 border-black"
                        >
                          Application Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 border-r-2 border-black"
                        >
                          Academic Year
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 border-r-2 border-black"
                        >
                          Grade Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center font-medium">
                      <tr className="border-b-2 border-l-2 border-black">
                        <td className="whitespace-nowrap  py-4 font-medium border-r-2 border-black text-center">
                          20240041
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r-2 border-black">
                          Application Name
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r-2 border-black">
                          20/04/2024
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r-2 border-black">
                          2024-2025
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r-2 border-black">
                          KG3
                        </td>
                      </tr>
                      <tr className="border-2-b dark:border-2-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-black font-medium ">
                          20240134
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-black">
                          Application Name
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-black">
                          25/06/2024
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r-2 border-black">
                          2025-2026
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r-2 border-black">
                          7
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyApplications;
