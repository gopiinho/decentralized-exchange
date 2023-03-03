import React, { useState, useContext } from "react"

// Internal Imports
import Style from "./MainSection.module.css"
import { Token, Search } from "../index"
import { IoSettingsSharp } from "react-icons/io5"

const MainSection = (accounts, tokenData) => {
  // States
  const [openSettings, setOpenSettings] = useState(false)
  const [openToken, setOpenToken] = useState(false)
  const [openSwapToken, setOpenSwapToken] = useState(false)

  // TokenData States
  const [tokenOne, setTokenOne] = useState({ name: "" })
  const [tokenSwap, setTokenSwap] = useState({ name: "" })

  return (
    <div className="w-[90%] h-screen mx-auto flex justify-center items-center pb-20 ">
      <div className=" bg-[#111111]/90 border-[1px] border-white/20 w-[35rem] p-4 rounded-xl ">
        <div className="flex justify-between items-center">
          <p className="text-xl text-semibold tracking-widest">Swap</p>
          <div>
            <IoSettingsSharp
              size={20}
              className="hover:text-[#BB86FC] cursor-pointer trasnform duration-300"
              onClick={() => setOpenSettings(true)}
            />
          </div>
        </div>
        <div className="mt-2 text-slate-600 text-sm">
          <p>Trade tokens in an instant</p>
        </div>
        <div className={Style.Swap_Input}>
          <div className="flex items-center justify-between rounded-xl pl-8 mt-4 p-2 py-4 bg-white/5">
            <input type="text" placeholder="0" className="" />
            <button
              onClick={() => setOpenToken(true)}
              className="bg-black/50 hover:bg-black/60 text-pink-500 hover:text-pink-600 px-12  border-white/40 border-[1px] cursor-pointer transform duration-200 ease-in rounded-xl text-xl "
            >
              {tokenOne.name || "ETH"}
              <small>17</small>
            </button>
          </div>
        </div>
        <div className={Style.Swap_Input}>
          <div className="flex items-center justify-between  rounded-lg pl-8 mt-4 p-2 py-4 bg-white/5">
            <input type="text" placeholder="0" />
            <button
              onClick={() => setOpenSwapToken(true)}
              className="bg-black/50 hover:bg-black/60 text-pink-500 hover:text-pink-600 px-12 border-white/40  border-[1px] cursor-pointer transform duration-200 ease-in rounded-xl text-xl"
            >
              {tokenSwap.name || "TKN"}
              <small>17</small>
            </button>
          </div>
        </div>
        {accounts ? (
          <button className="bg-purple-300/80  hover:bg-black/60 text-purple-700 hover:text-pink-600  border-[1px] text-2xl py-5 px-8 my-4 w-full hover:border-[#EDCBFE]/70 border-white/10 cursor-pointer  transform duration-200 font-semibold tracking-wider rounded-xl ease-in">
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={() => {}}
            className="bg-black/50  hover:bg-black/60 text-pink-500 hover:text-pink-600  border-[1px] text-2xl py-5 px-8 my-4 w-full hover:border-[#EDCBFE]/70 border-white/10 cursor-pointer  transform duration-200 font-semibold tracking-wider rounded-xl ease-in"
          >
            Swap
          </button>
        )}
      </div>
      {openSettings && <Token setOpenSettings={setOpenSettings} />}
      {openToken && (
        <Search
          openToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}
      {openSwapToken && (
        <Search
          openToken={setOpenSwapToken}
          tokens={setTokenSwap}
          tokenData={tokenData}
        />
      )}
    </div>
  )
}

export default MainSection
