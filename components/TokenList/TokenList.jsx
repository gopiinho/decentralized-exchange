import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const TokenList = ({ tokenData, setOpenTokenBox }) => {
  const data = [1, 2, 3, 4, 5]
  return (
    <div className="absolute w-80 border-2 border-[#FFD4E4] mt-8 right-0 mr-4 p-4 bg-[#EDCBFE]">
      <p
        onClick={() => setOpenTokenBox(false)}
        className="absolute cursor-pointer -right-0 mr-4 z-[11111]"
      >
        <AiOutlineClose size={25} />
      </p>
      <div className="w-full py-4 font-semibold tracking-widest ">
        <h2>Your Tokens</h2>
      </div>
      {data.map((el, i) => (
        <div className="relative cursor-pointer border-b-2 border-slate-600 py-2">
          <div className="grid grid-cols-3 items-center">
            <p className="bg-[#FEFFA3] pr-2  border-2 border-slate-600 mr-11 pl-2 rounded-lg ">
              BTC
            </p>
            <p className="">
              <span className="font-semibold text-[#FEFFA3] mr-2 ">12</span>
              Bitcoin
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TokenList
