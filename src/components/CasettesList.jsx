import { useSelector } from "react-redux"
import CasetteForList from "./CasetteForList"
import { RiArrowLeftLine, RiSearchLine } from "@remixicon/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CasettesList = () => {
  const navigate = useNavigate()
  const [value, setValue] = useState("")
  const { fetchCrud: casettes } = useSelector((store) => store.fetchCrud)

  const onSubmit = (e) => {
    let value = e.target.value
    setValue(value)
  }
  
  const filterCasettes = casettes.filter((casette) => casette.title.toLowerCase().includes(value.toLowerCase()))

  return (
    <section className="relative max-w-[570px] mx-auto pt-20 pb-10 px-16 mt-[65px] flex flex-col gap-[15px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      <button onClick={() => navigate(-1)} className="absolute top-4 left-4 px-[10px] h-[32px] border-2 border-white/10 rounded-[33px] flex items-center hover:bg-[#A284F6] hover:border-transparent" type="button"><RiArrowLeftLine className="size-[18px]"/> Atras</button>
      <div className="relative w-full h-[55px] px-5 items-center flex justify-between text bg-white/10 rounded-lg">
        <RiSearchLine className="text-[20px]"></RiSearchLine>
        <input onChange={onSubmit} className="flex-1 bg-transparent px-4 outline-none font-light" name="valueSearch" type="text" placeholder="Buscar" autoComplete="off"/>
      </div>
      <div  className="relative w-full" style={{ height: `${250 + casettes.length * 70}px` }}>
        {filterCasettes.map((casette, index) => (
          <CasetteForList key={casette.id} casetteInfo={casette} index={index}/>
        ))}
      </div>
    </section>
  )
}
export default CasettesList