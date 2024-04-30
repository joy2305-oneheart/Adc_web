import { useState } from 'react'
import './App.css'
import Header from './component/header/header'
import Banner from './component/banner/banner'
import Slider from './component/slider/slider'
import Heading from './component/heading/heading'
// import Button from './component/button/button'
import './scss/main.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Banner/>
        <Heading/>
        {/* <Button btnText="New Here JOIN us" newClass="outline ms-2" to="/"/> */}
        <Slider/>
    </>
  )
}

export default App
