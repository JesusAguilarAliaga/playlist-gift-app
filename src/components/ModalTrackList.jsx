import { useState } from "react";
import PopUpHover from "./PopUpHover";
import { formatArtists } from "../utils/FormatArtists";
import { useDispatch } from "react-redux";
import { removeToList } from "../store/slices/addedList";

const ModalTrackList = ({ track }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [textPopup, setTextPopup] = useState("");
  const distpatch = useDispatch();

  //console.log(track)

  const handleAddTrack = () => {
    distpatch(removeToList(track));
  };

  const onMouseEnter = (text) => {
    setTextPopup(text);
    setShowPopup(true);
  };

  return (
    <li className="relative w-full h-[60px] flex gap-3 justify-between items-center hover:bg-white/10 rounded-lg">
      <img
        className="size-[60px] rounded-lg"
        src={track.album.images[2]?.url}
        alt="img"
      />
      <div className="flex-1">
        <h5 className="text-[15px] max-w-[135px] w-[135px] font-semibold truncate overflow-hidden">{track.name}</h5>
        <p className="text-[13px] max-w-[135px] w-[135px] opacity-40 truncate overflow-hidden">{formatArtists(track.artists)}</p>
      </div>
      <i
        className="ri-indeterminate-circle-line text-[22px] mr-2"
        onClick={handleAddTrack}
        onMouseEnter={() => onMouseEnter("Quitar de lista")}
        onMouseLeave={() => setShowPopup(false)}
      ></i>
      {showPopup && <PopUpHover popupText={textPopup} />}
    </li>
  );
};
export default ModalTrackList;
