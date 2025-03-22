import Image from 'next/image';
import React from 'react';

const GlobalLoader = () => {
  return (
    <div className="flex-center w-full h-screen absolute top-0 z-[9999] dimming-effect">
      <Image src="/assets/logo/logo.png" alt="Logo" width={200} height={100} />
    </div>
  );
};

export default GlobalLoader;
