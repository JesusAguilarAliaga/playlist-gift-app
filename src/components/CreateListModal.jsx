import { useEffect, useRef, useState } from "react";
import CasetteSmall from "./CasetteSmall";
import { useDispatch, useSelector } from "react-redux";
import ModalTrackList from "./ModalTrackList";
import { fetchCreate } from "../store/slices/fetchCrud";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { variants } from "../utils/variants";


const {initial, animate, exit} = variants.popUpList

const CreateListModal = ({setModalCreateList, modalCreateList}) => {
  const inputNameCasette = useSelector((store) => store.inputsToCreate.name)
  const inputTitleCasette = useSelector((store) => store.inputsToCreate.title)
  const inputMessageCasette = useSelector((store) => store.inputsToCreate.message)
  const tokenUser =useSelector((store) => store.tokenUser.tokenUser)
  const addedList = useSelector((store) => store.addedList)
  const loader = useSelector((store) => store.fetchCrud.loader)
  const modalRef = useRef(null)
  const dispatch = useDispatch()

  const idTracks = addedList.map((track) => ({"id": track.id}))
  const token = tokenUser.token
  const data = {
    "title": inputTitleCasette,
    "message": inputMessageCasette,
    "to": inputNameCasette,
    "tracks": idTracks
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

    return () => {
      // Eliminar el event listener cuando el componente se desmonta
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalCreateList]);

  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <motion.section initial={initial} animate={animate} exit={exit} layout ref={modalRef} className="z-20 absolute p-3 flex flex-col gap-[10px] items-center top-[75px] right-0 w-[270px] rounded-lg bg-[#A284F6] border-[1px] border-[#edd641ec]">
      <CasetteSmall isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
      <motion.ul layoutId="list" className="modalScroll w-full max-h-[40vh] flex flex-col gap-[10px] overflow-auto">
        {addedList.map((track) => (
          <ModalTrackList key={track.id} track={track}/>
        ))}
      </motion.ul>
      <motion.button layoutId="button" onClick={() => dispatch(fetchCreate(data, token, setModalCreateList))}  className="mt-4 w-[136px] h-[37px] border-2 rounded-[33px]" type="button">{loader ? <Loader /> : "CREAR"}</motion.button>
    </motion.section>
  )
}
export default CreateListModal