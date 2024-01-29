import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { BadgeInfo, Info } from 'lucide-react';
function PopverComp({ title }: any) {
  return (
    <Popover>
      <PopoverTrigger>
        {' '}
        <BadgeInfo className="text-green-400 ms-5 " />
      </PopoverTrigger>
      <PopoverContent>{title}</PopoverContent>
    </Popover>
  );
}

export default PopverComp;
