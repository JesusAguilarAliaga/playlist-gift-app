import { Link } from "react-router-dom"

const PopUpAccount = () => {
  return (
    <section className="absolute -left-[40px] top-[60px] w-[200px] h-[90px] flex flex-col gap-2 justify-center items-start px-4 bg-gradient-to-r from-[#886AE2] from-[43.66%] to-[#A284F6] to-[116.16%] rounded-md border-[1px] border-[#edd641ec]">
      <Link to={"/playlistID"}>
        <button className=""><i className="ri-play-fill"></i> MIS GRABACIONES</button>
      </Link>
      <button className=""><i className="ri-login-box-line"></i> CERRAR SESION</button>
    </section>
  )
}
export default PopUpAccount