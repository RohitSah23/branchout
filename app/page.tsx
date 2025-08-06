import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import WhyMalta from "@/components/WhyMalta/WhyMalta";
import Services from "@/components/Services/Services";
import Courses from "@/components/Courses/Courses";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <WhyMalta/>
    <Services/>
    <Courses/>
    <Footer/>
   </div>
  );
}
