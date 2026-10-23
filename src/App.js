import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Products from "./Components/Products";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="main-content">
          <Hero />
          <Stats />
          <Products />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;