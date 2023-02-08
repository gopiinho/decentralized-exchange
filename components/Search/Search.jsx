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
  ]
  return (
    <div>
      <div>
        <div>
          <h3>Select token</h3>
          <AiOutlineClose size={20} onClick={() => openToken(false)} />
        </div>
        <div>
          <div>
            <AiOutlineSearch size={20} />
          </div>
          <input type="text" placeholder="Search name or contract address" />
        </div>
        <div>
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
