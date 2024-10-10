import Cta from "./components/Cta";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PromoSection from "./components/PromoSection";
import TabsFeature from "./components/TabsFeature";
import Testimonials from "./components/Testimonials";
import TrustedCompanies from "./components/TrustedCompanies";
// import TrustedCompanies from "./components/TrustedCompanies";

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedCompanies />
      <TabsFeature />
      <Features />
      <Cta />
      <Testimonials />
      <PromoSection />
    </div>
  );
}
