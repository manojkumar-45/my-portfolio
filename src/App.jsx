
import React from "react";
import Home from "./Components/Home";
import LightRays from "./Components/LightRays";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 z-10 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div className="relative z-10">
        <Navbar/>
        <Home />
      </div>
    </div>
  );
};

export default App;