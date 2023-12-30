import { useEffect, useState } from "react"
import PopUpHover2 from "./PopUpHover2"
import { useDispatch, useSelector } from "react-redux"
import { fetchUpdate } from "../store/slices/fetchCrud"
import { setDeleteId, setDeleteModal } from "../store/slices/deleteModal"
import { RiDeleteBinLine, RiSave3Line, RiShareLine } from "@remixicon/react"
import { useNavigate } from "react-router-dom"

const ButtonsCasette = ({id}) => {
  const inputNameCasette = useSelector((store) => store.inputNameCasette)
  const inputTitleCasette = useSelector((store) => store.inputTitleCasette)
  const inputMessageCasette = useSelector((store) => store.inputMessageCasette)
  const stateDelete = useSelector((store) => store.fetchCrud.deleteSuccess)
  const tokenUser =useSelector((store) => store.tokenUser)
  const dispatch = useDispatch()
  const [textPopup, setTextPopup] = useState("")
  const [savePopup, setSavePopup] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)
  const [sharePopup, setSharePopup] = useState(false)
  const navigate = useNavigate()

  const token = tokenUser.token
  const data = {
    "title": inputTitleCasette,
    "message": inputMessageCasette,
    "to": inputNameCasette
  }


  useEffect(() => {
    if(stateDelete === true) {
      navigate(-1)
    }
  }, [stateDelete])

  const onClickShare = () => {
    const urlToShare = window.location.href   //reemplazar por el id de esta lista

    navigator.clipboard.writeText(urlToShare)
    .then(() => console.log("url copiada"))
    .catch((err) => console.log("hubo un error al copiar" ,err))
  }

  const onMouseEnter = (text, setPopup) => {
    setTextPopup(text)
    setPopup(true)
  }

  const onMouseLeave = (setPopup) => {
    setPopup(false)
  }

  const handleDelete = () => {
    dispatch(setDeleteModal(true))
    dispatch(setDeleteId(id))
  }

  return (
    <div className="absolute flex justify-between w-full px-7 bottom-5 right-0 text-white">
      <div className="flex gap-3">
        <button onClick={() =>dispatch(fetchUpdate(id, data, token))} onMouseEnter={() => onMouseEnter("Guardar", setSavePopup)} onMouseLeave={() => onMouseLeave(setSavePopup)} className="size-[37px] border-2 rounded-full relative flex items-center justify-center" type="button"><RiSave3Line className="size-[20px]"/>{savePopup && <PopUpHover2 popupText={textPopup} />}</button>
        <button onClick={handleDelete} onMouseEnter={() => onMouseEnter("Eliminar", setDeletePopup)} onMouseLeave={() => onMouseLeave(setDeletePopup)} className="size-[37px] border-2 rounded-full relative flex items-center justify-center" type="button"><RiDeleteBinLine className="size-[20px]"/>{deletePopup && <PopUpHover2 popupText={textPopup} />}</button>
      </div>
      <button onClick={onClickShare} onMouseEnter={() => onMouseEnter("Compartir", setSharePopup)} onMouseLeave={() => onMouseLeave(setSharePopup)} className="relative size-[37px] border-2 rounded-full flex items-center justify-center" type="button"><RiShareLine className="size-[20px]"/>{sharePopup && <PopUpHover2 popupText={textPopup} />}</button>
    </div>
  )
}
export default ButtonsCasette