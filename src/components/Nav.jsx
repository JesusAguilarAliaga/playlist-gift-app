import { useState } from "react"
import PopUpAccount from "./PopUpAccount"

const Nav = () => {
  const [modalAccount, setModalAccount] = useState(false)
  const [counter, setCounter] = useState("")

  return (
    <nav className="w-full flex justify-between items-center px-4 h-[69px] bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] font-semibold"> 
      <h2>GIFT MUSIC</h2>
      <div className="relative flex gap-8">
        <button onClick={() => setModalAccount(!modalAccount)} className="w-[135px] h-[35px] bg-gradient-to-r  from-[#886AE2] from-[43.66%] to-[#A284F6] to-[116.16%] rounded-[30px] border-[1px] border-[#edd641ec]">Mi CUENTA</button>
        <button className="h-[35px] px-5 flex items-center gap-2 border-[1px] border-[#edd641ec] rounded-[30px]"><i className="ri-play-list-2-fill"></i>GRABANDO {counter}</button>
      { modalAccount && <PopUpAccount /> }
      </div>
    </nav>
  )
}
export default Nav