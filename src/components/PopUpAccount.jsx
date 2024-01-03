import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/tokenUserSlice";
import { RiLoginBoxLine, RiPlayFill } from "@remixicon/react"
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { variants } from "../utils/variants";

const { initial, animate, exit } = variants.popUpAccount

const PopUpAccount = ({ modalAccount, setModalAccount }) => {
  const modalRef = useRef(null);
  
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }

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
    <motion.section initial={initial} animate={animate} exit={exit} ref={modalRef} className="-z-10 absolute -left-[40px] top-[60px] w-[200px] h-[90px] flex flex-col justify-center items-start bg-gradient-to-r from-[#886AE2] from-[43.66%] to-[#A284F6] to-[116.16%] rounded-md border-[1px] border-[#edd641ec] ">
      <Link to={"/playlist"} className="w-full">
        <button className="flex w-full py-[8px] px-4 justify-between hover:bg-white/20"><RiPlayFill /> MIS GRABACIONES</button>
      </Link>
      <Link to={"/"} className="w-full">
        <button onClick={handleLogout} className="flex w-full py-[8px] px-4 hover:bg-white/20"><RiLoginBoxLine /> CERRAR SESION</button>
      </Link>
    </motion.section>
  )
}
export default PopUpAccount