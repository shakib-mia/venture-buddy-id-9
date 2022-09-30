import Closed from "./components/Closed/Closed";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import Heading from "./components/Heading/Heading";
import Live from "./components/Live/Live";
import Navbar from "./components/Navbar/Navbar";
import Options from "./components/Options/Options";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Heading />
      <Options />
      <Live />
      <Closed />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
