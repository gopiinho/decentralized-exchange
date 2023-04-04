import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const TokenList = ({ tokenData, setOpenTokenBox }) => {
  // Creating empty arrat to stop the repeating of the token data
  let tokenList = []
  for (let i = 0; i < tokenData.length; i++) {
    if (i % 2 == 1) tokenList.push(tokenData[i])
  }
  return (
    <div className="absolute w-80 border-[1px] border-white/20 mt-8 right-0 mr-4 p-4 bg-[#131313] rounded-xl">
      <p
        onClick={() => setOpenTokenBox(false)}
        className="absolute cursor-pointer -right-0 mr-4 z-[11111] hover:text-pink-600 transform duration-300"
      >
        <AiOutlineClose size={20} />
      </p>
      <div className="w-full py-4 font-semibold tracking-widest ">
        <h2>Your tokens</h2>
      </div>
      {tokenList.map((el, i) => (
        <div className="relative cursor-pointer border-b-2 border-white/10 py-[1px]">
          <div className="grid grid-flow-col items-center py-3">
            <p className="bg-zinc-800 pr-2 border border-pink-600 mr-8 pl-4 rounded-md">
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
