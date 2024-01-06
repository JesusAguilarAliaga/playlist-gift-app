import { Link } from "react-router-dom";

const NavPublic = () => {
  return (
    <nav className="sticky top-0 z-30 w-full text-[20px] flex justify-center items-center h-[69px] bg-gradient-to-r from-[rgba(61,46,149,0.35)] to-[#3D2E95]"> 
        <Link to="/">
          <h2 className="hover:text-[#A284F6]">GIFT MUSIC</h2>
        </Link>
    </nav>
  )
};
export default NavPublic;
