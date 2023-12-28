import { formatArtists } from "../utils/FormatArtists"

const InfoTrack = ({ trackInfo }) => {
  return (
    <section className="w-full h-[247px] flex gap-9 max-sm:flex-col max-sm:h-auto max-sm:items-center max-sm:gap-y-4">
      <img className="size-[247px] rounded-[10px]" src={trackInfo.album.images[1].url} alt="" />
      <div className="text-[15px] w-full h-full flex flex-col justify-center gap-y-3 max-sm:items-center">
        <h4 className="font-semibold">{trackInfo?.name}</h4>
        <h4 className="text-[14px] text-white/50">{formatArtists(trackInfo.artists)}</h4>
        <p >Disco: <span className="text-[14px] text-white/50">{trackInfo.album.name}</span></p>
        <p >Año de salida: <span className="text-[14px] text-white/50">{trackInfo.album.release_date.split("-")[0]}</span></p>
      </div>
    </section>
  )
}
export default InfoTrack