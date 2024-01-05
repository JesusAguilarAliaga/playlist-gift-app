import { useEffect, useState } from "react";
import { axiosMusic, axiosPlaylist } from "../utils/configAxios";
import MainTrackList from "./MainTrackList";
import SearchSetting from "./SearchSetting";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import { fetchGetAll } from "../store/slices/fetchCrud";
import { RiCloseLine, RiListSettingsFill, RiSearchLine,} from "@remixicon/react";
import { AnimatePresence, motion } from "framer-motion";


const MainList = () => {
  const [tracksData, setTracksData] = useState([]);
  const [totalTracks, setTotalTracks] = useState("10");
  const [showSettings, setShowSettings] = useState(false);
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const tokenUser = useSelector((store) => store.tokenUser.tokenUser);

  useEffect(() => {
    axiosPlaylist
    // axiosMusic
      .get(
        "/api/tracks/recommendations?seed_genres=latino,reggaeton&limit=20",
        {
          headers: {
            Authorization: `JWT ${tokenUser.token}`,
          },
        }
      )
      .then(({ data }) => setTracksData(data.tracks))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));

    dispatch(
      fetchGetAll({
        headers: {
          Authorization: `JWT ${tokenUser.token}`,
        },
      })
    );
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if(e.target.valueSearch.value === ""){
      return
    }
    setLoader(true);
    let value = e.target.valueSearch.value;

    //axiosPlaylist
    axiosMusic
      .get(`/api/tracks?limit=${totalTracks}&q=${value}`, {
        headers: {
          Authorization: `JWT ${tokenUser.token}`,
        },
      })
      .then(({ data }) => setTracksData(data.tracks.items))
      .catch((err) => console.log(err))
      .finally(() => setLoader(false));
  };

  return (
    <motion.section layout className="max-w-[570px] mx-auto py-10 px-16 mt-[65px] flex flex-col gap-[50px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      <motion.form
        layoutId="inputSearch"
        onSubmit={onSubmit}
        className="relative w-full h-[55px] px-5 items-center flex justify-between text bg-white/10 rounded-lg"
      >
        <RiSearchLine className="text-[20px]"></RiSearchLine>
        <input
          className="flex-1 bg-transparent px-4 outline-none font-light"
          name="valueSearch"
          type="text"
          placeholder="Buscar"
          autoComplete="off"
        />
        {showSettings ? (
            <RiCloseLine
            onClick={() => setShowSettings(!showSettings)}
            />
        ) : (
            <RiListSettingsFill
            className="select-none"
            onClick={() => setShowSettings(!showSettings)}
            />
        )}
        <AnimatePresence>
        {showSettings ? (
          <SearchSetting
            className="select-none"
            totalTracks={totalTracks}
            setTotalTracks={setTotalTracks}
            setShowSettings={setShowSettings}
          />
        ) : null}
        </AnimatePresence>
      </motion.form>
      {loader ? (
        <Loader/>
      ) : (
        <ul className="w-full flex flex-col gap-[20px]">
          {tracksData.map((track, index) => (
            <MainTrackList key={track.id} track={track} index={index}/>
          ))}
        </ul>
      )}
    </motion.section>
  );
};
export default MainList;
