import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import CompactThreePillars from "./component/CompactThreePillars";
import HowitWorks from "./component/HowitWorks";
import Whatwebuild from "./component/whatwebuild";
import Footer from "./component/Footer";
import Shivlogo from "./component/shivlogo";
import Idea from "./component/Idea";
import Faqs from "./component/Faqs";
import WorkSnapshots from "./component/WorkSnapchat";
import AiTools from "./component/AiTools";
import Card from "./component/card";
import Promises  from "./component/Promises";
import Team from "./component/Team";
import Innovators from "./component/innovators";
import Technology from "./component/Technology";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CompactThreePillars />
      <HowitWorks />
      <Whatwebuild />
      <WorkSnapshots/>
      <Innovators/>
      <Team/>
      <Promises/>
      <AiTools/>
   <Technology/>
      <Card/>
      <Faqs />
      <Idea />
      <Footer />
      <Shivlogo />
    

    </div>
  );
}
