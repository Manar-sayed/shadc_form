'use client';
import { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';
import { useReactToPrint } from 'react-to-print';
import { GetRequestAction } from '@/lib/modex';
const ApplicationTable = () => {
  const [isPrinting, setIsPrinting] = useState<boolean>(false);
  const [isImageReady, setIsImageReady] = useState<boolean>(false);
  const printRef = useRef<any>(null); // قم بتحديد نوع البيانات بدلاً من any
  const promiseResolveRef = useRef<(() => void) | null>(null); // تحديد نوع البيانات بدلاً من any
  const { data, getRequest } = GetRequestAction();
  useEffect(() => {
    if (isPrinting && promiseResolveRef.current) {
      promiseResolveRef.current();
    }
  }, [isPrinting]);
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    onBeforeGetContent: () => {
      return new Promise<void>((resolve) => {
        promiseResolveRef.current = resolve;
        setIsPrinting(true);
      });
    },
    onAfterPrint: () => {
      promiseResolveRef.current = null;
      setIsPrinting(false);

      // بعد الطباعة، ضع isImageReady في الحالة false للتأكد من تفعيلها في المرة القادمة
      setIsImageReady(false);
    },
  });
  useEffect(() => {
    if (isImageReady) {
      handlePrint();
    }
  }, [isImageReady, handlePrint]);

  const testFun = async () => {
    // طلب GET للحصول على البيانات
    await getRequest();

    // جعل الصورة جاهزة للطباعة
    setIsImageReady(true);

    // انتظر لفترة قصيرة ثم قم بالطباعة
    setTimeout(() => {
      handlePrint();
    }, 200);
  };
  console.log('data', data && data);
  return (
    <>
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
                    <td className="py-4 px-4 flex gap-2">
                      <Button
                        variant={'userShow'}
                        size={'sm'}
                        onClick={testFun}
                      >
                        Show
                      </Button>
                      <Button variant={'userEdite'} size={'sm'}>
                        Edit
                      </Button>
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
                    <td className="py-4 px-4 flex gap-2">
                      <Button variant={'userShow'} size={'sm'}>
                        Show
                      </Button>
                      <Button variant={'userEdite'} size={'sm'}>
                        Edit
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ display: 'none' }}>
              <div className="min-w-full  text-center p-4" ref={printRef}>
                <h3 className="mb-3 text-xl font-bold">View student data</h3>
                <div className="flex gap-2 flex-wrap justify-center">
                  {data.map((item: any) => {
                    return (
                      <div key={item.id}>
                        <div className="flex flex-col w-[200px]">
                          <p className="border border-black  p-2 text-base ">
                            {item.name}
                          </p>
                          <p className="border  border-black  p-2 text-base">
                            {item.username}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationTable;
