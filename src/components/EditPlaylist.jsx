import { useSelector } from "react-redux"
import EditSection from "./EditSection"
import Nav from "./Nav"
import DeleteModal from "./DeleteModal"

const EditPlaylist = () => {
  const deleteModal =useSelector((store) => store.deleteModal.deleteModal)

  return (
    <article className="min-h-screen w-full text-white font-urbanist font-normal">
      <Nav />
      <EditSection/>
      {deleteModal ? <DeleteModal /> : null}
    </article>
  )
}
export default EditPlaylist