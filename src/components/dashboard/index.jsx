'use client'
import { useRouter } from "next/navigation";
import ThemeButton from "../shared/buttons/ThemeButton";

const Dashboard = () => {
  const router = useRouter()

  const onClickButton = () => {
    router.push('/dashboard/AddProduct')
  }  

  return (
    <div className="flex-center flex-col text-black min-h-screen">
      <ThemeButton
      buttonText={'Add Product'}
      handleClick={onClickButton}
      styles={'bg-primary hover:bg-primary-hover'}
      />
    </div>
  );
};

export default Dashboard;
