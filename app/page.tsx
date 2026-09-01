import { HeroSection } from "@/components/sections/HeroSection";
import { IntroSection } from "@/components/sections/IntroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { ReservationSection } from "@/components/sections/ReservationSection";
import { AmbianceSection } from "@/components/sections/AmbianceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <MenuSection />
      <ReservationSection />
      <AmbianceSection />
    </main>
  );
}
