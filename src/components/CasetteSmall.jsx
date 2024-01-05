import "../styles/Casette.css";
import { useDispatch, useSelector } from "react-redux";
import { RiPencilLine } from "@remixicon/react";
import { setMessage, setTitle, setTo } from "../store/slices/inputsToCreate";
import { motion } from "framer-motion";

const CasetteSmall = ({ isFlipped, setIsFlipped }) => {
  const distpatch = useDispatch();
  const { title, to, message } = useSelector((store) => store.inputsToCreate);
  
  const handleTitleInputChange = (e) => {
    let value = e.target.value
    distpatch(setTitle(value))
  };

  const handleNameInputChange = (e) => {
    let value = e.target.value
    distpatch(setTo(value))
  }

  const handleMessageInputChange = (e) => {
    let value = e.target.value
    distpatch(setMessage(value))
  }

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <motion.div layoutId="casette" className="scene w-[250px] h-[190px] text-black">
        <div
          className="casette select-none relative w-full h-full"
          style={{ transform: isFlipped ? "rotateY(180deg)" : "" }}
        >
          <div className="frontFace absolute h-full w-full">
            <img
              onClick={handleCardFlip}
              src="/images/casetteFront.svg"
              alt="casette"
            />
            <div className="flex items-center absolute top-5 left-6 z-10 h-[32px] w-[200px] rounded-sm px-2 bg-[#D9d9d9] font-semibold">
              <input
                type="text"
                placeholder="TITULO"
                required
                value={title}
                className="w-full h-full bg-transparent outline-none"
                onChange={handleTitleInputChange}
              />
              <RiPencilLine/>
            </div>
            <img className="absolute top-[63px] left-[56px] size-[40px] animate-spin" src="/images/reel.svg" alt="reel" />
            <img className="absolute top-[63px] right-[58px] size-[40px] animate-spin" src="/images/reel.svg" alt="reel" />
          </div>
          <div className="backFace absolute h-full w-full">
          <img
              onClick={handleCardFlip}
              src="/images/casetteFront.svg"
              alt="casette"
            />
            <div className="flex items-center absolute top-4 left-[22px] z-10 h-[32px] w-[205px] rounded-sm px-2 bg-[#D9d9d9] font-semibold">
              <input
                type="text"
                required
                placeholder="PARA:"
                value={to}
                className="w-full h-full bg-transparent outline-none"
                onChange={handleNameInputChange}
              />
              <RiPencilLine/>
            </div>
            <div className="flex absolute top-[55px] left-[22px] z-10 h-[112px] w-[205px] rounded-sm px-2 bg-[#D9d9d9] font-semibold">
              <textarea
                type="text"
                placeholder="MENSAJE"
                required
                value={message}
                className="textareaScroll resize-none w-full h-full bg-transparent outline-none pr-2"
                onChange={handleMessageInputChange}
              />
              <RiPencilLine className=""/>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CasetteSmall;
