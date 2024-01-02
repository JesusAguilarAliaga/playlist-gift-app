import "../styles/Casette.css";
import { useDispatch, useSelector } from "react-redux";
import { RiPencilLine } from "@remixicon/react";
import { setTitle } from "../store/slices/inputsToCreate";

const CasetteSmall = ({ isFlipped, setIsFlipped }) => {
  const distpatch = useDispatch();
  const inputTitleCasette = useSelector((store) => store.inputsToCreate.title);
  
  const handleFrontInputChange = (e) => {
    let value = e.target.value
    distpatch(setTitle(value))
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <div className="scene w-[250px] h-[190px] text-black">
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
                value={inputTitleCasette}
                className="w-full h-full bg-transparent outline-none"
                onChange={handleFrontInputChange}
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
            <img className="absolute top-[63px] left-[56px] size-[40px] animate-spin" src="/images/reel.svg" alt="reel" />
            <img className="absolute top-[63px] right-[58px] size-[40px] animate-spin" src="/images/reel.svg" alt="reel" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CasetteSmall;
