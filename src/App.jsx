
import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Body from './components/Body/Body';
import Airpods from './components/Airpods/Airpods';

function App() {
  // const [count, setCount] = useState(0)
  // const [calc, setCalc] = useState(0)
  // const [width, setwidth] = useState(window.innerHeight)
  // const handlPlus = () => {
  //   setCount((count) => count + 1)
  // }
  // console.log(width);
  // useEffect(() => {
  //   setCalc(() => count * 2)

  // }
  //   , [count])
  // useEffect(() => {
  //   const handleResize = () => setwidth(window.innerHeight)
  //   window.addEventListener("scroll", handleResize)
  //   return () => {
  //     window.removeEventListener("scroll", handleResize)
  //   }
  // })
  return (
    <div className="App">
      <Header />
      <Hero />
      <Body />
      <Airpods />
      {/* <h1>render boldi {count} marta</h1>
      <h1>calculator: {calc}</h1>
      <button onClick={handlPlus}>Plus</button>
      <div className="red" style={{ width: width - 50 + "px" }}>Lorem ipsum dolor sit.</div> */}
    </div >
  );
}

export default App;
