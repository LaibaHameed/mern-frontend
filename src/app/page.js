import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutInfo from "@/components/home/AboutInfo";
import BestSeller from "@/components/home/BestSeller";
import Carousel from "@/components/home/Carousel";
import CustomerReviews from "@/components/home/CustomerReviews";
import Gallery from "@/components/home/Gallery";
import NewArrival from "@/components/home/NewArrival";

export default function Home() {
  return(
    <>
    <Header/>
    <Carousel/>
    <AboutInfo/>
    <NewArrival/>
    <Gallery/>
    <BestSeller/>
    <CustomerReviews/>
    <Footer/>
    </>
  )
}
