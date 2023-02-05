import React, { useState, useContext } from "react"

// INTERNAL IMPORTS
import { Token, Search } from "../index"

const MainSection = (accounts, tokenDate) => {
  // STATES
  const [openSettings, setOpenSettings] = useState(false)
  const [openToken, setOpenToken] = useState(false)
  const [openSwapToken, setOpenSwapToken] = useState(false)

  // TOKEN DATA STATES
  const [tokenOne, setTokenOne] = useState({ name: "", image: "" })
  const [tokenSwap, setTokenSwap] = useState({ name: "", image: "" })

  return <div>MainSection</div>
}

export default MainSection
