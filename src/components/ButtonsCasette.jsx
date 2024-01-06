import { useDispatch, useSelector } from "react-redux"
import { fetchUpdate } from "../store/slices/fetchCrud"
import { setDeleteId, setDeleteModal } from "../store/slices/deleteModal"
import { RiDeleteBinLine, RiSave3Line, RiShareLine } from "@remixicon/react"
import { toastError, toastSuccess } from "../utils/notifications"

const ButtonsCasette = ({id}) => {
  const inputNameCasette = useSelector((store) => store.inputNameCasette)
  const inputTitleCasette = useSelector((store) => store.inputTitleCasette)
  const inputMessageCasette = useSelector((store) => store.inputMessageCasette)
  const dispatch = useDispatch()

  const data = {
    "title": inputTitleCasette,
    "message": inputMessageCasette,
    "to": inputNameCasette
  }




  const onClickShare = async () => {
    if (navigator.share) {
      try {
        const urlToShare = window.location.origin;
        const urlComplete = urlToShare + "/playlist/public/" + id;

        await navigator.share({
          title: "Shared Playlist",
          text: "Check out this playlist!",
          url: urlComplete,
        });
        toastSuccess("¡Contenido compartido con éxito!");
      } catch (error) {
        toastError("Error al compartir contenido");
      }
    } else {
      const urlToCopy = window.location.origin;
      const urlComplete = urlToCopy + "/#/playlist/public/" + id;

      try {
        await navigator.clipboard.writeText(urlComplete);
        toastSuccess("¡Enlace copiado al portapapeles!");
      } catch (error) {
        toastError("Error al copiar al portapapeles");
      }
    }
  };

  /* const onClickShare = () => {
    const urlToShare = window.location.origin
    const urlComplete = urlToShare + "/#/playlist/public/" + id

    navigator.clipboard.writeText(urlComplete)
    .then(() => toastSuccess("link copiado al portapapeles"))
    .catch(() => toastError("Hubo un error, intentalo de nuevo"))
  } */

  const handleDelete = () => {
    dispatch(setDeleteModal(true))
    dispatch(setDeleteId(id))
  }

  return (
    <div className="absolute flex justify-between w-full px-7 bottom-5 right-0 text-white">
      <div className="flex gap-3">
        <button onClick={() =>dispatch(fetchUpdate(id, data))} className="size-[37px] border-2 rounded-full relative flex items-center justify-center hover:text-[#84f68aa5] hover:border-[#84f68aa5]" type="button"><RiSave3Line className="size-[20px]"/></button>
        <button onClick={handleDelete} className="size-[37px] border-2 rounded-full relative flex items-center justify-center hover:text-[#f6849ba5] hover:border-[#f6849ba5]" type="button"><RiDeleteBinLine className="size-[20px]"/></button>
      </div>
      <button onClick={onClickShare} className="relative size-[37px] border-2 rounded-full flex items-center justify-center hover:text-[#84f68aa5] hover:border-[#84f68aa5]" type="button"><RiShareLine className="size-[20px]"/></button>
    </div>
  )
}
export default ButtonsCasette