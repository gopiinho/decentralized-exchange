import React, { useState, useEffect } from "react"
import { AiOutlineClose } from "react-icons/ai"

const Token = ({ openSettings }) => {
  return (
    <div>
      <div>
        <div className="flex justify-between item-center">
          <h3>Settings</h3>
          <AiOutlineClose size={25} />
        </div>
      </div>
    </div>
  )
}

export default Token
