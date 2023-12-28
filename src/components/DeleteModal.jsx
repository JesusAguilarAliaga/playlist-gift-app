import { useDispatch, useSelector } from "react-redux"
import { setDeleteModal } from "../store/slices/deleteModal"
import { fetchDelete } from "../store/slices/fetchCrud"

const DeleteModal = () => {
  const token = useSelector((store) => store.tokenUser.token)
  const deleteId = useSelector((store) => store.deleteModal.id)
  const dispatch = useDispatch()

  const handleDeletePlaylist = () => {
    //dispatch(fetchDelete(deleteId, token))      //descomentar cuando se tenga el id
    dispatch(setDeleteModal(false))
  }

  return (
    <div className="z-20 absolute inset-0 w-full h-screen flex justify-center items-center bg-black/50 font-bold">
      <div className="flex flex-col items-center justify-between w-[315px] h-[186px] p-[40px] bg-gradient-to-r  from-[#886AE2] from-[43.66%] to-[#A284F6] to-[116.16%] rounded-[13px] border-[1px] border-[#edd641ec]">
        <p className="text-center">¿DESEAS ELIMINAR ESTA PLAYLIST?</p>
        <div className="flex w-full justify-around">
          <button onClick={handleDeletePlaylist} className="h-[37px] border-2 rounded-[33px] px-3 flex items-center" type="button">¡CLARO QUE SI!</button>
          <button onClick={() => dispatch(setDeleteModal(false))} className="h-[37px] border-2 rounded-[33px] px-3" type="button">NO</button>
        </div>
      </div>
    </div>
  )
}
export default DeleteModal