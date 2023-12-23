const SearchSetting = ({totalTracks, setTotalTracks}) => {
  return (
    <div className="z-20 absolute w-[180px] h-[120px] top-[50px] right-[10px] bg-[#A284F6] text-white px-3 py-1 rounded-[4px] flex flex-col justify-around items-center">
      <p className="text-center w-full select-none">Canciones mostradas por busqueda</p>
      <select className="w-[50%] bg-white/20 px-2 py-1 outline-none text-center" name="" id="" value={totalTracks} onChange={(e) => setTotalTracks(e.target.value)}>
        <option className="text-black" value="10">10</option>
        <option className="text-black" value="20">20</option>
        <option className="text-black" value="30">30</option>
      </select>
    </div>
  )
}
export default SearchSetting