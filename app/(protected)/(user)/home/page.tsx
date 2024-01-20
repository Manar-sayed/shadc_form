import HomeTitle from '@/components/home-title';
import { appSteps } from '@/lib/staticData';
const HomeScreen = () => {
  return (
    <section className="py-4  bg-gray-100 h-full">
      <div className="container mx-auto  px-5 md:px-[2rem]">
        <HomeTitle title="إجراءات القبول" />
        <div className="text-right text-gray-800 bg-white p-4 mt-5 border border-[#F9E5EE]">
          <p className="mt-4 md:leading-7 text-sm md:text-base">
            شكراً لاختياركم مدارس الظهران الأهلية. نقبل أقسام القبول لدينا طلبات
            التقديم للطلاب والطالبات من مرحلة رياض الأطفال حتى المرحلة العاشرة
            <br /> قد يتقدم الطلاب للتسجيل فى مدارس الظهران الأهلية فى أى وقت
            خلال السنة الدراسية من أجل القبول للسنة الدراسية القادمة <br />
            لمعرفة المزيد عن التسجيل كطالب/ة فى مدارس الظهران الأهلية الرجاء
            قراءة المعلومات التالية او الاتصال بمكتب القبول <br />
            +والتسجيل 96638198700 <br />
            +فى قسم البنات : الاستاذة. الآء بكر خشيم / واتس اب فقط 966559417227{' '}
            <br />
            +فى قسم البنين : الاستاذ. ياسر جعفر / واتس اب فقط 966500882938
          </p>

          <div className="">
            <h3 className="text-sky-400 text-xl my-3 font-semibold">
              تقديم الطلبات
            </h3>
            <p>
              فى مدارس الظهران الأهلية من الممكن استكمال التسجيل فى اى وقت خلال
              السنة الدراسية ولكن لن يتم القبول حتى تستوفى الاجراءات التالية
            </p>

            <div className="mt-3">
              {appSteps.map((step) => (
                <div key={step.id} className="mb-2">
                  <p className="text-lg md:text-xl text-sky-400 font-semibold mb-2 list-disc">
                    {step.title}
                  </p>
                  <p className="text-sm md:text-base">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen;
