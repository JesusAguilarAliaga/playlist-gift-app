import { formatArtists } from "../utils/FormatArtists"
import { useDispatch } from "react-redux"
import { adToList } from "../store/slices/addedList"
import { Link } from "react-router-dom"
import { RiAddCircleLine, RiPlayFill } from "@remixicon/react"
import { motion } from "framer-motion"
import { variants } from "../utils/variants"
import { resetMusic, setArtistsMusic, setExternalUrl, setMusicPlay, setNameMusic } from "../store/slices/musicPlay"
import { toastWarning } from "../utils/notifications"

const trackAnimate = variants.items

const MainTrackList = ({track, index}) => {
  const dispatch = useDispatch()

  const handleAddTrack = () => {
    dispatch(adToList(track))
  }

  const handlePlay = () => {
    if(track.preview_url === null){
      toastWarning("Ups, parece que esta canción no tiene preview")
      dispatch(resetMusic())
      return
    }
    dispatch(setMusicPlay(track.preview_url))
    dispatch(setNameMusic(track.name))
    dispatch(setArtistsMusic(track.artists[0].name))
    dispatch(setExternalUrl(track.external_urls.spotify))
  }

  const artistsName = formatArtists(track.artists).slice(0, 2)
  const lastName = formatArtists(track.artists).slice(2)


  return (
    <motion.li variants={trackAnimate} initial="hidden" animate="visible" exit="exit" custom={index} className="relative w-full h-[60px] flex gap-5 justify-between items-center hover:bg-[#A284F6]/10 rounded-lg">
      <Link to={`/tracks/${track.id}`}><img className="size-[60px] rounded-lg" src={track.album.images[2]?.url} alt="img" /></Link>
      <div className="flex-1">
        <Link to={`/tracks/${track.id}`}><h5 className="text-[15px] max-w-[270px] font-semibold truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px] hover:underline">{track.name}</h5></Link>
        <p className="text-[13px] max-w-[270px] opacity-40 truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px] ">
          {artistsName.map((artist, index) => (
            <Link to={`/artists/${artist.id}`} key={artist.name}><span className="hover:underline">{index > 0 ? `, ${artist.name}` : artist.name}</span></Link>
          ))}
          <span>{lastName[0]?.name !== undefined ? `, ${lastName[0]?.name}` : ""}</span>
        </p>
      </div>
      <RiPlayFill className="text-[22px] relative hover:text-[#A284F6] hover:border-2 hover:border-[#A284F6] hover:rounded-full" onClick={handlePlay}></RiPlayFill>
      <RiAddCircleLine className="text-[22px] mr-2 hover:text-[#A284F6]" onClick={handleAddTrack}/>
    </motion.li>
  )
}
export default MainTrackList