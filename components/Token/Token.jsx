import React, { useState, useEffect } from "react"
import { AiOutlineClose, AiFillLock, AiFillClockCircle } from "react-icons/ai"
import { IoWallet } from "react-icons/io"

// Internal Import
import Style from "./Token.module.css"

const Token = ({ setOpenSettings }) => {
  return (
    <div className="absolute my-0 mx-auto p-8 w-[30rem] h-[25rem] bg-[#131313] border-[1px] border-white/50 rounded-xl ">
      <div className="">
        <div className="flex justify-between item-center py-4">
          <h3 className="text-xl text-semibold tracking-widest pb-6">
            Settings
          </h3>
          <AiOutlineClose
            size={20}
            className="cursor-pointer hover:text-pink-600 transform duration-300"
            onClick={() => setOpenSettings(false)}
          />
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <p className="">Slippage Tolerance</p>
          <AiFillLock size={20} />
        </div>
        <div className={Style.Setting_Input}>
          <div className="flex items-center gap-4 my-4 ">
            <input
              type="text"
              placeholder="0.5%"
              className=" rounded-lg py-1 my-2 "
            />
            <button className="bg-black/50 hover:bg-black/60 text-pink-500 hover:text-pink-600 px-6 py-1  border-white/40 border-[1px] cursor-pointer transform duration-200 ease-in rounded-xl text-xl ">
              Auto
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 my-4 text-slate-400">
          <p>Transaction Deadline</p>
          <AiFillClockCircle size={20} />
        </div>
        <div className={Style.Setting_Input}>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="30"
              className=" rounded-lg py-1 my-2 "
            />
            <button className="bg-black/50 hover:bg-black/60 text-pink-500 hover:text-pink-600 px-6 py-1  border-white/40 border-[1px] cursor-pointer transform duration-200 ease-in rounded-xl text-xl ">
              Minutes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Token
