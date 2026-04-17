import { ControlsSection } from "./components/ControlsSection";
import { FAQSection } from "./components/FAQSection";
import { HeroSection } from "./components/HeroSection";
import { InstallationGuide } from "./components/InstallationGuide";
import { MarketingFooter } from "./components/MarketingFooter";
import { ProductShowcase } from "./components/ProductShowcase";
import { TrustStrip } from "./components/TrustStrip";
import { Wordmark } from "./components/Wordmark";
import { latestRelease } from "./content/release";

export function App() {
  return (
    <div className="site-root">
      <header className="site-header">
        <div className="shell header-shell">
          <Wordmark />
          <nav className="site-nav" aria-label="Primary">
            <a href="#features">Features</a>
            <a href="#controls">Controls</a>
            <a href="#faq">FAQ</a>
            <a className="button button-nav" href={latestRelease.dmgUrl} download>
              Download
            </a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
        <TrustStrip />
        <ProductShowcase />
        <ControlsSection />
        <InstallationGuide />
        <FAQSection />
      </main>

      <MarketingFooter />
    </div>
  );
}
