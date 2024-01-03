import { useState } from "react";
import CasettePublic from "./CasettePublic";
import TrackListPublic from "./TrackListPublic";
import Loader from "../Loader";
import { RiArrowLeftRightLine } from "@remixicon/react";
import { motion } from "framer-motion";
import { variants } from "../../utils/variants";

const animation = variants.modal

const SectionPublic = ({ publicData, loading }) => {
  const [changeSide, setChangeSide] = useState(false);

  return (
    <motion.section layout className="relative max-w-[570px] mx-auto py-10 px-16 mt-[65px] flex flex-col gap-[25px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      {loading ?
        <Loader />
      : (
        <>
          <CasettePublic changeSide={changeSide} setChangeSide={setChangeSide} publicData={publicData} />
          <motion.button
            variants={animation} initial="initial" animate="animate"
            layoutId="buttonChangeSidePublic"
            className="flex items-center justify-around mb-4 px-3 gap-2 w-[136px] h-[37px] border-2 rounded-[33px]"
            onClick={() => setChangeSide(!changeSide)}
          >
            {changeSide ? "LADO A" : "LADO B"}
            <RiArrowLeftRightLine/>
          </motion.button>
          <ul className="w-full flex flex-col gap-[20px]">
            {publicData.tracks?.map((track, index) => (
              <TrackListPublic key={track.id} track={track} index={index}/>
            ))}
          </ul>
        </>
      )}
    </motion.section>
  );
};
export default SectionPublic;
