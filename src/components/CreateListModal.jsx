import { useState } from "react";
import CasetteSmall from "./CasetteSmall";
import { useSelector } from "react-redux";
import ModalTrackList from "./ModalTrackList";
import { Link } from "react-router-dom";

const CreateListModal = () => {
  const addedList =useSelector((store) => store.addedList)
  console.log(addedList)


  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <section className="z-20 absolute p-3 flex flex-col gap-[10px] items-center top-[75px] right-0 w-[270px] rounded-lg bg-[#A284F6] border-[1px] border-[#edd641ec]">
      <CasetteSmall isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
      <ul className="w-full flex flex-col gap-[10px]">
        {addedList.map((track) => (
          <ModalTrackList key={track.id} track={track}/>
        ))}
      </ul>
      <Link to={"/create-playlist"}>
        <button  className="mt-4 w-[136px] h-[37px] border-2 rounded-[33px]" type="button">CREAR</button>
      </Link>
    </section>
  )
}
export default CreateListModal