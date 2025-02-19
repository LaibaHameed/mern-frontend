"use client";
import Container from "@/components/shared/Container";

const AuthLayout = ({ children }) => {
    return (
        <div className='flex-center sm:px-12 px-6 bg-gray-100'>
            <Container>
                <div className="flex justify-center items-center h-screen">
                    {children}
                </div>
            </Container>
        </div>
    );
};

export default AuthLayout;
