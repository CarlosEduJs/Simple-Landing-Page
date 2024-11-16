import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DownloadExtension from "./components/DownloadExtension";
import AskedQuestion from "./components/AskedQuestion";
import Footer from "./components/Footer";

import Menu from "./components/Menu";

import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };
  
  return (
    <div>
      <Menu showMenu={showMenu} onClose={handleCloseMenu} />
      <Header showMenu={handleShowMenu} />
      <Hero />
      <Features />
      <DownloadExtension />
      <AskedQuestion />
      <Footer />
    </div>
  );
}

export default App;
