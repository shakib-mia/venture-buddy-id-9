import { useState } from "react";
import Closed from "./components/Closed/Closed";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Heading from "./components/Heading/Heading";
import Live from "./components/Live/Live";
import Navbar from "./components/Navbar/Navbar";
import Options from "./components/Options/Options";
import cover from "./components/utils/Cover.svg";
import profile from "./components/utils/Profile.svg";

function App() {
  const deals = [
    {
      id: 1,
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      id: 2,
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      id: 3,
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      id: 4,
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      id: 5,
      cover: cover,
      profile: profile,
      title: "Uber eats",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
    {
      id: 6,
      cover: cover,
      profile: profile,
      title: "Venturebuddy",
      content:
        "Uber Eats is an online food ordering and delivery platform launched by Uber in 2014.",
      btn1: "FINTECH",
      btn2: "HEALTH",
    },
  ];

  const [found, setFound] = useState([...deals]);

  const handleText = (e) => {
    const found = deals.filter((deal) =>
      deal.title.toLowerCase().includes(e.toLowerCase())
    );
    setFound(found);
  };

  return (
    <div className="app">
      <Navbar />
      <Heading />
      <Options handleText={handleText} />
      <Live deals={found} />
      <Closed deals={found} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
