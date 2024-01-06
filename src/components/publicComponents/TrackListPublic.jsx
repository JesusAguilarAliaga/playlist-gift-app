import { formatArtists } from "../../utils/FormatArtists"
import { RiPlayFill } from "@remixicon/react"
import { motion } from "framer-motion"
import { variants } from "../../utils/variants"
import { toastWarning } from "../../utils/notifications"
import { resetMusic, setArtistsMusic, setExternalUrl, setMusicPlay, setNameMusic } from "../../store/slices/musicPlay"
import { useDispatch } from "react-redux"

const animation = variants.items

const TrackListPublic = ({track, index}) => {
  const dispatch = useDispatch()

  const artists = formatArtists(track.artists)

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


  return (
    <motion.li variants={animation} initial="hidden" animate="visible" exit="exit" custom={index} className="relative w-full h-[60px] flex gap-5 justify-between items-center hover:bg-[#A284F6]/10 rounded-lg">
      <img className="size-[60px] rounded-lg" src={track.album.images[2]?.url} alt="img" />
      <div className="flex-1">
        <h5 className="text-[15px] max-w-[310px] font-semibold truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px]">{track.name}</h5>
        <p className="text-[13px] max-w-[310px] opacity-40 truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px] ">
          {artists.map((artist, index) => (
            <span key={artist.name}>{index > 0 ? `, ${artist.name}` : artist.name}</span>
          ))}
        </p>
      </div>
      <RiPlayFill onClick={handlePlay} className="text-[22px] relative mr-2 hover:text-[#A284F6] hover:border-2 hover:border-[#A284F6] hover:rounded-full" />
    </motion.li>
  )
}
export default TrackListPublic