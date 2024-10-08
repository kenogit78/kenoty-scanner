import Features from "./components/Features";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import TrustedCompanies from "./components/TrustedCompanies";
// import TrustedCompanies from "./components/TrustedCompanies";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <Features />
      <Testimonials />
    </div>
  );
}
