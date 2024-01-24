'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DasForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  useEffect(() => {
    const verificationCode =
      typeof window !== 'undefined' &&
      sessionStorage?.getItem('verificationCode');

    // إذا لم يكن هناك رمز تحقق، فارجع إلى الصفحة الرئيسية
    if (!verificationCode) {
      router.replace('/new-application');
    }

    const handleBeforeHistoryChange = () => {
      setModal(true);
      // حذف رمز التحقق من الجلسة
      sessionStorage.removeItem('verificationCode');
    };

    window.addEventListener('beforeHistoryChange', handleBeforeHistoryChange);

    return () => {
      // إزالة المستمع عند تفكيك المكون
      window.removeEventListener(
        'beforeHistoryChange',
        handleBeforeHistoryChange
      );
    };
  }, [router]);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center bg-primary-color w-full h-full absolute top-0 left-0">
        Loading ...
      </div>
    );
  }
  return <div>Das Form</div>;
};

export default DasForm;
