import TopSection from './TopSection/page';
import Container from '../shared/common/Container';
import AllFilters from './Filters/page';
import ProductsList from './ProductsList';

const MainContent = () => {
  return (
    <div className="flex-center mx-6 mb-12">
      <Container>
        <TopSection />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="hidden md:block col-span-2 md:col-span-1">
            <AllFilters />
          </div>

          <div className="col-span-2 md:col-span-3">
            <ProductsList />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainContent;
