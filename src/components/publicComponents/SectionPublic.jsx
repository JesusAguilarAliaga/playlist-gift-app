import { useState } from "react";
import CasettePublic from "./CasettePublic";
import TrackListPublic from "./TrackListPublic";
import Loader from "../Loader";

const SectionPublic = ({ publicData, loading }) => {
  const [changeSide, setChangeSide] = useState(false);

  return (
    <section className="relative max-w-[570px] mx-auto py-10 px-16 mt-[65px] flex flex-col gap-[25px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <CasettePublic changeSide={changeSide} publicData={publicData} />
          <button
            className="flex items-center justify-around mb-4 px-3 gap-2 w-[136px] h-[37px] border-2 rounded-[33px]"
            onClick={() => setChangeSide(!changeSide)}
          >
            {changeSide ? "LADO A" : "LADO B"}
            <i className="ri-arrow-left-right-line text-[20px]"></i>
          </button>
          <ul className="w-full flex flex-col gap-[20px]">
            {publicData.tracks?.map((track) => (
              <TrackListPublic key={track.id} track={track} />
            ))}
          </ul>
        </>
      )}
    </section>
  );
};
export default SectionPublic;
