import MainTrackList from "./MainTrackList"

const MainList = () => {
  return (
    <section className="max-w-[570px] mx-auto py-10 px-16 mt-28 flex flex-col gap-[50px] items-center rounded-lg bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] max-sm:mx-3 max-sm:px-4">
      <form action="" className="w-full h-[55px] px-5 items-center flex justify-between text bg-white/10 rounded-lg">
        <i className="ri-search-line  text-[20px]"></i>
        <input className="flex-1 bg-transparent px-4 outline-none font-light" type="text" placeholder="Buscar"/>
        <i className="ri-list-settings-fill  text-[20px]"></i>
      </form>
      <ul className="w-full flex flex-col gap-[20px]">
        <MainTrackList />
        <MainTrackList />
        <MainTrackList />
        <MainTrackList />
      </ul>
    </section>
  )
}
export default MainList