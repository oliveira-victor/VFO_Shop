import { Route, Routes } from "react-router-dom"
import Home from "./containers/Home"
import Keychains from "./Keychains"
import Prints from "./containers/Prints"
import Cards from "./containers/Cards"

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chaveiros" element={<Keychains />} />
            <Route path="/prints" element={<Prints />} />
            <Route path="/cartoes" element={<Cards />} />
        </Routes>
    )
}

export default Pages
