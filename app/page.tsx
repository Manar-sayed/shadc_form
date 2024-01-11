import TestForm from '@/components/FORM/testForm';
import UserEmail from '@/components/UserNameEmail';
import FormFull from '@/components/formTwo';
import FormWork from '@/components/formwork';
import ImageForm from './test_imageForm/page';

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        {/* <FormFull /> */}
        {/* <FormWork /> */}
        <TestForm />
        {/* <ImageForm/> */}
      </div>
    </section>
  );
}
