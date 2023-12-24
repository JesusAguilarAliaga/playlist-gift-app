import NavUnprotected from "../components/NavUnprotected"

const LandingPage = () => {
  return (
    <main className=" bg-black min-h-screen w-full text-white font-urbanist font-normal">      
      <NavUnprotected className="z-20 " />
      <img src="./images/landing3.jpg" alt="" 
          className="z-0 w-full h-screen object-cover object-center
              max-sm:overflow-hidden " />
      <section className="">        
        <div className=" w-full flex flex-col items-center justify-center">
          <p className="absolute top-1/2 rigth-[4px] text-center font-bold text-4xl text-[#E7D04E] uppercase
              max-sm:text-xl">
            Create a playlist for your friends
          </p>
          {/* <p className="absolute top-1/2 text-center font-semibold text-4xl text-[#5447ab] 
              uppercase
              max-sm:text-xl
              ">
            Create a playlist for your friends
          </p>           */}
        </div>
      </section>
    </main>
  )
}
export default LandingPage