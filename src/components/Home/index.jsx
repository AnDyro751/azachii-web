import React, { useEffect } from "react"
import Header from "../Header"
import MainBanner from "./MainBanner/index"
import HelpYou from "../HelpYou/index"

const MainHome = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <HelpYou />
    </div>
  )
}
export default MainHome
