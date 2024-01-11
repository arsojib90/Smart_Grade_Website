import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StudentsTable from "./components/StudensTable";

function App() {
  return (
    <div className="font-[Inter] text-white ">
      <div className="bg-[#0f684c] h-screen">
        <Navbar />
        <Hero />
      </div>

      <div className="bg-[#172227]">
        <StudentsTable />
        <Footer />
      </div>
    </div>
  );
}

export default App;
