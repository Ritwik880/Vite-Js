import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import Header from './Components/Header'
import Home from './Components/Home';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  const theme = {
    colors: {
      color: "#FFFFFF",
      black: "#000000",
      bg: "#F4FCFF",
      btn: "#4042E2",
      btnBg: "linear-gradient(180deg, #6167FF 0%, #0009D9 100%)",
      btnGradient: "linear-gradient(89.6deg, #5077FF 0.31%, #9981FB 42.01%, #F797FF 99.64%)",
      cardBox: "linear-gradient(89.6deg, #5077FF 0.31%, #9981FB 42.01%, #999DFB 99.64%)",
      gradient:
        "linear-gradient(89.6deg, #2CBDFB 0.31%, #9175FF 47.7%, #4764FF 99.64%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App