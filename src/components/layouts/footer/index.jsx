import React from 'react';
import ContactInfo from './ContactInfo';
import SectionList from './SectionList';
import {
  ACCOUNT_ITEMS,
  INFORMATION_ITEMS,
  PRODUCT_ITEMS,
} from '@/constants/general';
import Container from '@/components/shared/Container';

const Footer = () => {
  return (
    <>
      <div className="flex-center bg-gray-100 shadow-2xl mt-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 margin-sm  md:margin-lg py-20">
            {/* Contact Us Section */}
            <ContactInfo />

            {/* Information Section */}
            <SectionList title="Information" items={INFORMATION_ITEMS} />

            {/* My Account Section */}
            <SectionList title="My Account" items={ACCOUNT_ITEMS} />

            {/* Products Section */}
            <SectionList title="Products" items={PRODUCT_ITEMS} />
          </div>
        </Container>
      </div>

      <div className="bg-secondary py-4 flex-center">
        <Container>
          <p className="text-gray-50 text-center margin-sm">
            Copyright 2019 by Botanical Store - All rights reserved
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
