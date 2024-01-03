import "../../styles/Casette.css";
import { variants } from "../../utils/variants";
import ButtonsCasettePublic from "./ButtonsCasettePublic";
import { motion } from "framer-motion";


const animation = variants.modal
const CasettePublic = ({ changeSide, setChangeSide, publicData }) => {


  const handleCardFlip = () => {
    setChangeSide(!changeSide);
  };

  return (
    <>
      <motion.div layoutId="casettePublic" variants={animation} initial="initial" animate="animate" className="scene w-[340px] h-[250px] text-black">
        <div
          className="casette select-none relative w-full h-full"
          style={{ transform: changeSide ? "rotateY(180deg)" : "" }}
        >
          <div className="frontFace absolute h-full w-full">
            <img
              onClick={handleCardFlip}
              src="/images/casetteFront.svg"
              alt="casette"
            />
            <div className="flex items-center absolute top-[25px] left-[29px] z-10 h-[40px] w-[280px] rounded-[4px] px-2 bg-[#D9d9d9] font-semibold">
              <h4 className="w-full h-full bg-transparent flex items-center">
                {publicData.title}
              </h4>
            </div>
            <img
              className="absolute top-[85px] left-[75px] size-[55px] animate-spin"
              src="/images/reel.svg"
              alt="reel"
            />
            <img
              className="absolute top-[85px] right-[78px] size-[55px] animate-spin"
              src="/images/reel.svg"
              alt="reel"
            />
            <ButtonsCasettePublic />
          </div>
          <div className="backFace absolute h-full w-full">
            <img
              onClick={handleCardFlip}
              src="/images/casetteFront.svg"
              alt="casette"
            />
            <div className="flex items-center absolute top-[25px] left-[29px] z-10 h-[40px] w-[280px] rounded-[4px] px-2 bg-[#d9d9d9] font-semibold">
              <h4 className="w-full h-full bg-transparent flex items-center">
                {publicData.to}
              </h4>
            </div>
            <div className="flex absolute top-[75px] left-[29px] z-10 h-[155px] w-[280px] rounded-[4px] px-2 bg-[#d9d9d9] font-semibold">
              <p className="textareaScroll w-full h-full bg-transparent overflow-y-auto">
                {publicData.message}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default CasettePublic;
