import { useState } from "react"
import PopUpHover from "./PopUpHover"

const MainTrackList = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [textPopup ,setTextPopup] = useState("Añade a tu lista")

  const onMouseEnter = (text) => {
    setTextPopup(text)
    setShowPopup(true)
  }


  return (
    <li className="relative w-full h-[60px] flex gap-5 justify-between items-center hover:bg-[#A284F6]/10 rounded-lg">
      <img className="size-[60px] rounded-lg" src="https://picsum.photos/200" alt="img" />
      <div className="flex-1">
        <h5 className="text-[15px] font-semibold">Cancion</h5>
        <p className="text-[13px] opacity-40">Artista</p>
      </div>
      <i className="ri-play-fill text-[22px] relative" onMouseEnter={() => onMouseEnter("Reproducir")} onMouseLeave={() => setShowPopup(false)}></i>
      <i className="ri-add-circle-line text-[22px] mr-2" onMouseEnter={() => onMouseEnter("Agregar a lista")} onMouseLeave={() => setShowPopup(false)}></i>
      {showPopup && <PopUpHover popupText={textPopup}/>}
    </li>
  )
}
export default MainTrackList