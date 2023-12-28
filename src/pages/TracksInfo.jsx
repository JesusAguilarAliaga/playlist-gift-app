import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { axiosMusic, axiosPlaylist } from "../utils/configAxios"
import { useSelector } from "react-redux"
import Nav from "../components/Nav"
import InfoTrack from "../components/InfoTrack"
import Loader from "../components/Loader"
import MainTrackList from "../components/MainTrackList"

const TracksInfo = () => {
  const [trackInfo, setTrackInfo] = useState({})
  const [loader, setLoader] = useState(true)
  const token = useSelector((store) => store.tokenUser.token)
  const {id} = useParams()

  console.log(trackInfo)

  useEffect(() => {
    setLoader(true)
    axiosPlaylist.get(`api/tracks/${id}/`,
    {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(({data}) => setTrackInfo(data))
    .catch(err => console.log(err))
    .finally(() => setLoader(false))
  }, [ id ])

  return (
    <main className="min-h-screen w-full text-white font-urbanist font-normal">
      <Nav />
      <article className="relative max-w-[570px] mx-auto pt-[70px] pb-8 px-[34px] mt-[65px] flex flex-col items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
        <Link to={"/home"}>
          <button className="absolute top-3 left-4 px-3 h-[37px] border-2 rounded-[33px] text-center hover:bg-[#A284F6] hover:border-transparent" type="button"><i className="ri-arrow-left-line"></i> Atras</button>
        </Link>
        {loader ? <Loader /> : 
        (<>
          <InfoTrack trackInfo={trackInfo} />
          <h3 className="w-full text-left font-semibold text-[13px] mt-[45px] mb-[16px]">RECOMENDACIONES</h3>
          <ul className="w-full flex flex-col gap-[20px]">
          {trackInfo.relatedSongs.map((track) => (
            <MainTrackList key={track.id} track={track} />
          ))}
          </ul>

        </>)}
      </article>
    </main>
  )
}
export default TracksInfo