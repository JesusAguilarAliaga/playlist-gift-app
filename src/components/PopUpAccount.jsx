import { Link } from "react-router-dom"
import { RiLoginBoxLine, RiPlayFill } from "@remixicon/react"
import { useEffect, useRef } from "react";

const PopUpAccount = ({ modalAccount, setModalAccount }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Función para cerrar el modal si se hace clic fuera de él
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalAccount(false);
      }
    };
    // Agregar el event listener al documento cuando el componente se monta
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Eliminar el event listener cuando el componente se desmonta
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalAccount]);

  return (
    <section ref={modalRef} className="absolute -left-[40px] top-[60px] w-[200px] h-[90px] flex flex-col gap-2 justify-center items-start px-4 bg-gradient-to-r from-[#886AE2] from-[43.66%] to-[#A284F6] to-[116.16%] rounded-md border-[1px] border-[#edd641ec]">
      <Link to={"/playlist"}>
        <button className="flex w-full justify-between"><RiPlayFill /> MIS GRABACIONES</button>
      </Link>
      <button className="flex w-full"><RiLoginBoxLine /> CERRAR SESION</button>
    </section>
  )
}
export default PopUpAccount