import { useState } from "react"
import { formatArtists } from "../../utils/FormatArtists"
import PopUpHover2 from "../PopUpHover2"
import { RiPlayFill } from "@remixicon/react"

const TrackListPublic = ({track}) => {
  const [showPopup, setShowPopup] = useState(false)
  const [textPopup ,setTextPopup] = useState("")

  const artists = formatArtists(track.artists)

  const onMouseEnter = (text) => {
    setTextPopup(text)
    setShowPopup(true)
  }


  return (
    <li className="relative w-full h-[60px] flex gap-5 justify-between items-center hover:bg-[#A284F6]/10 rounded-lg">
      <img className="size-[60px] rounded-lg" src={track.album.images[2]?.url} alt="img" />
      <div className="flex-1">
        <h5 className="text-[15px] max-w-[310px] font-semibold truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px]">{track.name}</h5>
        <p className="text-[13px] max-w-[310px] opacity-40 truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px] ">
          {artists.map((artist, index) => (
            <span key={artist.name}>{index > 0 ? `, ${artist.name}` : artist.name}</span>
          ))}
        </p>
      </div>
      <button onMouseEnter={() => onMouseEnter("Reproducir")} onMouseLeave={() => setShowPopup(false)} className="text-[22px] relative pr-1">{showPopup && <PopUpHover2 popupText={textPopup}/>}<RiPlayFill /></button>
    </li>
  )
}
export default TrackListPublic