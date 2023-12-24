import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignIn from "./pages/SignIn"
import RegisterUser from "./pages/RegisterUser"
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<RegisterUser />} />
            {/* <Route path="/home" element={<Home />} /> */}
            {/* Acá las rutas protegidas después del Sign In */}
            <Route element={<SignIn />} >
              <Route path="/home" element={<Home />} />
              {/* <Route path="/playlist" element={<Playlist />} /> */}
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
  )
}

export default App
