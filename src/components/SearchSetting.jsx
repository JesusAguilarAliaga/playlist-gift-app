import { toastInfo} from "../utils/notifications";
import { motion } from "framer-motion";
import { variants } from "../utils/variants";

const { initial, animate, exit } = variants.modal;

const SearchSetting = ({totalTracks, setTotalTracks, setShowSettings}) => {
  const handleTotalTracksChange = (e) => {
    toastInfo(`Canciones mostradas por busqueda: ${e.target.value}`);
    const newValue = e.target.value;
    setTotalTracks(newValue);
    setShowSettings(false); // Establecer showSettings en false cuando se elija una opción
  };

  return (
    <motion.div initial={initial} animate={animate} exit={exit} className="z-20 absolute w-[180px] h-[120px] top-[50px] right-[10px] bg-[#A284F6] text-white px-3 py-1 rounded-[4px] flex flex-col justify-around items-center">
      <p className="text-center w-full select-none">Canciones mostradas por busqueda</p>
      <select className="w-[50%] bg-white/20 px-2 py-1 outline-none text-center" name="" id="" value={totalTracks} onChange={handleTotalTracksChange}>
        <option className="text-black" value="10">10</option>
        <option className="text-black" value="20">20</option>
        <option className="text-black" value="30">30</option>
      </select>
    </motion.div>
  )
}
export default SearchSetting