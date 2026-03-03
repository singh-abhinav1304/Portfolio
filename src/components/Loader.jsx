import { useEffect, useState } from "react"
import ParticlesBackground from "./components/ParticlesBackground"
import Home from "./pages/Home"
import Loader from "./components/Loader"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false)
    }, 800)

    return () => clearTimeout(timer)

  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <ParticlesBackground />
      <Home />
    </div>
  )
}

export default App