import React, { useState, useEffect } from "react"
import { AiOutlineClose, AiFillLock, AiFillClockCircle } from "react-icons/ai"

// Internal Import
import Style from "./Token.module.css"

const Token = ({ setOpenSettings }) => {
  return (
    <div className="absolute my-0 mx-auto p-8 w-[30rem] h-[25rem] bg-[#EDCBFE] border-2 border-[#FFD4E4] rounded-xl ">
      <div className="">
        <div className="flex justify-between item-center py-4">
          <h3 className="text-xl text-semibold tracking-widest ">Settings</h3>
          <AiOutlineClose
            size={20}
            className="cursor-pointer"
            onClick={() => setOpenSettings(false)}
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="">Slippage Tolerance</p>
          <AiFillLock size={20} />
        </div>
        <div className={Style.Setting_Input}>
          <div className="flex items-center gap-4 my-4">
            <input
              type="text"
              placeholder="0.5%"
              className=" rounded-lg my-2"
            />
            <button className="bg-[#FEFFA3]  px-4 h-full  border-2 border-[#fcee03]  cursor-pointer hover:bg-[#f2e6bc] transform duration-300 text-slate-700 rounded-lg">
              Auto
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4 my-4">
          <p>Transaction Deadline</p>
          <AiFillClockCircle size={20} />
        </div>
        <div className={Style.Setting_Input}>
          <div className="flex items-center gap-4">
            <input type="text" placeholder="30" />
            <button className="bg-[#FEFFA3]  px-4 h-full  border-2 border-[#fcee03]  cursor-pointer hover:bg-[#f2e6bc] transform duration-300 text-slate-700 rounded-lg">
              Minutes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Token
