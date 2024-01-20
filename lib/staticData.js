import {
  Home,
  FileSpreadsheet,
  FilePlus2,
  User,
  UsersRound,
  FileText,
  FileSearch,
  FileUp,
} from 'lucide-react';

export const UserMenuItems = [
  {
    id: 0,
    name: 'Home',
    link: '/home',
    icon: <Home />,
  },
  {
    id: 1,
    name: 'My Applicaitons',
    link: '/my-applications',
    icon: <FileSpreadsheet />,
  },

  {
    id: 2,
    name: 'New Application',
    link: '/new-application',
    icon: <FilePlus2 />,
  },
  {
    id: 3,
    name: 'My Profile',
    link: '/my-profile',
    icon: <User />,
  },
];

export const AdminMenuItems = [
  // {
  //   id: 0,
  //   name: 'Home',
  //   link: '/home',
  //   icon: <Home />,
  // },
  {
    id: 0,
    name: 'All Applicaitons',
    link: '/all-applications',
    icon: <FileSpreadsheet />,
  },

  {
    id: 1,
    name: 'Search Applications',
    link: '/search-applications',
    icon: <FileSearch />,
  },
  {
    id: 2,
    name: 'Upload Applications',
    link: '/upload-applications',
    icon: <FileUp />,
  },
  {
    id: 3,
    name: 'Users',
    link: '/users-app',
    icon: <UsersRound />,
  },
  // {
  //   id: 4,
  //   name: 'Reports',
  //   link: '/reports',
  //   icon: <FileText />,
  // },

  {
    id: 4,
    name: 'Admin Profile',
    link: '/admin-profile',
    icon: <User />,
  },
];
// https://admission.das.sch.sa/en-us/

export const appSteps = [
  {
    id: 0,
    title: 'الخطوة الأولى',
    desc: (
      <>
        <a
          href="https://admission.das.sch.sa/en-us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://admission.das.sch.sa/en-us/
        </a>
        يملى الأهالى طلب التسجيل الكترونياً من خلال الرابط التالى{' '}
      </>
    ),
  },
  {
    id: 1,
    title: 'الخطوة الثانية',
    desc: 'يحضر الطالب لقاء تعارفى فى المدرسة فى المكان الذى سيتم اختباره فيه لاحقاً',
  },
  {
    id: 2,
    title: 'الخطوة الثالثة',
    desc: 'يحضر الطالب للاختبار او المقابلة فى التاريخ الذى سيٌعلن عنه من قبل مسئول التسجيل فى المدرسة والذى يتم نشره على موقع مدارس الظهران الأهلية تحت جزئية الجدول الزمنى',
  },
  {
    id: 3,
    title: 'الخطوة الرابعة',
    desc: 'تم ارسال نتائج القبول فردياً لأولياء الأمور عبر البريد الألكترونى. جميع هذه النتائج ترسل فى نفس الوقت حسب الجدول الزمنى المعلن فى موقع المدارس - يجب التنويه على أن القرارات المتعلقة بالاختيار تٌتخذ من قبل لجنة على أساس الأولويات المذكورة تحت الجزئية بعنوان الأولويات وفى ضوء الأماكن الشاغرة فى السنة المذكورة',
  },
  {
    id: 4,
    title: 'الخطوة الخامسة',
    desc: 'اهالى الأطفال الذين تم قبولهم مطالبين بدفع الرسوم السنوية الكاملة للسنة الأولى خلال اسبوع واحد من الاعلان. - فى حال لم تُدفع الرسوم فإن الشاغر سيُعطى لأول طفل على لائحة الانتظار',
  },
];
