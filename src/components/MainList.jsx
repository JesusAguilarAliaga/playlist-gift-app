import { useEffect, useState } from "react"
import { axiosMusic } from "../utils/configAxios"
import MainTrackList from "./MainTrackList"

/* {
  name: "test",
  email: "Jesus@test.com",
  password: "test12345"
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlMWNlZDFlLWE0ZjctNGE4Yi05MWIyLTFlN2RmOTZhOGIwNiIsImVtYWlsIjoiSmVzdXNAdGVzdC5jb20iLCJuYW1lIjoidGVzdCIsImlhdCI6MTcwMzI3MzYyMH0.VcK7rtAoj0yfydvnGRr1Y2aHimR1LeCFCeYdVfNCric"
} */

//token de prueba
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRlMWNlZDFlLWE0ZjctNGE4Yi05MWIyLTFlN2RmOTZhOGIwNiIsImVtYWlsIjoiSmVzdXNAdGVzdC5jb20iLCJuYW1lIjoidGVzdCIsImlhdCI6MTcwMzI3MzYyMH0.VcK7rtAoj0yfydvnGRr1Y2aHimR1LeCFCeYdVfNCric"



const MainList = () => {
  const [tracksRecommendations, setTracksRecommendations] = useState([])
  
  console.log(tracksRecommendations)
  

  useEffect(() => {
    //hacer la peticion axios con tu token, ya que este token fue creado en mi base de datos

    /* axiosMusic.get("/api/tracks/recommendations?seed_genres=reggaeton", {
      headers: {
        Authorization: `JWT ${token}`
      } 
    })
    .then(({ data }) => setTracksRecommendations(data.tracks))
    .catch(err => console.log(err)) */
  }, [])

  
  return (
    <section className="max-w-[570px] mx-auto py-10 px-16 mt-28 flex flex-col gap-[50px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      <form action="" className="w-full h-[55px] px-5 items-center flex justify-between text bg-white/10 rounded-lg">
        <i className="ri-search-line  text-[20px]"></i>
        <input className="flex-1 bg-transparent px-4 outline-none font-light" type="text" placeholder="Buscar"/>
        <i className="ri-list-settings-fill  text-[20px]"></i>
      </form>
      <ul className="w-full flex flex-col gap-[20px]">
        {tracksRecommendations.map((track) => (
          <MainTrackList key={track.id} track={track}/>
        ))}
      </ul>
    </section>
  )
}
export default MainList