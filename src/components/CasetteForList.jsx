import { RiPencilLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const CasetteForList = ({ casetteInfo, index }) => {
  return (
    <>
      <div
        className="left-[calc(50%-170px)] w-[340px] h-[250px] text-black absolute top-10"
        style={{ transform: `translateY(${index * 70}px)`}}
      >
        <Link to={`/playlist/${casetteInfo.id}`}>
        <div className="frontFace absolute h-full w-full select-none hover:-translate-y-10 transition-all">
          <img src="/images/casetteFront.svg" alt="casette" />
          <div className="flex items-center absolute top-[25px] left-[29px] z-10 h-[40px] w-[280px] rounded-[4px] px-2 bg-[#D9d9d9] font-semibold">
            <h4 className="w-full h-full bg-transparent flex items-center">
              {casetteInfo.title}
            </h4>
            <RiPencilLine />
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
        </div>
        </Link>
      </div>
    </>
  );
};
export default CasetteForList;
