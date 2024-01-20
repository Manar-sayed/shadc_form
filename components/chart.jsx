'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Aramco',
    uv: 4000,
    pv: 2400,
    amt: 2400,
    bg: '#82ca9d',
  },
  {
    name: 'Non-Aramco',
    uv: 3000,
    pv: 1398,
    amt: 2210,
    bg: '#f00',
  },
  {
    name: 'DAS',
    uv: 2000,
    pv: 9800,
    amt: 2290,
    bg: '#ff0',
  },
  {
    name: 'Completed',
    uv: 2780,
    pv: 3908,
    amt: 2000,
    bg: '#0ff',
  },
  {
    name: 'Uncompleted',
    uv: 1890,
    pv: 4800,
    amt: 2181,
    bg: '#000',
  },
  {
    name: 'Paid',
    uv: 2390,
    pv: 3800,
    amt: 2500,
    bg: '#888',
  },
  {
    name: 'Unpaid',
    uv: 3490,
    pv: 4300,
    amt: 2100,
    bg: '#eee',
  },
];

export default function Chart() {
  return (
    <>
      <ResponsiveContainer className={'w-full h-[500px]'} aspect={2 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize={12} className=" rotate-180" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}

          <Bar dataKey="uv" fill="#607EAA" barSize={30} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
