import AboutTheProject from "@/components/AboutTheProject";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <AboutTheProject />
        <Features />
        <HowItWorks />
      </main>
    </div>
  );
}
