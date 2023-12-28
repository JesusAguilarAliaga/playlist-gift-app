import { useParams } from "react-router-dom"

const ArtistsInfo = () => {
  const { id } =useParams()
  console.log>(id)
  return (
    <div>ArtistsInfo</div>
  )
}
export default ArtistsInfo