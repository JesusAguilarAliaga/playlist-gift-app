import { useState } from "react";
import "../styles/Casette.css";

const CasetteSmall = ({ isFlipped, setIsFlipped }) => {
  const [frontInput, setFrontInput] = useState("");
  const [backInput, setBackInput] = useState("");

  const handleFrontInputChange = (event) => {
    setFrontInput(event.target.value);
  };

  const handleBackInputChange = (event) => {
    setBackInput(event.target.value);
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
              alt=""
            />
            <div className="flex items-center absolute top-5 left-6 z-10 h-[32px] w-[200px] rounded-sm px-2 bg-white font-semibold">
              <input
                type="text"
                placeholder="TITULO"
                value={frontInput}
                className="w-full h-full bg-transparent outline-none"
                onChange={handleFrontInputChange}
              />
              <i className="ri-pencil-line text-[20px]"></i>
            </div>
            <img className="absolute top-[63px] left-[56px] size-[40px] animate-spin" src="/images/reel.svg" alt="" />
            <img className="absolute top-[63px] right-[58px] size-[40px] animate-spin" src="/images/reel.svg" alt="" />
          </div>
          <div className="backFace absolute h-full w-full">
            <img
              onClick={handleCardFlip}
              src="/images/casetteFront.svg"
              alt=""
            />
            <img className="absolute top-[63px] left-[56px] size-[40px] animate-spin" src="/images/reel.svg" alt="" />
            <img className="absolute top-[63px] right-[58px] size-[40px] animate-spin" src="/images/reel.svg" alt="" />
            {/* <div className="flex flex-col gap-4 items-center absolute top-5 left-6 z-10 h-[150px] w-[200px] rounded-sm font-semibold">
              <input
                type="text"
                placeholder="PARA:"
                value={backInput}
                className="w-full h-[32px] bg-transparent outline-none  bg-white rounded-sm"
                onChange={handleFrontInputChange}
              />
              <input
                type="text"
                placeholder="Texto"
                value=""
                className="w-full h-[90px] bg-transparent outline-none  bg-white rounded-sm"
                onChange={handleFrontInputChange}
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CasetteSmall;
