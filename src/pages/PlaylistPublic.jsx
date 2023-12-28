import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import NavPublic from "../components/publicComponents/NavPublic"
import SectionPublic from "../components/publicComponents/SectionPublic"
import { useDispatch, useSelector } from "react-redux"
import { setDataInput } from "../store/slices/inputTitleCasette"
import { setNameCasette } from "../store/slices/inputNameCasette"
import { setMessageCasette } from "../store/slices/inputMessageCasette"
import NewUserModal from "../components/publicComponents/NewUserModal"

//eab59f6f-1448-4f71-b48c-672d16456de6          id  

const PlaylistPublic = () => {
  const [loading, setLoading] = useState(false)
  const [publicData, setDataPublic] = useState({})
  const newUserModal = useSelector((store) => store.newUserModal)
  const dispatch =useDispatch()
  const { id } = useParams()

  console.log(publicData)

  useEffect(() => {
    setLoading(true)
    const dataFetch = async () => {
      try {
        const response = await fetch("https://backend-final-project-dev-mzps.3.us-1.fl0.io/api/playlists/" + id)
        const data = await response.json()
        setDataPublic(data)
      } 
      catch (error) {
        console.error(error)
      }
      finally {
        setLoading(false)
      }
    }

    dataFetch()

    return () => {
      dispatch(setDataInput(""));
      dispatch(setNameCasette("PARA:"));
      dispatch(setMessageCasette("MENSAJE:"));
    }
  }, [])


  return (
    <article className="text-white font-urbanist">
      <NavPublic />
      <SectionPublic publicData={publicData} loading={loading}/>
      <div className="-z-10 absolute size-52 top-[60%] right-[25%] bg-[#FFE24B] blur-[140px]"></div>
      <div className="-z-10 absolute size-52 top-[75%] right-[5%] bg-[#C03EFE] blur-[140px]"></div>
      {newUserModal ? <NewUserModal /> : null}
    </article>
  )
}
export default PlaylistPublic