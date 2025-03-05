'use client';
import Footer from '@/components/layouts/footer';
import Header from '@/components/layouts/header';
import Container from '@/components/shared/Container';

const AuthLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex-center sm:px-12 px-6 bg-gray-100">
        <Container>
          <div className="flex justify-center items-center max-h-screen my-24">
            {children}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AuthLayout;
