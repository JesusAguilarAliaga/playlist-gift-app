import { useDispatch } from "react-redux"
import { setNewUserModal } from "../../store/slices/newUserModal"
import { RiAddLine, RiShareLine } from "@remixicon/react"
import { toastSuccess } from "../../utils/notifications"

const ButtonsCasettePublic = () => {
  const dispatch = useDispatch()
  
  const onClickShare = () => {
    const urlToShare = window.location.href

    navigator.clipboard.writeText(urlToShare)
    .then(() => toastSuccess("Link copiado al portapapeles"))
    .catch((err) => console.log("hubo un error al copiar" ,err))
  }

  return (
    <div className="absolute flex justify-end w-full px-5 bottom-4 -right-0 text-white gap-2">
        <button onClick={() => dispatch(setNewUserModal(true))} className="size-[37px] border-2 rounded-full relative flex items-center justify-center hover:text-[#84b7f6] hover:border-[#84bbf6]" type="button"><RiAddLine className="text-[20px]"/></button>
        <button onClick={onClickShare} className="relative size-[37px] border-2 rounded-full flex items-center justify-center hover:text-[#84f68aa5] hover:border-[#84f68aa5]" type="button"><RiShareLine className="size-[20px]"/></button>
    </div>
  )
}
export default ButtonsCasettePublic