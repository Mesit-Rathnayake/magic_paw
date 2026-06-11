import Navbar from "../components/Navbar"

import Landing from "./Landing"
import About from "./About"
import Tokenomics from "./tokenomics"
import Roadmap from "./roadmap"
import Games from "./games"
import FAQ from "./faq"

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Landing />
        <About />
        <Tokenomics />
        <Roadmap />
        <Games />
        <FAQ />
      </main>
    </>
  )
}

export default Home