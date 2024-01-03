import { Route, Routes, useNavigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignIn from "./pages/SignIn"
import RegisterUser from "./pages/RegisterUser"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import PlaylistPublic from "./pages/PlaylistPublic"
import EditPlaylist from "./components/EditPlaylist"
import TracksInfo from "./pages/TracksInfo"
import ArtistsInfo from "./pages/ArtistsInfo"
import Playlist from "./pages/Playlist"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./index.css"
import "./styles/toastify.css";
import { useEffect } from "react"

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home", { replace: true });
  }, []);

  return (
    <>
      <ToastContainer />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/playlist/public/:id" element={<PlaylistPublic />} />
            {/* Acá las rutas protegidas después del Sign In */}
            <Route element={<SignIn />} >
              <Route path="/home" element={<Home /> } />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/playlist/:id" element={<EditPlaylist />} />
              <Route path="/tracks/:id" element={<TracksInfo />} />
              <Route path="/artists/:id" element={<ArtistsInfo />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default App
