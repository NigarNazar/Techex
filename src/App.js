import "bootstrap/dist/css/bootstrap.min.css"
import "../src/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service from "./pages/Service"
import Contact from "./pages/Contact"
import { useState, useEffect } from "react"
import Loaded from "./Loaded"
function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="app">
      <BrowserRouter>
        {
          loading ?
            <Loaded
              loading={loading}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            :
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        }

      </BrowserRouter>


    </div>
  );
}

export default App;
