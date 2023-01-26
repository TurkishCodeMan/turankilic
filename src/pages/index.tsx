import { ContactUs } from "@/components/ContactUs/Contact";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import { Layout } from "@/components/Layout";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Project";
import { WhyUs } from "@/components/WhyUs/WhyUs";
import { Wrapper } from "@/components/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Layout>
        <Navbar />
        <Hero/>
        <WhyUs/>
        <Projects/>
        <ContactUs/>
        <Footer/>
      </Layout>
    </Wrapper>
  );
}
