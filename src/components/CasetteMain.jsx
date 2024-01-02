import "../styles/Casette.css";
import { useDispatch, useSelector } from "react-redux";
import { setDataInput } from "../store/slices/inputTitleCasette";
import { setNameCasette } from "../store/slices/inputNameCasette";
import { setMessageCasette } from "../store/slices/inputMessageCasette";
import ButtonsCasette from "./ButtonsCasette";
import { RiPencilLine } from "@remixicon/react";


const CasetteMain = ({ changeSide, setChangeSide, id }) => {
  const inputNameCasette =useSelector((store) => store.inputNameCasette)
  const inputTitleCasette = useSelector((store) => store.inputTitleCasette)
  const inputMessageCasette = useSelector((store) => store.inputMessageCasette)
  const dispatch = useDispatch()

  const handleTitleInputChange = (e) => {
    let value = e.target.value
    dispatch(setDataInput(value))
  };

  const handleNameInputChange = (e) => {
    let value = e.target.value
    dispatch(setNameCasette(value))
  };

  const handleMessageInputChange = (e) => {
    let value = e.target.value
    dispatch(setMessageCasette(value))
  }

  const handleCardFlip = () => {
    setChangeSide(!changeSide);
  };

  return (
    <>
      <div className="scene w-[340px] h-[250px] text-black">
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
              <input
                type="text"
                placeholder="TITULO"
                value={inputTitleCasette}
                className="w-full h-full bg-transparent outline-none"
                onChange={handleTitleInputChange}
              />
              <RiPencilLine/>
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
            <ButtonsCasette id={id}/>
          </div>
          <div className="backFace absolute h-full w-full">
            <img
              onClick={handleCardFlip}
              src="/images/casetteFront.svg"
              alt="casette"
            />
            <div className="flex items-center absolute top-[25px] left-[29px] z-10 h-[40px] w-[280px] rounded-[4px] px-2 bg-[#d9d9d9] font-semibold">
              <input
                type="text"
                placeholder="PARA:"
                value={inputNameCasette}
                className="w-full h-full bg-transparent outline-none"
                onChange={handleNameInputChange}
              />
              <RiPencilLine/>
            </div>
            <div className="flex absolute top-[75px] left-[29px] z-10 h-[155px] w-[280px] rounded-[4px] px-2 bg-[#d9d9d9] font-semibold">
              <textarea
                type="text"
                placeholder="MENSAJE"
                value={inputMessageCasette}
                className="textareaScroll resize-none w-full h-full bg-transparent outline-none pr-2"
                onChange={handleMessageInputChange}
              />
              <RiPencilLine/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CasetteMain;
