import { useState } from "react"
import PopUpHover2 from "../PopUpHover2"
import { useDispatch } from "react-redux"
import { setNewUserModal } from "../../store/slices/newUserModal"

const ButtonsCasettePublic = () => {
  const [sharePopup, setSharePopup] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)
  const [textPopup ,setTextPopup] = useState("")
  const dispatch = useDispatch()
  
  const onClickShare = () => {
    const urlToShare = window.location.href

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

  return (
    <div className="absolute flex justify-end w-full px-5 bottom-4 -right-0 text-white gap-2">
        <button onClick={onClickShare} onMouseEnter={() => onMouseEnter("Compartir", setSharePopup)} onMouseLeave={() => onMouseLeave(setSharePopup)} className="relative size-[37px] border-2 rounded-full" type="button"><i className="ri-share-line"></i>{sharePopup && <PopUpHover2 popupText={textPopup} />}</button>
        <button onClick={() => dispatch(setNewUserModal(true))} onMouseEnter={() => onMouseEnter("Crear Playlist", setDeletePopup)} onMouseLeave={() => onMouseLeave(setDeletePopup)} className="size-[37px] border-2 rounded-full relative" type="button"><i className="ri-add-line"></i>{deletePopup && <PopUpHover2 popupText={textPopup} />}</button>
    </div>
  )
}
export default ButtonsCasettePublic