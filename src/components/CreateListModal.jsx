import { useEffect, useRef, useState } from "react";
import CasetteSmall from "./CasetteSmall";
import { useDispatch, useSelector } from "react-redux";
import ModalTrackList from "./ModalTrackList";
import { fetchCreate } from "../store/slices/fetchCrud";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { variants } from "../utils/variants";
import { toastWarning } from "../utils/notifications";


const {initial, animate, exit} = variants.popUpList

const CreateListModal = ({setModalCreateList, modalCreateList}) => {
  const { title, to, message } = useSelector((store) => store.inputsToCreate)
  const addedList = useSelector((store) => store.addedList)
  const loader = useSelector((store) => store.fetchCrud.loader)
  const [isFlipped, setIsFlipped] = useState(false);
  const modalRef = useRef(null)
  const dispatch = useDispatch()

  const idTracks = addedList.map((track) => ({"id": track.id}))
  const data = {
    "title": title,
    "message": message,
    "to": to,
    "tracks": idTracks
  }

  const handleCreateFetch = () => {
    if(title === ""){
      toastWarning("Ponle un nombre a tu playlist")
    }else if (to, message === ""){
      setIsFlipped(true)
      toastWarning("Ponle un destinatario y un mensaje")
    }else if(addedList.length === 0){
      toastWarning("Agrega al menos una canción")
    }
    else{
      dispatch(fetchCreate(data, setModalCreateList))
    }
  }


  useEffect(() => {
    // Función para cerrar el modal si se hace clic fuera de él
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalCreateList(false);
      }
    };

    // Agregar el event listener al documento cuando el componente se monta
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      // Eliminar el event listener cuando el componente se desmonta
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [modalCreateList]);

  return (
    <motion.section initial={initial} animate={animate} exit={exit} layout ref={modalRef} className="z-20 absolute p-3 flex flex-col gap-[10px] items-center top-[75px] right-0 w-[270px] rounded-lg bg-[#A284F6] border-[1px] border-[#edd641ec]">
      <CasetteSmall isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
      <motion.ul layoutId="list" className="modalScroll w-full max-h-[40vh] flex flex-col gap-[10px] overflow-auto">
        {addedList.map((track) => (
          <ModalTrackList key={track.id} track={track}/>
        ))}
      </motion.ul>
      <motion.button layoutId="button" onClick={handleCreateFetch}  className="mt-4 w-[136px] h-[37px] border-2 rounded-[33px] hover:bg-white/20" type="button">{loader ? <Loader /> : "CREAR"}</motion.button>
    </motion.section>
  )
}
export default CreateListModal