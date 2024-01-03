import HomeTitle from '@/components/HomeTitle';
import React from 'react';

function MyApplications() {
  return (
    <section className="py-5  bg-gray-100 h-screen">
      <div className="container mx-auto pt-8 ">
        <HomeTitle title="My Applications" />
        <div className="mt-8 w-full md:w-[90%] mx-auto">
          <div className="flex flex-col bg-white">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full min-h-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full  text-left text-sm font-light border ">
                    <thead className="border-b  font-medium text-center  md:text-xl">
                      <tr>
                        <th scope="col" className="px-6 py-4 border-r">
                          Application Number
                        </th>
                        <th scope="col" className="px-6 py-4 border-r">
                          Application Name
                        </th>
                        <th scope="col" className="px-6 py-4 border-r">
                          Application Date
                        </th>
                        <th scope="col" className="px-6 py-4 border-r">
                          Academic Year
                        </th>
                        <th scope="col" className="px-6 py-4 border-r">
                          Grade Level
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr className="border-b border-1 dark:border-neutral-500">
                        <td className="whitespace-nowrap  py-4 font-medium border-r text-center">
                          20240041
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r">
                          Application Name
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r">
                          20/04/2024
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r">
                          2024-2025
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r">
                          KG3
                        </td>
                      </tr>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-6 py-4 border-r font-medium ">
                          20240134
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r">
                          Application Name
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r">
                          25/06/2024
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 border-r">
                          2025-2026
                        </td>
                        <td className="whitespace-nowrap  py-4 border-r">7</td>
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
