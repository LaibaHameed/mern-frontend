'use client'
import { getCurrentUser } from "@/redux/slices/user/userSlice";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector(getCurrentUser)

  return (
    <div className="px-6">
    <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
    {currentUser ? <h2 className="py-3">You are Login as: {currentUser.email}</h2> : <h2 className="py-3 text-red-700">You are not Login</h2>}
    </div>
  );
};

export default Dashboard;
