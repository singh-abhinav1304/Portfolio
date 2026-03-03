import { useEffect, useState } from "react"
import ParticlesBackground from "../components/ParticlesBackground"
import Home from "../pages/Home"
import Loader from "../components/Loader"

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(false)

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