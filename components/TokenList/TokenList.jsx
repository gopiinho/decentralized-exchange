import React, { useState } from "react"
import { AiOutlineClose } from "react-icons/ai"

const TokenList = ({ tokenDate, setOpenTokenBox }) => {
  const data = [1, 2, 3]
  return (
    <div className="absolute w-80 border-2 border-slate-600 mt-8 right-0 mr-4 p-4">
      <p onClick={() => setOpenTokenBox(false)} className="">
        <AiOutlineClose size={25} />
      </p>
      <div className="w-full py-4 font-semibold tracking-widest">
        <h2>Your Tokens</h2>
      </div>
      {data.map((el, i) => (
        <div>
          <div>
            <p>Text</p>
            <p>
              <span>12</span>Bitcoin
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
export default TokenList
