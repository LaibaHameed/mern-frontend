import Header from "@/components/header";
import AboutInfo from "@/components/home/AboutInfo";
import Carousel from "@/components/home/Carousel";
import NewArrival from "@/components/home/NewArrival";

export default function Home() {
  return(
    <>
    <Header/>
    <Carousel/>
    <AboutInfo/>
    <NewArrival/>
    </>
  )
}
