import {INFO} from '@/constants/general';
import Image from 'next/image';
import React from 'react';
import Container from '../shared/common/Container';

const AboutInfo = () => {
  return (
    <div className="flex-center">
      <Container>
        <div className=" flex-col flex-center sm:margin-lg margin-sm mb-24 mt-6">
          <div className="my-28 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
            {INFO.map((item) => (
              <div
                className="flex-center flex-col sm:flex-row sm:items-center gap-3 border rounded-full bg-gray-100 sm:py-6 py-3 px-4"
                key={item.value}
              >
                <div className="text-primary text-3xl">{item.logo}</div>
                <div className="text-center sm:text-left text-sm">
                  <h5 className="font-bold text-gray-800">{item.title}</h5>
                  <p className="text-md text-gray-600">{item.discreption}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-serif text-gray-700 sm:text-2xl italic text-center px-6">
            We ship healthy potted plants right to your doorstep. <br /> Each
            plant comes with simple care instructions from <br /> our plant
            experts.
          </p>

          <Image
            src={'/assets/signature.png'}
            alt={'signature'}
            width={150}
            height={150}
            className="mt-8 mb-6"
          />
          <p className="font-bold text-xl">
            {' '}
            Sarah Jefferson{' '}
            <span className="text-gray-700 text-xs font-extrabold tracking-wider">
              {' '}
              - CEO
            </span>{' '}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutInfo;
