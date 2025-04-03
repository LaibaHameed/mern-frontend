import DashboardBanners from '@/components/dashboard/banners/add-banner';
import Container from '@/components/shared/common/Container';

const page = () => {
  return (
    <div className='flex-center w-full'>
      <Container>
        <DashboardBanners />
      </Container>
    </div>
  );
};

export default page;
