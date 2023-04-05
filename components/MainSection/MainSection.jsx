import React, { useState, useContext } from "react"
import Link from "next/link"

// Internal Imports
import Style from "./MainSection.module.css"
import { Token, Search } from "../index"
import { IoSettingsSharp } from "react-icons/io5"
import { SlSocialGithub } from "react-icons/sl"

// Swap Context Import
import { SwapTokenContext } from "../../context/SwapContext"

const MainSection = (tokenData) => {
  // singleSwapToken imported from SwapToken context to use to execute swaps
  const { account, connectWallet, singleSwapToken, ether, dai } =
    useContext(SwapTokenContext)
  // States
  const [openSettings, setOpenSettings] = useState(false)
  const [openToken, setOpenToken] = useState(false)
  const [openSwapToken, setOpenSwapToken] = useState(false)

  // TokenData States
  const [tokenOne, setTokenOne] = useState({ name: "" })
  const [tokenSwap, setTokenSwap] = useState({ name: "" })

  return (
    <div className="w-[90%] h-screen mx-auto flex flex-col justify-center items-center pt-16  ">
      <div className=" bg-[#111111]/90 border-[1px] border-white/20 w-[35rem] p-4 rounded-xl shadow-black shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-xl text-semibold tracking-widest">Swap</p>
          <div>
            <IoSettingsSharp
              size={20}
              className="hover:text-pink-600 cursor-pointer trasnform duration-300"
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
              className="bg-black/50 hover:bg-black/60 text-pink-500 hover:text-pink-600 px-12 border-white/40 border-[1px] cursor-pointer transform duration-200 ease-in rounded-xl text-xl "
            >
              {tokenOne.name || "ETH"}
              <small>{ether.slice(0, 6)}</small>
            </button>
          </div>
        </div>
        <div className={Style.Swap_Input}>
          <div className="flex items-center justify-between rounded-lg pl-8 mt-4 p-2 py-4 bg-white/5">
            <input type="text" placeholder="0" />
            <button
              onClick={() => setOpenSwapToken(true)}
              className="bg-black/50 hover:bg-black/60 text-pink-500 hover:text-pink-600 px-12 border-white/40  border-[1px] cursor-pointer transform duration-200 ease-in rounded-xl text-xl"
            >
              {tokenSwap.name || "TKN"}
              <small>{dai.slice(0, 6)}</small>
            </button>
          </div>
        </div>
        {account ? (
          <button
            onClick={() => singleSwapToken()}
            className="bg-zinc-700 shadow-black shadow-lg hover:bg-zinc-600 text-pink-600 text-2xl py-5 px-8 my-4 w-full cursor-pointer transform duration-200 font-semibold tracking-wider rounded-xl ease-in"
          >
            Swap
          </button>
        ) : (
          <button
            onClick={() => connectWallet()}
            className="bg-zinc-700 shadow-black shadow-md hover:bg-zinc-600 text-pink-600 text-2xl py-5 px-8 my-4 w-full cursor-pointer transform duration-200 font-semibold tracking-wider rounded-xl ease-in"
          >
            Connect Wallet
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

      <div className="mt-20 flex justify-between gap-4 items-center text-lg tracking-wider text-pink-600 ">
        <p>Currently being built :</p>
        <Link
          href="https://github.com/igopib/decentralized-exchange"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:shadow-[#ff2a6d] hover:text-[#ff2a6d]"
        >
          <SlSocialGithub size={30} />
        </Link>
      </div>
    </div>
  )
}

export default MainSection
