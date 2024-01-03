import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import NavPublic from "../components/publicComponents/NavPublic"
import SectionPublic from "../components/publicComponents/SectionPublic"
import { useDispatch, useSelector } from "react-redux"
import { setDataInput } from "../store/slices/inputTitleCasette"
import { setNameCasette } from "../store/slices/inputNameCasette"
import { setMessageCasette } from "../store/slices/inputMessageCasette"
import NewUserModal from "../components/publicComponents/NewUserModal"
import { axiosMusic } from "../utils/configAxios"
import { AnimatePresence } from "framer-motion"

const PlaylistPublic = () => {
  const [loading, setLoading] = useState(false)
  const [publicData, setDataPublic] = useState({})
  const newUserModal = useSelector((store) => store.newUserModal)
  const dispatch =useDispatch()
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    axiosMusic.get("/api/playlists/" + id)
    .then(({ data }) => setDataPublic(data))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))

    return () => {
      dispatch(setDataInput(""));
      dispatch(setNameCasette("PARA:"));
      dispatch(setMessageCasette("MENSAJE:"));
    }
  }, [ id ])


  return (
    <article className="text-white font-urbanist">
      <NavPublic />
      <SectionPublic publicData={publicData} loading={loading}/>
      <div className="-z-10 absolute size-52 top-[60%] right-[25%] bg-[#FFE24B] blur-[140px]"></div>
      <div className="-z-10 absolute size-52 top-[75%] right-[5%] bg-[#C03EFE] blur-[140px]"></div>
      <AnimatePresence>
        {newUserModal ? <NewUserModal /> : null}
      </AnimatePresence>
    </article>
  )
}
export default PlaylistPublic