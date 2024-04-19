import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"

import  * as Sentry from '@sentry/react'
import Feature from "./components/Feature"


const App=()=> {
  // return <button onClick={() => methodDoesNotExist()}>Break the world</button>;
  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <Highlights/>
      <Model/>
      <Feature/>
    </main>
  )
}
export default Sentry.withProfiler(App);