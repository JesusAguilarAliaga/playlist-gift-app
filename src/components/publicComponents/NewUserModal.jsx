import { useDispatch } from "react-redux";
import { setNewUserModal } from "../../store/slices/newUserModal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variants } from "../../utils/variants";

const animate = variants.modalPublic

const NewUserModal = () => {
  const dispatch = useDispatch()
  const data = window.localStorage.getItem('PLAYLIST_USER')

  return (
    <motion.div variants={animate} initial="initial" animate="animate" exit="exit"  className="z-20 absolute inset-0 w-full h-screen flex justify-center items-center bg-black/50 font-bold">
      <div className="flex flex-col items-center justify-between w-[315px] h-[186px] p-[40px] bg-gradient-to-r  from-[#886AE2] from-[43.66%] to-[#A284F6] to-[116.16%] rounded-[13px] border-[1px] border-[#edd641ec]">
        <p className="text-center">¿QUIERES CREAR UNA PLAYLIST PARA COMPARTIR?</p>
        <div className="flex w-full justify-around">
          <Link to={`${data ? "/home" : "/register"}`} onClick={() => dispatch(setNewUserModal(false))} className="h-[37px] border-2 rounded-[33px] px-3 flex items-center hover:bg-white/20" type="button">SI, CREAR CUENTA</Link>
          <button onClick={() => dispatch(setNewUserModal(false))} className="h-[37px] border-2 rounded-[33px] px-3 hover:bg-white/20" type="button">NO</button>
        </div>
      </div>
    </motion.div>
  );
};
export default NewUserModal;
