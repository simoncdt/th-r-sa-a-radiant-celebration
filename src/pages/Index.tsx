import { Confetti } from "@/components/Confetti";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { IntroSection } from "@/components/IntroSection";
import { LettersSection } from "@/components/LettersSection";
import { VersesSection } from "@/components/VersesSection";
import { PlaylistSection } from "@/components/PlaylistSection";
import { GallerySection } from "@/components/GallerySection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Birthday confetti animation */}
      <Confetti />
      
      {/* Navigation */}
      <Navigation />

      {/* Hero */}
      <HeroSection />

      {/* Introduction */}
      <section id="intro">
        <IntroSection />
      </section>

      {/* Letters from friends */}
      <section id="lettres">
        <LettersSection />
      </section>

      {/* Bible verses */}
      <section id="foi">
        <VersesSection />
      </section>

      {/* Playlist */}
      <section id="musique">
        <PlaylistSection />
      </section>

      {/* Photo gallery */}
      <section id="galerie">
        <GallerySection />
      </section>

      {/* Footer */}
      <FooterSection />
    </main>
  );
};

export default Index;
