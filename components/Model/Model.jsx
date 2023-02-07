import React, { useState, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"

import Style from "./Model.module.css"

const Model = ({ setOpenModel, connectWallet }) => {
  // STATES
  const walletOptions = ["Metamask", "Coinbase", "Wallet", "Wallet Connect"]

  return (
    <div className="items-center grid z-50  absolute inset-0 justify-center h-screen w-screen  bg-[#030e12]/80">
      <div className="(full box) bg-[#EDCBFE] border-4 border-[#FFD4E4] p-8 rounded-xl ">
        <div className="flex justify-between items-center pb-4 (heading)">
          <p className="text-2xl">Connect Wallet</p>
          <AiOutlineClose
            size={25}
            onClick={() => setOpenModel(false)}
            className="cursor-pointer hover:text-[#5bccf6] transform duration-200"
          />
        </div>
        <div className={Style.wallet}>
          {walletOptions.map((el, i) => (
            <p
              key={i + 1}
              onClick={() => connectWallet()}
              className="my-4 p-4 rounded-l bg-[#FEFFA3] text-slate-800 cursor-pointer   border-2 border-[#fcee03]  hover:bg-[#f2e6bc] transform duration-300"
            >
              {el}
            </p>
          ))}
        </div>
        <p className="p-4 leading-4 over ">
          By connecting your wallet, you agree to our Terms of Services.
        </p>
      </div>
    </div>
  )
}

export default Model
