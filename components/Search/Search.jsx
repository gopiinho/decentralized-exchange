import React, { useState } from "react"
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai"

// Internal Import
import Style from "./Search.module.css"

const Search = ({ openToken, tokens, tokenData }) => {
  // States
  const [active, setActive] = useState(1)
  const sampleCoinData = [
    { name: "ETH" },
    { name: "UNI" },
    { name: "CAKE" },
    { name: "WBNB" },
    { name: "ADA" },
    { name: "BTC" },
  ]
  return (
    <div className="absolute my-0 mx-auto p-8 w-[30rem] h-[25rem] bg-[#131313] border-[1px] border-white/20 rounded-xl ">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-xl text-semibold tracking-widest">
            Select token
          </h3>
          <AiOutlineClose
            size={19}
            onClick={() => openToken(false)}
            className="cursor-pointer hover:text-[#da2877] ease-in transform duration-200"
          />
        </div>
        <div className={Style.Search_Input}>
          <div className="flex items-centre bg-white/10 gap-4 rounded-xl py-2 px-4 my-4 focus:bg-black/20 ">
            <div>
              <AiOutlineSearch size={20} className="pt-1" />
            </div>
            <input type="text" placeholder="Search name or contract address" />
          </div>
        </div>
        <div className={Style.Search_Token_List}>
          {sampleCoinData.map((el, i) => (
            <span
              key={i + 1}
              className={active == i + 1 ? `${Style.active}` : ""}
              onClick={() => (setActive(i + 1), tokens({ name: el.name }))}
            >
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Search
