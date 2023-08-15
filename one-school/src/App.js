import "./App.css";

import Navbar from "./Componets/Navbar";
import RightSection from "./Componets/RightSection";
import Sidebar from "./Componets/Sidebar";
import "./Componets/MainContainer.css";

function App() {
  return (
    <div className="container-fuild">
      <div className="row-12">
        <Navbar />
      </div>
      <div className="row-12">
        <div className="main-container">
          <Sidebar />
          <RightSection />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
