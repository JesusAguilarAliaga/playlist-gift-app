import { useState } from "react"
// import SignIn from "../pages/SignIn"
import { Link, Navigate } from "react-router-dom"

const NavUnprotected = () => {
  const [modalSignIn, setModalAccount] = useState(false)

  return (
    <nav className="w-full flex justify-between items-center px-4 h-[69px] bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] font-semibold sticky top-0"> 
      <h2>GIFT MUSIC</h2>
      <div className="flex gap-8">
        <button 
              className="w-[135px] h-[35px] rounded-[30px] border-[1px] border-[#edd641ec]
                  hover:bg-gradient-to-r  from-[#A284F6] from-[43.66%] to-[#A284F6] to-[116.16%] ">
            Playlist
        </button>
        <Link to="/login">
          <button className="w-[135px] h-[35px] rounded-[30px] border-[1px] border-[#edd641ec]
                  hover:bg-gradient-to-r  from-[#A284F6] from-[43.66%] to-[#A284F6] to-[116.16%] ">
              Sign in
          </button>
        </Link>
      </div>
    </nav>
  )
}
export default NavUnprotected