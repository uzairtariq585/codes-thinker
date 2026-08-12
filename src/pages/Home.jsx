import React from 'react'
import HeroSwiper from "../components/Heroswiper";
import Cards from "../components/Cards";
import About1 from "../components/About1";
import Cards2 from "../components/Cards2";

function home() {
  return (
     <>
      <HeroSwiper />
      <About1 />
      <Cards />
      <Cards2 />
      
    </>
  )
}

export default home
