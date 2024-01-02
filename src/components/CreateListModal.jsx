import { useEffect, useRef, useState } from "react";
import CasetteSmall from "./CasetteSmall";
import { useDispatch, useSelector } from "react-redux";
import ModalTrackList from "./ModalTrackList";
import { fetchCreate } from "../store/slices/fetchCrud";
import { resetInputsCreate } from "../store/slices/inputsToCreate";
import { resetAddedList } from "../store/slices/addedList";

const CreateListModal = ({setModalCreateList, modalCreateList}) => {
  const inputNameCasette = useSelector((store) => store.inputsToCreate.name)
  const inputTitleCasette = useSelector((store) => store.inputsToCreate.title)
  const inputMessageCasette = useSelector((store) => store.inputsToCreate.message)
  const stateCreation = useSelector((store) => store.fetchCrud.createSuccess)
  const tokenUser =useSelector((store) => store.tokenUser)
  const addedList = useSelector((store) => store.addedList)
  const modalRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if(stateCreation === true) {
      dispatch(resetInputsCreate())
      dispatch(resetAddedList())
      setModalCreateList(false)
    }
  }, [stateCreation])


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
    <section ref={modalRef} className="z-20 absolute p-3 flex flex-col gap-[10px] items-center top-[75px] right-0 w-[270px] rounded-lg bg-[#A284F6] border-[1px] border-[#edd641ec]">
      <CasetteSmall isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
      <ul className="modalScroll w-full max-h-[40vh] flex flex-col gap-[10px] overflow-auto">
        {addedList.map((track) => (
          <ModalTrackList key={track.id} track={track}/>
        ))}
      </ul>
      <button onClick={() => dispatch(fetchCreate(data, token))}  className="mt-4 w-[136px] h-[37px] border-2 rounded-[33px]" type="button">CREAR</button>
    </section>
  )
}
export default CreateListModal