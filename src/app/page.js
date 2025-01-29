import Header from "@/components/header";
import AboutInfo from "@/components/home/AboutInfo";
import BestSeller from "@/components/home/BestSeller";
import Carousel from "@/components/home/Carousel";
import CustomerReviews from "@/components/home/CustomerReviews";
import NewArrival from "@/components/home/NewArrival";

export default function Home() {
  return(
    <>
    <Header/>
    <Carousel/>
    <AboutInfo/>
    <NewArrival/>
    <BestSeller/>
    <CustomerReviews/>
    </>
  )
}
