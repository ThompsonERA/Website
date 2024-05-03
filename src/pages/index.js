import AboutArea from "../../components/Home/AboutArea";
import Features from "../../components/Home/Features";
import Header from "../../components/Home/Header";
import HeroArea from "../../components/Home/HeroArea";
import Footer from "../../components/common/Footer";
import SEO from "../../components/seo";
import ProductLogos from "../../components/ProductLogos/productLogos";
import Testimonials from "../../components/HomeTwo/Testimonials";

export default function Home() {
  return (
    <>
      <SEO pageTitle="Home" />

      <Header />
      <HeroArea />
      <Features />
      {/* <ResearchArea/> */}

      <AboutArea />
      <ProductLogos />
      <Testimonials />
      {/* <CounterArea/>
      <HomeCourses/>
      <Campus/>
      <HomeBlog/>
      <Cta/> */}
      <Footer />
    </>
  );
}
