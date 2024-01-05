import { useState } from "react";
import { formatArtists } from "../utils/FormatArtists";
import PopUpHover from "./PopUpHover";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RiIndeterminateCircleLine, RiPlayFill } from "@remixicon/react";
import { motion } from "framer-motion";
import { variants } from "../utils/variants";
import { toastWarning } from "../utils/notifications";
import { resetMusic, setArtistsMusic, setExternalUrl, setMusicPlay, setNameMusic } from "../store/slices/musicPlay";
import { fetchDeleteTrack } from "../store/slices/fetchCrud";

const trackCasetteAnimate = variants.items

const EditSectionTrack = ({track, index, idPlaylist}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [textPopup, setTextPopup] = useState("");
  const dispatch = useDispatch();

  const handleRemoveTrack = () => {
    dispatch(fetchDeleteTrack(track.id, idPlaylist))
  };

  const onMouseEnter = (text) => {
    setTextPopup(text);
    setShowPopup(true);
  };

  const handlePlay = () => {
    if(track.preview_url === null){
      toastWarning("Ups, parece que esta canción no tiene preview")
      dispatch(resetMusic())
      return
    }
    dispatch(setMusicPlay(track.preview_url))
    dispatch(setNameMusic(track.name))
    dispatch(setArtistsMusic(track.artists[0].name))
    dispatch(setExternalUrl(track.external_urls.spotify))
  }

  const artistsName = formatArtists(track.artists).slice(0, 2)
  const lastName = formatArtists(track.artists).slice(2)

  return (
    <motion.li layoutId={track.id} variants={trackCasetteAnimate} initial="hidden" animate="visible" exit="exit" custom={index} className="relative w-full h-[60px] flex gap-5 justify-between items-center hover:bg-[#A284F6]/10 rounded-lg">
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
        onClick={handlePlay}
      />
      <RiIndeterminateCircleLine
        className="ri-indeterminate-circle-line text-[22px] mr-2"
        onClick={handleRemoveTrack}
        onMouseEnter={() => onMouseEnter("Quitar de la lista")}
        onMouseLeave={() => setShowPopup(false)}
      />
      {showPopup && <PopUpHover popupText={textPopup} />}
    </motion.li>
  );
};
export default EditSectionTrack;
