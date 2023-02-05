import Head from "next/head"
import React, { useState, useContext, useEffect } from "react"

// INTERNAL IMPORTS
import { MainSection } from "../components/index"

export default function Home() {
  return (
    <>
      <Head>
        <title>Decentralized Exchange</title>
        <meta name="description" content="Made with next and tailwind" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MainSection accounts="acc" tokenData="tknData" />
      </div>
    </>
  )
}
