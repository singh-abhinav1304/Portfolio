import { useState, useEffect } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import Loader from "./components/Loader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const handleLoad = () => {
      setLoading(false);
    };

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <ParticlesBackground />
      <Home />
    </div>
  );
}

export default App;