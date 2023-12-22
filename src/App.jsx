import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import SignIn from "./pages/SignIn"
import RegisterUser from "./pages/RegisterUser"
import Home from "./pages/Home"

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/home" element={<Home />} />
            {/* Acá las rutas protegidas después del Sign In */}
            {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
    </>
  )
}

export default App
