import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { axiosMusic, axiosPlaylist } from "../utils/configAxios"
import { useSelector } from "react-redux"
import Nav from "../components/Nav"
import Loader from "../components/Loader"
import MainTrackList from "../components/MainTrackList"
import TrackInformation from "../components/TrackInformation"
import { RiArrowLeftLine } from "@remixicon/react"
import { motion } from "framer-motion"

const TracksInfo = () => {
  const [trackInfo, setTrackInfo] = useState({})
  const [loader, setLoader] = useState(true)
  const navigate = useNavigate()
  const token = useSelector((store) => store.tokenUser.token)
  const {id} = useParams()

  useEffect(() => {
    setLoader(true)
    axiosMusic.get(`api/tracks/${id}/`,
    {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(({data}) => setTrackInfo(data))
    .catch(err => console.log(err))
    .finally(() => setLoader(false))
  }, [ id ])

  return (
    <main className="min-h-screen w-full text-white font-urbanist font-normal">
      <Nav />
      <motion.article layout className="relative max-w-[570px] mx-auto pt-[70px] pb-8 px-[34px] mt-[65px] flex flex-col items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
        <motion.button layoutId="goBack" onClick={() => navigate(-1)} className="absolute flex items-center top-3 left-4 px-[10px] h-[32px] border-2 border-white/10 rounded-[33px] hover:bg-[#A284F6] hover:border-transparent" type="button"><RiArrowLeftLine className="ri-arrow-left-line"></RiArrowLeftLine> Atras</motion.button>
        {loader ? <Loader /> : 
        (<>
          <TrackInformation trackInfo={trackInfo} />
          <h3 className="w-full text-left font-semibold text-[13px] mt-[45px] mb-[16px]">RECOMENDACIONES</h3>
          <ul className="w-full flex flex-col gap-[20px]">
          {trackInfo.relatedSongs.map((track) => (
            <MainTrackList key={track.id} track={track} />
          ))}
          </ul>

        </>)}
      </motion.article>
      <div className="-z-10 absolute size-52 top-[60%] right-[25%] bg-[#FFE24B] blur-[140px]"></div>
      <div className="-z-10 absolute size-52 top-[75%] right-[5%] bg-[#C03EFE] blur-[140px]"></div>
    </main>
  )
}
export default TracksInfo