import { useState } from 'react'
import { looks } from './data/looks'
import Header from './components/Header'
import Runway from './components/Runway'
import ProductPanel from './components/ProductPanel'

export default function App() {
  const [active, setActive] = useState(3)

  const step = (direction: number) => {
    setActive((index) => Math.min(Math.max(index + direction, 0), looks.length - 1))
  }

  return (
    <>
      <Header />
      <main className="page">
        <Runway looks={looks} active={active} onStep={step} />
        <ProductPanel looks={looks} active={active} onStep={step} />
      </main>
    </>
  )
}
