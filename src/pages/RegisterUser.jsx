import { Link, useNavigate } from "react-router-dom";
import { axiosMusic, axiosPlaylist } from "../utils/configAxios";
import ContainerAuth from "../components/layouts/ContainerAuth";
import { useState } from "react";
import Loader from "../components/Loader";
import { toastError, toastInfo, toastSuccess, toastWarning } from "../utils/notifications";

// const URL_API = "https://xtrem-party-dev-rgnq.3.us-1.fl0.io"

const RegisterUser = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);


    //axiosPlaylist
    axiosMusic
        .post("/api/auth/register", data)
        .then(({data}) => {
          console.log(data.message);
          toastSuccess("Cuenta creada con éxito");
          toastInfo("Ya puedes iniciar sesión");
          navigate("/login");
        })
        .catch((err) => {
          console.log(err);
          if(err.response.status === 403) {
            toastWarning("Recuerda que el email debe ser valido y la contraseña de minimo 8 caracteres");
          }else{
            toastError("Error al registrar la cuenta");
          }
        })
        .finally(() => setLoader(false));
  }

  return (
    <ContainerAuth>
      <aside className="">
        <img src="/images/register-user.png" alt="" 
            className="w-[400px] h-[80%] object-cover rounded-2xl
            max-sm:hidden"
        />
      </aside>
      <main className="flex flex-col gap-4 h-[400px] justify-center">
        <h2 className="uppercase text-[40px] font-semibold">Account</h2>
        <form onSubmit={handleSubmit}
            className="flex flex-col gap-6 justify-center items-center">
          <div className="grid gap-8 w-[350px]">
            <div className="flex flex-col h-[60px] w-full justify-between">
              <label htmlFor="email"
                  className="text-stone-400 h-[25px] w-full">Email</label>
              <input type="email" name="email" id="email" autoComplete="off" required 
                  className="bg-transparent border-b border-yellow-400/30 outline-none w-full h-[30px] text-[20px]"/>
            </div>
            <div className="grid">
              <label htmlFor="name"
                  className="text-stone-400 h-[25px] w-full" >Name</label>
              <input type="text" name="name" id="name" autoComplete="off" required 
                  className="bg-transparent border-b border-yellow-400/30 outline-none w-full h-[30px] text-[20px]"/>
            </div>
            <div className="grid">
              <label htmlFor="password"
                  className="text-stone-400 h-[25px] w-full">Password</label>
              <input type="password" name="password" id="password" autoComplete="off" required 
                  className="bg-transparent border-b border-yellow-400/30 outline-none w-full h-[30px] text-[20px]"/>
            </div>
          </div>
          <button type="submit"
                  className="py-1 px-2 w-[130px] h-[35px] border-1 border rounded-full uppercase bg-[#886AE2] border-yellow-400/30
                  hover:shadow-md hover:shadow-indigo-800 hover:transition-shadow hover:font-bold">
            { loader ? <Loader /> : "Register" }
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
