import About from "./components/About"
import BottomDock from "./components/BottomDock"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

function App() {
  return (
    <>
      <main>
        <About />
        <Hero />
        <Projects />
      </main>
      <Footer />
      <BottomDock />
    </>
  )
}

export default App
