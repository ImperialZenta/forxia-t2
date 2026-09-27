import { HomeHero } from "@/components/PageHero";
import { ValueProposition } from "@/components/ValueProposition";
import { ServicesOverview } from "@/components/ServicesOverview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ValueProposition />
      <ServicesOverview />
    </>
  );
}
