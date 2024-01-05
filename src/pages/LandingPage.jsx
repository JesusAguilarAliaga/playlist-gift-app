import { useDispatch} from "react-redux";
import NavUnprotected from "../components/NavUnprotected"
import { Navigate } from "react-router-dom";
import { setTokenUser } from "../store/slices/tokenUserSlice";

const LandingPage = () => {
  const dispatch = useDispatch()

  const data = window.localStorage.getItem('PLAYLIST_USER')
  if (data) {
    dispatch(setTokenUser(JSON.parse(data)));
    return <Navigate to="/home" />
  }

  return (
    <main className=" bg-black h-screen w-full text-white font-urbanist font-normal">      
      <NavUnprotected/>
      <img src="./images/landing3.jpg" alt="" 
          className="z-0 w-full h-full object-cover object-center
              max-sm:overflow-hidden " />
      <section className="">        
        <div className=" w-full flex flex-col items-center justify-center">
          <p className="neon-text2 absolute top-1/2 rigth-[4px] text-center font-bold text-4xl text-[#E7D04E] uppercase
              max-sm:text-xl">
            Create a playlist for your friends
          </p>
        </div>
      </section>
    </main>
  )
}
export default LandingPage