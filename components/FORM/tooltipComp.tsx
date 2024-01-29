import React, { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { BadgeInfo } from 'lucide-react';

function TooltipComp({ title }: any) {
  const [disableClick, setDisableClick] = useState(false);

  const handleTooltipClick = (event: any) => {
    if (disableClick) {
      event.stopPropagation(); // Prevent click event from propagating
    }
  };
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {/* <BadgeInfo className="text-green-400 ms-5 " /> */}
            <BadgeInfo
              className="text-green-400 ms-5"
              onClick={handleTooltipClick} // Intercept click event
              onMouseEnter={() => setDisableClick(true)} // Disable click on mouse enter
              onMouseLeave={() => setDisableClick(false)} // Enable click on mouse leave
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

export default TooltipComp;
