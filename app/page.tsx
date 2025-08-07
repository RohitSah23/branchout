import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WhyMalta from "@/components/WhyMalta/WhyMalta";
import Services from "@/components/Services/Services";
import Courses from "@/components/Courses/Courses";
import ApplicationProcess from "@/components/ApplicationProcess/ApplicationProcess";
import Values from "@/components/Values/Values";
import About from "@/components/About/About";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <About/>
    <WhyMalta/>
    <Services/>
    <Courses/>
    <ApplicationProcess/>
    <Values/>
    <Footer/>
   </div>
  );
}
