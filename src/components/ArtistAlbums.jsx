import AlbumsSlider from "./AlbumsSlider"

const ArtistAlbums = ({ albums }) => {
  return (
    <section className="w-full mt-10 mb-16 flex flex-col gap-y-4">
      <h3 className="font-semibold text-[13px]">DISCOS DEL ARTISTA</h3>
      <AlbumsSlider albums={albums} />
    </section>
  )
}
export default ArtistAlbums