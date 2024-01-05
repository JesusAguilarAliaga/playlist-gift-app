import { Link, useNavigate } from "react-router-dom";
import ContainerAuth from "../components/layouts/ContainerAuth";
import { login } from "../store/slices/tokenUserSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";

const SignIn = () => {
  const loader = useSelector((store) => store.tokenUser.loader);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    dispatch(login(data, navigateTo));
  };

  return (
    <ContainerAuth>
      <aside className="">
        <img
          src="/images/login-user.png"
          alt=""
          className="w-[400px] h-[80%] object-cover rounded-2xl
                max-sm:hidden"
        />
      </aside>
      <main className="flex flex-col gap-4 h-[400px] justify-center">
        <h2 className="uppercase text-[40px] font-semibold">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 justify-center items-center"
        >
          <div className="grid gap-8 w-[350px]">
            <div className="flex flex-col h-[60px] w-full justify-between">
              <label htmlFor="email" className="text-stone-400 h-[25px] w-full">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                className="bg-transparent border-b border-yellow-400/30 outline-none w-full h-[30px] text-[20px]"
              />
            </div>
            <div className="flex flex-col h-[60px] w-full justify-between">
              <label htmlFor="password" className=" text-stone-400 h-[25px]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                required
                className="bg-transparent border-b border-yellow-400/30 outline-none w-full h-[30px] text-[20px]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="py-1 px-2 w-[130px] h-[35px] border-1 border rounded-full uppercase bg-[#886AE2] border-yellow-400/30
                      hover:shadow-md hover:shadow-indigo-800 hover:transition-shadow hover:font-bold"
          >
            {loader ?
            <Loader /> 
            : "Login"}
          </button>
          <Link to="/register" className="border-b">
            Or register new account
          </Link>
        </form>
      </main>
    </ContainerAuth>
  );
};
export default SignIn;
