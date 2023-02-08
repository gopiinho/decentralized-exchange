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
  const [tokenOne, setTokenOne] = useState({ name: "", image: "" })
  const [tokenSwap, setTokenSwap] = useState({ name: "", image: "" })

  return (
    <div className="w-[90%] h-screen mx-auto flex justify-center items-center ">
      <div className=" bg-[#EDCBFE] border-2 border-[#FFD4E4] w-[35rem] p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <p className="text-xl text-semibold tracking-widest">Swap</p>
          <div>
            <IoSettingsSharp
              size={20}
              className="hover:text-slate-500 cursor-pointer trasnform duration-300"
              onClick={() => setOpenSettings(true)}
            />
          </div>
        </div>
        <div className="mt-2 text-slate-600 text-sm">
          <p>Trade tokens in an instant</p>
        </div>
        <div className={Style.Swap_Input}>
          <div className="flex items-center justify-between border-2 border-[#FFD4E4] rounded-lg pl-8 mt-4 p-2">
            <input type="text" placeholder="0" />
            <button
              onClick={() => openToken(true)}
              className="bg-[#FEFFA3] py-2 px-10 h-full  border-2 border-[#fcee03]  cursor-pointer hover:bg-[#f2e6bc] transform duration-300 text-slate-700 rounded-lg"
            >
              {tokenOne.name || "ETH"}
              <small>17</small>
            </button>
          </div>
        </div>
        <div className={Style.Swap_Input}>
          <div className="flex items-center justify-between border-2 border-[#FFD4E4] rounded-lg pl-8 mt-4 p-2">
            <input type="text" placeholder="0" />
            <button
              onClick={() => openToken(true)}
              className="bg-[#FEFFA3] py-2 px-10 h-full border-2 border-[#fcee03] cursor-pointer hover:bg-[#f2e6bc] transform duration-300 text-slate-700 rounded-lg"
            >
              {tokenSwap.name || "TKN"}
              <small>17</small>
            </button>
          </div>
        </div>
        {accounts ? (
          <button className="bg-[#FEFFA3]  py-3 px-10 my-4 w-full border-2 border-[#fcee03] cursor-pointer hover:bg-[#f2e6bc] transform duration-300 text-slate-700 font-semibold tracking-wider rounded-xl">
            Connect Wallet
          </button>
        ) : (
          <button
            onClick={() => {}}
            className="bg-[#FEFFA3] py-3 px-10 my-4 w-full cursor-pointer hover:bg-[#f2e6bc] transform duration-300 text-slate-700 font-semibold tracking-wider rounded-xl"
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
      {openToken && (
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
