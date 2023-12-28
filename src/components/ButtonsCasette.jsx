import { useState } from "react"
import PopUpHover2 from "./PopUpHover2"
import { useDispatch, useSelector } from "react-redux"
import { fetchUpdate } from "../store/slices/fetchCrud"
import { setDeleteId, setDeleteModal } from "../store/slices/deleteModal"

const ButtonsCasette = () => {
  const fetchCrud = useSelector((store) => store.fetchCrud)
  const inputNameCasette = useSelector((store) => store.inputNameCasette)
  const inputTitleCasette = useSelector((store) => store.inputTitleCasette)
  const inputMessageCasette = useSelector((store) => store.inputMessageCasette)
  const tokenUser =useSelector((store) => store.tokenUser)
  //const addedList = useSelector((store) => store.addedList)
  const dispatch = useDispatch()
  const [textPopup, setTextPopup] = useState("holaaaa")
  const [savePopup, setSavePopup] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)
  const [sharePopup, setSharePopup] = useState(false)

  //const trackId =  fetchCrud.fetchCrud[0].id        
  //const idTracks = addedList.map((track) => ({"id": track.id}))

  //el boton actualizar usuario necesita el token, la data y el id de la playlist
  const token = tokenUser.token
  const data = {
    "title": inputTitleCasette,
    "message": inputMessageCasette,
    "to": inputNameCasette
  }


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
    /* dispatch(setDeleteId(trackId)) */ //pasar el id para eliminar
  }

  return (
    <div className="absolute flex justify-between w-full px-7 bottom-5 right-0 text-white">
      <div className="flex gap-3">
        <button /* onClick={() =>dispatch(fetchUpdate(trackId, data, token))} */ onMouseEnter={() => onMouseEnter("Guardar", setSavePopup)} onMouseLeave={() => onMouseLeave(setSavePopup)} className="size-[37px] border-2 rounded-full relative" type="button"><i className="ri-save-3-line"></i>{savePopup && <PopUpHover2 popupText={textPopup} />}</button>
        <button onClick={handleDelete} onMouseEnter={() => onMouseEnter("Eliminar", setDeletePopup)} onMouseLeave={() => onMouseLeave(setDeletePopup)} className="size-[37px] border-2 rounded-full relative" type="button"><i className="ri-delete-bin-line"></i>{deletePopup && <PopUpHover2 popupText={textPopup} />}</button>
      </div>
      <button onClick={onClickShare} onMouseEnter={() => onMouseEnter("Compartir", setSharePopup)} onMouseLeave={() => onMouseLeave(setSharePopup)} className="relative size-[37px] border-2 rounded-full" type="button"><i className="ri-share-line"></i>{sharePopup && <PopUpHover2 popupText={textPopup} />}</button>
    </div>
  )
}
export default ButtonsCasette