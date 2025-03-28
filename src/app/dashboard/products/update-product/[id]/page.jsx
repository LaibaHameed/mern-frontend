import UpdateProductForm from '@/components/dashboard/products/UpdateProductForm';
import Container from '@/components/shared/common/Container';

const UpdateProduct = () => {
    return (
        <div className="flex-center w-full">
            <Container>
                <UpdateProductForm/>
            </Container>
        </div>
    );
};

export default UpdateProduct;
