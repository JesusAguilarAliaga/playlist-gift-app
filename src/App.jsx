import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignIn from "./pages/SignIn"
import RegisterUser from "./pages/RegisterUser"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import PlaylistPublic from "./pages/PlaylistPublic"
import EditPlaylist from "./components/EditPlaylist"
import TracksInfo from "./pages/TracksInfo"
import ArtistsInfo from "./pages/ArtistsInfo"

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/playlist/public/:id" element={<PlaylistPublic />} />
            {/* <Route path="/home" element={<Home />} /> */}
            {/* Acá las rutas protegidas después del Sign In */}
            <Route element={<SignIn />} >
              <Route path="/home" element={<Home />} />
              <Route path="/playlistID" element={<EditPlaylist />} /> {/*reemplazar id por /:id*/}
              <Route path="/tracks/:id" element={<TracksInfo />} />
              <Route path="/artists/:id" element={<ArtistsInfo />} />
              {/* <Route path="/playlist" element={<Playlist />} /> */}
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default App
