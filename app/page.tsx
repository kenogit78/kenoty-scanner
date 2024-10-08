import Cta from "./components/Cta";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PromoSection from "./components/PromoSection";
import Testimonials from "./components/Testimonials";
import TrustedCompanies from "./components/TrustedCompanies";
// import TrustedCompanies from "./components/TrustedCompanies";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <Features />
      <Cta />
      <Testimonials />
      <PromoSection />
    </div>
  );
}
