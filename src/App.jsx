import { useSmoothScroll } from './lib/smoothScroll'
import Nav from './components/Nav'
import ScrubHero from './components/ScrubHero'
import CaseStudies from './components/CaseStudies'
import Steps from './components/Steps'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Nav />
      <main>
        <ScrubHero />
        <CaseStudies />
        <Steps />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
