import React, { useState, useEffect, useContext } from "react"
import Link from "next/link"
import Image from "next/image"

// Internal Imports
import Style from "./Navbar.module.css"
import { Model, TokenList } from "../index"
import images from "../../assets"

const Navbar = () => {
  const [openModel, setopenModel] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)

  return (
    <div className=" fixed w-full z-[100]">
      <div className="flex justify-left items-center w-full p-4 justify-between">
        <div className="md:flex gap-4">
          <div>
            <Image
              src={images.logo}
              alt="logo"
              width={50}
              height={50}
              className="mr-12"
            />
          </div>
          <p className="mr-10 pt-2">Swap</p>
          <p className="mr-10 pt-2">Tokens</p>
          <p className="mr-10 pt-2">Pools</p>
        </div>

        <div className="bg-[#1e1e1e] m-auto">
          <input
            type="text"
            placeholder="Search Tokens"
            className="bg-transparent border-2 border-slate-600  "
          />
        </div>

        <div className="flex justify-between items-center gap-8">
          <h2 className="mx-8">Network</h2>
          <h2 className="mx-8">Connect</h2>
          {openModel && (
            <Model setOpenModel={setOpenTokenBox} connectWallet="Connect" />
          )}
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
