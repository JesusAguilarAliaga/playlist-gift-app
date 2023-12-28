import { useState } from "react"
import CasetteMain from "./CasetteMain"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import EditSectionTrack from "./EditSectionTrack"

const EditSection = () => {
  const [changeSide, setChangeSide] = useState(false)

  const addedList = useSelector((store) => store.addedList)

  return (
    <section className="relative max-w-[570px] mx-auto py-10 px-16 mt-[65px] flex flex-col gap-[25px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      <Link to={"/home"}>
        <button className="absolute top-4 left-4 px-3 h-[37px] border-2 rounded-[33px] text-center hover:bg-[#A284F6] hover:border-transparent" type="button"><i className="ri-arrow-left-line"></i> Atras</button>
      </Link>
      <CasetteMain changeSide={changeSide} setChangeSide={setChangeSide} />
      <button className=" flex  items-center justify-around mb-4 px-3 gap-2 w-[136px] h-[37px] border-2 rounded-[33px]" onClick={() => setChangeSide(!changeSide)}>{changeSide ? "LADO A" : "LADO B"}<i className="ri-arrow-left-right-line text-[20px]"></i></button>
      <ul className="w-full flex flex-col gap-[20px]">
      {addedList.map((track) => (
        <EditSectionTrack key={track.id} track={track} />
      ))}
    </ul>
    </section>
    
  )
}
export default EditSection