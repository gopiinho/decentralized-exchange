import React, { useState, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"

import Style from "./Model.module.css"

const Model = ({ setOpenModel, connectWallet }) => {
  // STATES
  const walletOptions = ["Metamask", "Coinbase", "Wallet", "Wallet Connect"]

  return (
    <div className="items-center grid z-50 (full) absolute inset-0 justify-center h-screen w-screen text-white">
      <div className="(full box) bg-[#030e12] p-8 border-2 ">
        <div className="flex justify-between items-center (heading)">
          <p className="text-xl">Connect Wallet</p>
          <AiOutlineClose onClick={() => setOpenModel(false)} />
        </div>
        <div className={Style.wallet}>
          {walletOptions.map((el, i) => (
            <p key={i + 1} onClick={() => connectWallet()} className="c">
              {el}
            </p>
          ))}
        </div>
        <p>
          By connecting a wallet, you agree and consent to its Privacy Policy.
        </p>
      </div>
    </div>
  )
}

export default Model
