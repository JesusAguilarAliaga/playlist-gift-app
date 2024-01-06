import { useEffect, useState } from "react"
import CasetteMain from "./CasetteMain"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import EditSectionTrack from "./EditSectionTrack"
import { RiArrowLeftLine, RiArrowLeftRightLine } from "@remixicon/react"
import { axiosMusic } from "../utils/configAxios"
import { setDataInput } from "../store/slices/inputTitleCasette"
import { setNameCasette } from "../store/slices/inputNameCasette"
import { setMessageCasette } from "../store/slices/inputMessageCasette"
import Loader from "./Loader"
import { motion } from "framer-motion"
import { setListCasette } from "../store/slices/listCasette"

const EditSection = () => {
  const navigate = useNavigate()
  const [changeSide, setChangeSide] = useState(false)
  const [loader, setLoader] = useState(false)
  const listTracks = useSelector((store) => store.listCasette.listCasette)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    setLoader(true)
    axiosMusic.get(`/api/playlists/${id}`)
    .then(({data}) => {
      dispatch(setListCasette(data.tracks))
      dispatch(setDataInput(data.title))
      dispatch(setNameCasette(data.to))
      dispatch(setMessageCasette(data.message))
    })
    .catch(err => console.log(err))
    .finally(() => setLoader(false))
  }, [ id ])


  return (
    <motion.section layout className="relative max-w-[570px] mx-auto pt-16 pb-10 px-16 mt-[65px] flex flex-col gap-[25px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:mt-[20px] max-sm:px-4">
      <motion.button layoutId="buttonBack" onClick={() => navigate(-1)} className="absolute top-4 left-4 px-[10px] h-[32px] border-2 border-white/10 rounded-[33px] flex items-center hover:bg-[#A284F6] hover:border-transparent" type="button"><RiArrowLeftLine className="ri-arrow-left-line"/> Atras</motion.button>
      {loader ? <Loader /> 
      :<>
      <CasetteMain changeSide={changeSide} setChangeSide={setChangeSide} id={id}/>
      <motion.button layoutId="buttonChangeSide" className=" flex  items-center justify-around mb-4 px-3 gap-2 w-[136px] h-[37px] border-2 rounded-[33px] hover:bg-[#A284F6] hover:border-transparent" onClick={() => setChangeSide(!changeSide)}>{changeSide ? "LADO A" : "LADO B"}<RiArrowLeftRightLine className="size-[20px]"/></motion.button>
      <motion.ul layoutId="listCasetteInfo" className="w-full flex flex-col gap-[20px]">
      {listTracks.map((track, index) => (
        <EditSectionTrack key={track.id} track={track} index={index} idPlaylist={id}/>
      ))}
      </motion.ul>
      </>}
    </motion.section>
    
  )
}
export default EditSection