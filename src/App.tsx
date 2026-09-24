import Nav from './components/sections/Nav'
import Hero from './components/sections/Hero'
import Marquee from './components/sections/Marquee'
import WaterLine from './components/sections/WaterLine'
import Stats from './components/sections/Stats'
import Lemonades from './components/sections/Lemonades'
import QualityStory from './components/sections/QualityStory'
import Values from './components/sections/Values'
import Partners from './components/sections/Partners'
import CtaBanner from './components/sections/CtaBanner'
import Footer from './components/sections/Footer'

// Сборка страницы (задача 21): порядок секций — карточка 21, DESIGN.md «Задача 21».
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WaterLine />
        <Stats />
        <Lemonades />
        <QualityStory />
        <Values />
        <Partners />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
