import "../styles/globals.css"
import React, { useState, useContext, useEffect } from "react"
//Internal Import
import { Navbar } from "../components/index"

const App = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
)

export default App
