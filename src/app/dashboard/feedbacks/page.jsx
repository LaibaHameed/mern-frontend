import Container from '@/components/shared/common/Container';
import FeedbacksPage from '@/components/dashboard/feedbacks';

const page = () => {
  return (
    <div className='flex-center w-full'>
      <Container>
        <FeedbacksPage />
      </Container>
    </div>
  );
};

export default page;
