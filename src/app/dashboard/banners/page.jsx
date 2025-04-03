import BannersList from '@/components/dashboard/banners';
import Container from '@/components/shared/common/Container';

const page = () => {
  return (
    <div className='flex-center w-full'>
      <Container>
        <BannersList />
      </Container>
    </div>
  );
};

export default page;
