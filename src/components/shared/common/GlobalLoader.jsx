import Image from 'next/image';
import React from 'react';

const GlobalLoader = () => {
  return (
    <>
      <div className="flex-center min-h-[400px] dimming-effect">
        <Image className="flex-center" src="/assets/logo/logo.png" alt="Logo" width={200} height={100} />
      </div>
    </>
  );
};

export default GlobalLoader;
