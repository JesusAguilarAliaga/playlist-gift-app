import { useState } from "react"
import PopUpHover from "./PopUpHover"
import { formatArtists } from "../utils/FormatArtists"
import { useDispatch } from "react-redux"
import { adToList } from "../store/slices/addedList"
import { Link } from "react-router-dom"

const MainTrackList = ({track}) => {
  const [showPopup, setShowPopup] = useState(false)
  const [textPopup ,setTextPopup] = useState("")
  const distpatch = useDispatch()

  //console.log(track)

  const handleAddTrack = () => {
    distpatch(adToList(track))
  }

  const onMouseEnter = (text) => {
    setTextPopup(text)
    setShowPopup(true)
  }

  //console.log(formatArtists(track.artists).split(","))


  return (
    <li className="relative w-full h-[60px] flex gap-5 justify-between items-center hover:bg-[#A284F6]/10 rounded-lg">
      <Link to={`/tracks/${track.id}`}><img className="size-[60px] rounded-lg" src={track.album.images[2]?.url} alt="img" /></Link>
      <div className="flex-1">
        <Link to={`/tracks/${track.id}`}><h5 className="text-[15px] max-w-[270px] font-semibold truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px] hover:underline">{track.name}</h5></Link>
        <p className="text-[13px] max-w-[270px] opacity-40 truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px] ">{formatArtists(track.artists)}</p>
      </div>
      <i className="ri-play-fill text-[22px] relative" onMouseEnter={() => onMouseEnter("Reproducir")} onMouseLeave={() => setShowPopup(false)}></i>
      <i className="ri-add-circle-line text-[22px] mr-2" onClick={handleAddTrack} onMouseEnter={() => onMouseEnter("Agregar a lista")} onMouseLeave={() => setShowPopup(false)}></i>
      {showPopup && <PopUpHover popupText={textPopup}/>}
    </li>
  )
}
export default MainTrackList