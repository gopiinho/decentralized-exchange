import React, { useState } from "react"
import { IoSettingsSharp } from "react-icons/io5"

const TokenList = ({ tokenData, setOpenTokenBox }) => {
  return (
    <div className="absolute w-80 border-[1px] border-white/20 mt-8 right-0 mr-4 p-4 bg-[#131313] rounded-xl">
      <p
        onClick={() => setOpenTokenBox(false)}
        className="absolute cursor-pointer -right-0 mr-4 z-[11111] hover:text-pink-600 transform duration-300"
      >
        <IoSettingsSharp size={20} />
      </p>
      <div className="w-full py-4 font-semibold tracking-widest ">
        <h2>Your tokens</h2>
      </div>
      {tokenData.map((el, i) => (
        <div className="relative cursor-pointer border-b-2 border-white/10 py-[1px]">
          <div className="grid grid-cols-3 items-center py-2">
            <p className="bg-zinc-800 pr-2  border-[1px] border-pink-600 mr-11 pl-2 rounded-lg ">
              {el.symbol}
            </p>
            <p className="">
              <span className="font-semibold text-pink-600 mr-2 ">
                {el.balance}
              </span>
              {el.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TokenList
