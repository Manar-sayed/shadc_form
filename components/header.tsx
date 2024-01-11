import Image from 'next/image';

const Header = () => {
  return (
    <header className="h-[200px] flex justify-center">
      <Image
        src={'/images/img-a.jpeg'}
        alt="banner"
        width={900}
        height={200}

        // className="w-full h-full"
      />
    </header>
  );
};

export default Header;
