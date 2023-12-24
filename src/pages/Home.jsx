import MainList from "../components/MainList"
import Nav from "../components/Nav"

const Home = () => {
  return (
    <main className="min-h-screen w-full text-white font-urbanist font-normal">
      <Nav />
      <MainList />
      <div className="-z-10 absolute size-52 top-[60%] right-[25%] bg-[#FFE24B] blur-[140px]"></div>
      <div className="-z-10 absolute size-52 top-[75%] right-[5%] bg-[#C03EFE] blur-[140px]"></div>
    </main>
  )
}

export default Home