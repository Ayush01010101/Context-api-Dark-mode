import React, { useState } from 'react';
import { Themeprovider,Themehook } from './Contexts/Context';
import ThemeBtn from './Components/Themebtn';
import Card from './Components/Card';

function App() {
  const [theme,settheme]=useState("light")


  const lightmode=()=>{
    settheme("light")
  }
  const darkmode=()=>{
    settheme("dark")
  }
  
  document.querySelector("html").classList.remove("dark","light")
  document.querySelector("html").classList.add(theme)


  return (
    <>
    <Themeprovider value={{theme,lightmode,darkmode,settheme}}>
      <ThemeBtn/>
      <Card/>



    </Themeprovider>


    </>
  )
}

export default App
