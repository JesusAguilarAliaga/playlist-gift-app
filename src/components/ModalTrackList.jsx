import { formatArtists } from "../utils/FormatArtists";
import { useDispatch } from "react-redux";
import { removeToList } from "../store/slices/addedList";
import { Link } from "react-router-dom";
import { RiIndeterminateCircleLine } from "@remixicon/react";
import { motion } from "framer-motion";

const ModalTrackList = ({ track }) => {
  const distpatch = useDispatch();

  const handleAddTrack = () => {
    distpatch(removeToList(track));
  };

  const artistsName = formatArtists(track.artists).slice(0, 2)
  const lastName = formatArtists(track.artists).slice(2)

  return (
    <motion.li layoutId={track.id} className="relative w-full h-[60px] flex gap-3 justify-between items-center hover:bg-white/10 rounded-lg">
      <Link to={`/tracks/${track.id}`}><img
        className="size-[60px] rounded-lg"
        src={track.album.images[2]?.url}
        alt="img"
      /></Link>
      <div className="flex-1">
        <Link to={`/tracks/${track.id}`}><h5 className="text-[15px] max-w-[135px] w-[130px] font-semibold truncate overflow-hidden hover:underline">{track.name}</h5></Link>
        <p className="text-[13px] max-w-[130px] w-[130px] opacity-40 truncate overflow-hidden">
          {artistsName.map((artist, index) => (
            <Link to={`/artists/${artist.id}`} key={artist.name}><span className="hover:underline">{index > 0 ? `, ${artist.name}` : artist.name}</span></Link>
          ))}
          <span>{lastName[0]?.name !== undefined ? `, ${lastName[0]?.name}` : ""}</span>
        </p>
      </div>
      <RiIndeterminateCircleLine
        className="ri-indeterminate-circle-line text-[22px] mr-2 hover:text-[#f6849b]"
        onClick={handleAddTrack}
      ></RiIndeterminateCircleLine>
    </motion.li>
  );
};
export default ModalTrackList;
