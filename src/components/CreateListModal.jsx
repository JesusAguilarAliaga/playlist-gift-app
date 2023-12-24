import { useState } from "react";
import CasetteSmall from "./CasetteSmall";

const CreateListModal = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <section className="z-20 absolute p-3 flex flex-col gap-[18px] items-center top-[75px] right-0 w-[270px] rounded-lg bg-[#A284F6] border-[1px] border-[#edd641ec]">
      <CasetteSmall isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>
      <button className="mt-6 w-[136px] h-[37px] border-2 rounded-[33px]" type="button">CREAR</button>
    </section>
  )
}
export default CreateListModal