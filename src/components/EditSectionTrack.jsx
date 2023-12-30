import { useState } from "react";
import { formatArtists } from "../utils/FormatArtists";
import PopUpHover from "./PopUpHover";
import { useDispatch } from "react-redux";
import { removeToList } from "../store/slices/addedList";
import { Link } from "react-router-dom";
import { RiIndeterminateCircleLine, RiPlayFill } from "@remixicon/react";

const EditSectionTrack = ({track}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [textPopup, setTextPopup] = useState("");
  const distpatch = useDispatch();

  const handleAddTrack = () => {
    distpatch(removeToList(track));
  };

  const onMouseEnter = (text) => {
    setTextPopup(text);
    setShowPopup(true);
  };

  const artistsName = formatArtists(track.artists).slice(0, 2)
  const lastName = formatArtists(track.artists).slice(2)

  return (
    <li className="relative w-full h-[60px] flex gap-5 justify-between items-center hover:bg-[#A284F6]/10 rounded-lg">
      <img
        className="size-[60px] rounded-lg"
        src={track.album.images[2]?.url}
        alt="img"
      />
      <div className="flex-1">
        <h5 className="text-[15px] max-w-[270px] font-semibold truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px]">
          {track.name}
        </h5>
        <p className="text-[13px] max-w-[270px] opacity-40 truncate overflow-hidden max-sm:max-w-[140px] max-sm:w-[140px] ">
          {artistsName.map((artist, index) => (
            <Link to={`/artists/${artist.id}`} key={artist.name}><span className="hover:underline">{index > 0 ? `, ${artist.name}` : artist.name}</span></Link>
          ))}
          <span>{lastName[0]?.name !== undefined ? `, ${lastName[0]?.name}` : ""}</span>
        </p>
      </div>
      <RiPlayFill
        className="ri-play-fill text-[22px] relative"
        onMouseEnter={() => onMouseEnter("Reproducir")}
        onMouseLeave={() => setShowPopup(false)}
      />
      <RiIndeterminateCircleLine
        className="ri-indeterminate-circle-line text-[22px] mr-2"
        onClick={handleAddTrack}
        onMouseEnter={() => onMouseEnter("Quitar de la lista")}
        onMouseLeave={() => setShowPopup(false)}
      />
      {showPopup && <PopUpHover popupText={textPopup} />}
    </li>
  );
};
export default EditSectionTrack;
