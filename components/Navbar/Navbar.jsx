import React, { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Image from "next/image"

// Internal Imports
import Style from "./Navbar.module.css"
import { Model, TokenList } from "../index"
import images from "../../assets"

const Navbar = () => {
  const [openModel, setOpenModel] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)

  return (
    <div className=" fixed w-full z-[100]">
      <div className="flex justify-between items-center w-full p-5">
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
              <p className="px-4 hover:text-[#5bccf6] transform duration-200">
                Swap
              </p>
            </Link>
            <Link href="/d">
              <p className="px-4 hover:text-[#5bccf6] transform duration-200">
                Tokens
              </p>
            </Link>
            <Link href="/">
              <p className="px-4 hover:text-[#5bccf6] transform duration-200">
                Pools
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-[#56ccf6] mr-8">
          <input
            type="text"
            placeholder="Search Tokens"
            className="bg-transparent border-2 border-slate-600 px-10 py-2 placeholder:text-slate-500 placeholder:text-center "
          />
        </div>
        <div>
          <div className="flex justify-between items-center gap-8 ">
            <h2 className="px-10 py-2 border-2 border-slate-600 bg-[#5bccf6]">
              Network
            </h2>
            <button
              onClick={() => setOpenModel(true)}
              className="bg-[#56ccf6]   py-2 px-10 border-2 border-slate-600 cursor-pointer hover:bg-[#8dcfe8] transform duration-300 "
            >
              Connect
            </button>
            {openModel && (
              <Model setOpenModel={setOpenModel} connectWallet="Connect" />
            )}
          </div>
        </div>
      </div>

      {/* TOKEN LIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="Date" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  )
}

export default Navbar
