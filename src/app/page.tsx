import AboutTheProject from "@/components/AboutTheProject";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main>
        <Hero />
        <AboutTheProject />
      </main>
    </div>
  );
}
