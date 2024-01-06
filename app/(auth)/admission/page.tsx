import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import HomeTitle from '@/components/HomeTitle';
export default function AdmissionPage() {
  const admissionItems = [
    {
      image: '/images/img-00.png',
      title: 'Aramco Admission',
      description: 'Dhahran Ahliyya Schools admission form for ARAMCO.',

      href: '/form?type=aramco',
      isAramco: true,
    },
    {
      image: '/images/img-01.png',
      title: 'Non Aramco Admission',
      description: 'Dhahran Ahliyya Schools admission form for Non-ARAMCO.',
      href: '/form?type=non-aramco',
      isAramco: false,
    },
  ];
  return (
    <section className="py-5  bg-gray-100 ">
      <div className="container mx-auto px-4 w-full lg:w-[60%] ">
        <HomeTitle title="Admission" />
        <div className="flex justify-center gap-5 mt-8 flex-wrap md:flex-nowrap">
          {admissionItems.map((item, index) => (
            <Card key={index} className="flex flex-col justify-between ">
              <CardHeader className="relative overflow-hidden">
                <div className="h-[293px]">
                  <Image
                    src={item.image}
                    alt="image"
                    width={438}
                    height={293}
                    className="w-full h-full"
                  />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-black/60 w-full p-3 text-center">
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="py-3 text-center">
                <p className="text-[#B1B1B1] text-lg">{item.description}</p>

                <ul className="my-3">
                  <li className="flex items-center gap-2 mb-3">
                    <Image
                      src={'/images/icon-1.png'}
                      width={28}
                      height={28}
                      alt="icon-1"
                    />
                    <Link href="/" className="text-lg font-bold">
                      Fill new form
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 mb-3">
                    <Image
                      src={'/images/icon-2.png'}
                      width={28}
                      height={28}
                      alt="icon-2"
                    />
                    <Link href="/" className="text-lg font-bold">
                      Edit submitted form
                    </Link>
                  </li>
                  <li className="flex items-center gap-2 mb-3">
                    <Image
                      src={'/images/icon-3.png'}
                      width={28}
                      height={28}
                      alt="icon-3"
                    />
                    <Link href="/" className="text-lg font-bold">
                      Required submitted
                    </Link>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="link">
                  <Link href={item.href} className="">
                    Find more
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
