import React from 'react';

interface HomeTitleProps {
  title: string;
}
function HomeTitle({ title }: HomeTitleProps) {
  return (
    <h3 className="text-lg md:text-4xl text-center font-bold text-primary-color mt-2">
      {title}
    </h3>
  );
}

export default HomeTitle;
