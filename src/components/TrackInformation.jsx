import { Link } from "react-router-dom"
import { formatArtists } from "../utils/FormatArtists"
import { motion } from "framer-motion"
import { variants } from "../utils/variants"

const animation = variants.modal

const TrackInformation = ({ trackInfo }) => {
  const artistsName = formatArtists(trackInfo.artists).slice(0, 2)
  const lastName = formatArtists(trackInfo.artists).slice(2)

  return (
    <motion.section layoutId="trackInfo" variants={animation} initial="initial" animate="animate" className="w-full h-[247px] flex gap-9 max-sm:flex-col max-sm:h-auto max-sm:items-center max-sm:gap-y-4">
      <img className="size-[247px] rounded-[10px]" src={trackInfo.album.images[1].url} alt="" />
      <div className="text-[15px] w-full h-full flex flex-col justify-center gap-y-3 max-sm:items-center">
        <h4 className="font-semibold">{trackInfo?.name}</h4>
        <p className="text-[14px] text-white/50">
        {artistsName.map((artist, index) => (
            <Link to={`/artists/${artist.id}`} key={artist.name}><span className="hover:underline">{index > 0 ? `, ${artist.name}` : artist.name}</span></Link>
          ))}
          <span>{lastName[0]?.name !== undefined ? `, ${lastName[0]?.name}` : ""}</span>
        </p>
        <p >Disco: <span className="text-[14px] text-white/50">{trackInfo.album.name}</span></p>
        <p >Año de salida: <span className="text-[14px] text-white/50">{trackInfo.album.release_date.split("-")[0]}</span></p>
      </div>
    </motion.section>
  )
}
export default TrackInformation