import { Link, useNavigate } from "react-router-dom";
import { axiosPlaylist } from "../utils/configAxios";
import ContainerAuth from "../components/layouts/ContainerAuth";

// const URL_API = "https://xtrem-party-dev-rgnq.3.us-1.fl0.io"

const RegisterUser = () => {

  const navigate = useNavigate();  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);

    axiosPlaylist
        .post("/api/auth/register", data)
        .then(({data}) => {
          console.log(data.message);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
        });
  }

  return (
    <ContainerAuth>
      <aside className="">
        <img src="/images/register-user.png" alt="" 
            className="w-[400px] h-[400px] object-cover rounded-2xl
                max-sm:hidden"
        />
      </aside>
      <main>
        <h2 className="uppercase text-3xl font-semibold mb-6">Account</h2>
        <form onSubmit={handleSubmit}
            className="flex flex-col gap-6 justify-center items-center">
          <div className="grid gap-4">
            <div className="grid">
              <label htmlFor="email"
                  className="text-sm text-stone-400">Email</label>
              <input type="email" name="email" id="email" autoComplete="off" required 
                  className="bg-transparent border-b border-yellow-400/30 outline-none"/>
            </div>
            <div className="grid">
              <label htmlFor="name"
                  className="text-sm text-stone-400" >Name</label>
              <input type="text" name="name" id="name" autoComplete="off" required 
                  className="bg-transparent border-b border-yellow-400/30 outline-none"/>
            </div>
            <div className="grid">
              <label htmlFor="password"
                  className="text-sm text-stone-400">Password</label>
              <input type="password" name="password" id="password" autoComplete="off" required 
                  className="bg-transparent border-b border-yellow-400/30 outline-none"/>
            </div>
          </div>
          <button type="submit"
                  className="py-1 px-5 max-w-max border-1 border rounded-full m-2 uppercase bg-[#886AE2] mt-6 border-yellow-400/30
                      hover:shadow-md hover:shadow-indigo-800 hover:transition-shadow hover:font-bold">
            Register
          </button>
          <Link to="/login" className="border-b">
            Or login to sign in
          </Link>
        </form>
      </main>
    </ContainerAuth>
  );
};

export default RegisterUser;
