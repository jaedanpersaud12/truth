import {
  Everyone,
  FacesInterlude,
  Hero,
  Inside,
  Mosaic,
  Stats,
  WhatIsIt,
  WhatIsYours,
} from "@/components/sections/OpeningSections";
import {
  AmericanPortrait,
  BringTheBooth,
  GlobalGrid,
  Locations,
  USGrid,
} from "@/components/sections/JourneySections";
import {
  Contact,
  Quotes,
  Team,
} from "@/components/sections/ClosingSections";

export default function Page() {
  return (
    <main>
      <Hero />
      <WhatIsIt />
      <Inside />
      <Everyone />
      <WhatIsYours />
      <FacesInterlude />
      <Mosaic />
      <Stats />
      <GlobalGrid />
      <AmericanPortrait />
      <Locations />
      <USGrid />
      <BringTheBooth />
      <Quotes />
      <Team />
      <Contact />
    </main>
  );
}
