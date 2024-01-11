'use client';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface widgetProps {
  type: string;
}
const Widget = ({ type }: widgetProps) => {
  let data: {
    index?: number;
    title: string;
    count?: string;
    ele_number: number;
    background: string;
  } = {
    title: 'Default Title',
    background: 'bg-[#ffffff]', // Provide a default background color
    ele_number: 0,
  };
  switch (type) {
    case 'aramco':
      data = {
        index: 0,
        title: 'Aramco',
        ele_number: 60,
        count: 60 + ' ' + 'Applicants',
        background: 'bg-[#2B3467]',
      };
      break;
    case 'non-aramco':
      data = {
        index: 1,
        title: 'Non-Aramco',
        ele_number: 70,
        count: 70 + ' ' + 'Applicants',
        background: 'bg-[#2C74B3]',
      };
      break;
    case 'das':
      data = {
        index: 2,
        title: 'DAS',
        ele_number: 50,
        count: 50 + ' ' + 'Applicants',
        background: 'bg-[#EB455F]',
      };
      break;

    default:
      break;
  }

  return (
    <div
      // style={{ background: data.background }}
      className={`shadow-md   p-5  rounded-[3px]  ${data.background} border-b-2 border-white `}
    >
      <div className="flex justify-between items-center w-full ">
        <div>
          <p className="font-semibold text-xl text-white mb-3 ">{data.title}</p>

          <p className="text-gray-50  text-base font-semibold  ">
            {data.count}
          </p>
        </div>
        <div className="w-[80px] h-[80px]">
          <CircularProgressbar
            value={data.ele_number}
            text={`${data.ele_number}%`}
            styles={{
              text: {
                fill: '#fff',
              },
              trail: {
                stroke: '#ffffff57',
              },
              path: {
                stroke: '#fff',
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Widget;
