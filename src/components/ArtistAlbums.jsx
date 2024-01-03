import { variants } from "../utils/variants"
import AlbumsSlider from "./AlbumsSlider"
import { motion } from "framer-motion"

const animation = variants.modal

const ArtistAlbums = ({ albums }) => {
  return (
    <motion.section layoutId="artistAlbums" variants={animation} initial="initial" animate="animate" className="w-full mt-10 mb-16 flex flex-col gap-y-4">
      <h3 className="font-semibold text-[13px]">DISCOS DEL ARTISTA</h3>
      <AlbumsSlider albums={albums} />
    </motion.section>
  )
}
export default ArtistAlbums