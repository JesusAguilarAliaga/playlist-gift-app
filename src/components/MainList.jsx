import { useEffect, useState } from "react"
import { axiosPlaylist } from "../utils/configAxios"
import MainTrackList from "./MainTrackList"
import SearchSetting from "./SearchSetting"
import { useSelector } from "react-redux"

/* {
  Usuario de Jesus
  enero@gmail.com
  enero12345
} */


const MainList = () => {
  const [tracksData, setTracksData] = useState([])
  const [totalTracks, setTotalTracks] = useState("10")
  const [showSettings, setShowSettings] = useState(false)
  
  const tokenUser = useSelector((store) => store.tokenUser)
  console.log(tokenUser.token)
  

  useEffect(() => {
    axiosPlaylist.get("/api/tracks/recommendations?seed_genres=reggaeton", {
      headers: {
        Authorization: `JWT ${tokenUser.token}`
      }
    })
    .then(({ data }) => setTracksData(data.tracks))
    .catch(err => console.log(err))
  }, [])


  const onSubmit = (e) => {
    e.preventDefault()
    let value = e.target.valueSearch.value

    axiosPlaylist.get(`/api/tracks?limit=${totalTracks}&q=${value}`, {
      headers: {
        Authorization: `JWT ${tokenUser.token}`
      }
    })
    .then(({ data }) => setTracksData(data.tracks.items))
    .catch(err => console.log(err))
  }

  
  return (
    <section className="max-w-[570px] mx-auto py-10 px-16 mt-28 flex flex-col gap-[50px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      <form onSubmit={onSubmit}className="relative w-full h-[55px] px-5 items-center flex justify-between text bg-white/10 rounded-lg">
        <i className="ri-search-line  text-[20px]"></i>
        <input className="flex-1 bg-transparent px-4 outline-none font-light" name="valueSearch" type="text" placeholder="Buscar"/>
        <i onClick={() => setShowSettings(!showSettings)} className={`${showSettings ? "ri-close-line" : "ri-list-settings-fill"}  text-[20px]`}></i>
        {showSettings ? <SearchSetting totalTracks={totalTracks} setTotalTracks={setTotalTracks}/> : null}
      </form>
      <ul className="w-full flex flex-col gap-[20px]">
        {tracksData.map((track) => (
          <MainTrackList key={track.id} track={track}/>
        ))}
      </ul>
    </section>
  )
}
export default MainList