import React, { useState, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"

import Style from "./Model.module.css"

const Model = ({ setOpenModel, connectWallet }) => {
  // STATES
  const walletOptions = ["Metamask", "Coinbase", "Wallet", "Wallet Connect"]

  return (
    <div className="items-center grid z-50  absolute inset-0 justify-center h-screen w-screen  bg-[#030e12]/80">
      <div className="(full box) bg-[#131313] border-[1px] border-white/20  p-8 rounded-xl ">
        <div className="flex justify-between items-center pb-4">
          <p className="text-2xl text-semibold tracking-wide">
            Connect a wallet
          </p>
          <AiOutlineClose
            size={20}
            onClick={() => setOpenModel(false)}
            className="cursor-pointer hover:text-pink-600 transform duration-300"
          />
        </div>
        <div className={Style.wallet}>
          {walletOptions.map((el, i) => (
            <p
              key={i + 1}
              onClick={() => connectWallet()}
              className="my-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 text-pink-500 cursor-pointer py-6 transform duration-200 "
            >
              {el}
            </p>
          ))}
        </div>
        <p className="p-4 leading-4 over text-slate-400 ">
          By connecting your wallet, you agree to our Terms of Services.
        </p>
      </div>
    </div>
  )
}

export default Model
