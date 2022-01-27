import { useState, useRef, createRef, useEffect } from "react";
import "./App.scss";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Featured from "./components/Featured";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CustomCursor from "./CustomCursor";
import useLocoScroll from "./hooks/useLocoScroll";

function App() {
  const [preloader, setPreloader] = useState(true);
  useLocoScroll(!preloader)
  const [timer, setTimer] = useState(3)

  const id = useRef(null)
    const scrollRef = createRef();


  const clear = () => {
    window.clearInterval(id.current)
    setPreloader(false)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer -1 )
    }, 1000)
  }, [])
  
  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  },[timer])
    return (
        <>
            <CustomCursor />

            {preloader ? (
          <div className="loader-wrapper absolute" ref={scrollRef}>
            <h1>Flirty Flowers</h1>
            <h2>Rio De Janeiro</h2>
            
                </div>
            ) : (
            <div className="main-container" id="main-container"
             data-scroll-container
            >
                    <NavBar />
                    <Header />
                    <Featured />
                    <About />
                    <Gallery />
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
