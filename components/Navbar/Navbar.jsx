import React, { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { RiArrowDownSLine } from "react-icons/ri"
import { IoWallet } from "react-icons/io5"

// Internal Imports
import Style from "./Navbar.module.css"
import { Model, TokenList } from "../index"
import images from "../../assets"
import { connectWallet } from "../../utils/appFeatures"

// Swap Context Import
import { SwapTokenContext } from "../../context/SwapContext"

const Navbar = () => {
  const { account, connectedNetwork, connectWallet, tokenData } =
    useContext(SwapTokenContext)

  // States
  const [openModel, setOpenModel] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)

  return (
    <div className=" fixed w-full z-[100] bg-[#27262C]">
      <div className="flex justify-between items-center w-full p-3">
        <div className="md:flex flex-row">
          <div>
            <Image
              src={images.logo}
              alt="logo"
              width={50}
              height={50}
              className="mx-8 pb-1"
            />
          </div>
          <div className="flex jusify-between mx-5 items-center ">
            <Link href="/">
              <p className="px-4 mr-5 hover:bg-white/10 ease-in py-2 rounded-xl transform duration-200">
                Swap
              </p>
            </Link>
            <Link href="/d">
              <p className="px-4 mr-5 hover:bg-white/10 ease-in rounded-xl py-2 transform duration-200">
                Tokens
              </p>
            </Link>
            <Link href="/">
              <p className="px-4 hover:bg-white/10 ease-in rounded-xl py-2 transform duration-200">
                Pools
              </p>
            </Link>
          </div>
        </div>
        <div className={Style.Search_Token}>
          <div className="hover:border-[#EDCBFE] border-white/50 bg-white/10  ease-in transform duration-200 hover:shadow-neon-main border-[1px] mr-20 rounded-xl">
            <input
              type="text"
              placeholder="Search tokens"
              className=" px-20 py-2 focus:bg-black/50  placeholder:text-center rounded-xl transform duration-200"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center gap-8">
            <div className="flex justify-between items-center gap-2 px-3 py-2 hover:bg-white/10  rounded-lg transform duration-200 cursor-pointer">
              <h2 className="mr-2 ">{connectedNetwork}</h2>
              <RiArrowDownSLine size={20} />
            </div>

            {account ? (
              <button
                onClick={() => setOpenTokenBox(true)}
                className="flex justify-between bg-[#1f1f1f] ease-in hover:bg-zinc-900 hover:text-pink-500 py-2 px-6 border-[1px] hover:border-white/20 border-white/10 rounded-xl  cursor-pointer transform duration-200"
              >
                {account.slice(0, 10)}..
                <IoWallet size={25} className=" pl-2 text-pink-500" />
              </button>
            ) : (
              <button
                onClick={() => setOpenModel(true)}
                className="flex justify-between bg-[#1f1f1f] ease-in hover:bg-zinc-900 hover:text-pink-500 py-2 px-6 border-[1px] hover:border-white/20 border-white/10 rounded-xl  cursor-pointer transform duration-200"
              >
                Connect
                <IoWallet size={25} className=" pl-2 text-pink-500" />
              </button>
            )}

            {openModel && (
              <Model
                setOpenModel={setOpenModel}
                connectWallet={connectWallet}
              />
            )}
          </div>
        </div>
      </div>

      {/* TOKEN LIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenData={tokenData} setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  )
}

export default Navbar
