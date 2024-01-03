import { RiHeartFill, RiHeartLine } from "@remixicon/react"
import useNumberFormatter from "../hooks/useNumberFormatter"
import usePopularityRange from "../hooks/usePopularityRange"
import { motion } from "framer-motion"
import { variants } from "../utils/variants"

const animation = variants.modal

const ArtistInformation = ({trackInfo}) => {
  const formattedNumber = useNumberFormatter(trackInfo.followers.total)
  const rating = usePopularityRange(trackInfo.popularity)

  
  return (
    <motion.section layoutId="artistInfo" variants={animation} initial="initial" animate="animate" className="w-full h-[247px] flex items-center gap-9 max-sm:flex-col max-sm:h-auto max-sm:items-center max-sm:gap-y-4">
      <img className="rounded-full size-[192px] object-cover object-top" src={trackInfo.images[1]?.url} alt="artist" />
      <div className="text-[15px] w-full h-full flex flex-col justify-center gap-y-3 max-sm:items-center max-w-[270px]">
        <h4 className="font-bold text-[20px]">{trackInfo.name}</h4>
        <p className="font-semibold">Seguidores: <span className="text-[14px] text-white/70">{formattedNumber}</span></p>
        <p className="font-semibold flex items-center gap-1">
          Popularidad: 
          {rating.map((heart, index) => (
            <span key={index} className="text-[20px] font-normal">
              {heart === "painted" ? <RiHeartFill/> : <RiHeartLine/>}
            </span>
          ))}
        </p>
        <div className="w-full flex flex-col gap-y-2 max-sm:items-center">
            Generos:
            <ul className="flex gap-2 flex-wrap text-[13px] text-white/90 max-sm:justify-center">
              {trackInfo.genres.map((genre) => (
                <li key={genre} className="px-3 h-[26px] border-[1px] border-[#A284F6]/50 rounded-[33px] flex items-center">
                  {genre}
                </li>
              ))}
            </ul>
        </div>
      </div>
    </motion.section>
  )
}
export default ArtistInformation