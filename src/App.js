import Closed from "./components/Closed";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Live from "./components/Live";
import Navbar from "./components/Navbar";
import Options from "./components/Options";

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
