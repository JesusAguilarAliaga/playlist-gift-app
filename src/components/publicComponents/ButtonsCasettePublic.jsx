import { useState } from "react"
import PopUpHover2 from "../PopUpHover2"
import { useDispatch } from "react-redux"
import { setNewUserModal } from "../../store/slices/newUserModal"
import { RiAddLine, RiShareLine } from "@remixicon/react"
import { toastSuccess } from "../../utils/notifications"

const ButtonsCasettePublic = () => {
  const [sharePopup, setSharePopup] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)
  const [textPopup ,setTextPopup] = useState("")
  const dispatch = useDispatch()
  
  const onClickShare = () => {
    const urlToShare = window.location.href

    navigator.clipboard.writeText(urlToShare)
    .then(() => toastSuccess("Link copiado al portapapeles"))
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
        <button onClick={onClickShare} onMouseEnter={() => onMouseEnter("Compartir", setSharePopup)} onMouseLeave={() => onMouseLeave(setSharePopup)} className="relative size-[37px] border-2 rounded-full flex items-center justify-center" type="button"><RiShareLine className="size-[20px]"/>{sharePopup && <PopUpHover2 popupText={textPopup} />}</button>
        <button onClick={() => dispatch(setNewUserModal(true))} onMouseEnter={() => onMouseEnter("Crear Playlist", setDeletePopup)} onMouseLeave={() => onMouseLeave(setDeletePopup)} className="size-[37px] border-2 rounded-full relative flex items-center justify-center" type="button"><RiAddLine className="text-[20px]"/>{deletePopup && <PopUpHover2 popupText={textPopup} />}</button>
    </div>
  )
}
export default ButtonsCasettePublic