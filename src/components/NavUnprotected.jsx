import { Link} from "react-router-dom"

const NavUnprotected = () => {

  return (
    <nav className="absolute top-0 z-30 w-full flex justify-center px-20 h-[69px] bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95] font-semibold max-lg:px-10 max-sm:px-4 backdrop-blur-3xl"> 
      <div className="w-full h-full max-w-[1440px] flex justify-between items-center">
      <h2>GIFT MUSIC</h2>
        <Link to="/login">
          <button className="w-[100px] h-[35px] rounded-[30px] border-[1px] border-[#edd641ec]
                  hover:bg-gradient-to-r  from-[#A284F6] from-[43.66%] to-[#A284F6] to-[116.16%] hover:border-transparent">
              Sign in
          </button>
        </Link>
      </div>
    </nav>
  )
}
export default NavUnprotected