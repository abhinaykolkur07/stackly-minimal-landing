import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import PixelgradeSection from "./components/PixelgradeSection";
import HelpingBusinessSection from "./components/HelpingBusinessSection";
import CalendarSection from "./components/CalendarSection";
import CustomerSection from "./components/CustomerSection";
import CommunityUpdates from "./components/CommunityUpdates";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
     <Clients/>
     <Community />
     <PixelgradeSection />
     <HelpingBusinessSection />
     <CalendarSection />
     <CustomerSection />
     <CommunityUpdates />
     <Footer />
    </>
  );
}

export default App;