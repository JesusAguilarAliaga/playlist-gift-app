import { useEffect, useState } from "react"
import PopUpAccount from "./PopUpAccount"
import CreateListModal from "./CreateListModal"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { RiPlayList2Fill } from "@remixicon/react"

let bg = "bg-gradient-to-r  from-[#886AE2] from-[43.66%] to-[#A284F6] to-[116.16%]"

const Nav = () => {
  const [modalAccount, setModalAccount] = useState(false)
  const [modalCreateList, setModalCreateList] = useState(false)
  const [counter, setCounter] = useState(0)
  const addedList = useSelector((store) => store.addedList)


  const handleModalAccount = () => {
    setModalAccount(!modalAccount)
    if(modalCreateList === true){
      setModalCreateList(false)
    }
  }

  const handleModalCreateList = () => {
    setModalCreateList(!modalCreateList)
    if(modalAccount === true){
      setModalAccount(false)
    }
  }

  useEffect(() => {
    setCounter(addedList.length)
  }, [addedList])

  return (
    <nav className="sticky top-0 z-30 w-full flex justify-center px-20 h-[69px] bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] font-semibold max-lg:px-10 max-sm:px-4 backdrop-blur-3xl"> 
      <div className="w-full h-full max-w-[1440px] flex justify-between items-center">
        <Link to={"/home"}>
          <h2>GIFT MUSIC</h2>
        </Link>
        <div className="relative flex gap-8 max-sm:gap-2">
          <button onClick={handleModalAccount} className={`w-[135px] h-[35px] rounded-[30px] border-[1px] border-[#edd641ec] outline-none ${modalAccount ? bg : ""}}`}>Mi CUENTA</button>
          <button onClick={handleModalCreateList} className={`h-[35px] px-5 flex items-center gap-2 border-[1px] border-[#edd641ec] rounded-[30px] outline-none ${modalCreateList ? bg : ""}`}><RiPlayList2Fill className="ri-play-list-2-fill "></RiPlayList2Fill> <p className="max-sm:hidden">GRABANDO</p> <span className="text-[#f68484] min-w-[20px] text-center">{counter}</span></button>
        {modalAccount && <PopUpAccount setModalAccount={setModalAccount} modalAccount={modalAccount}/> }
        {modalCreateList && <CreateListModal setModalCreateList={setModalCreateList} modalCreateList={modalCreateList}/>}
        </div>
      </div>
    </nav>
  )
}
export default Nav