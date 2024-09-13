import { Route, Routes } from "react-router-dom"
import Home from "./containers/Home"
import Keychains from "./Keychains"

const Pages = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chaveiros" element={<Keychains />} />
        </Routes>
    )
}

export default Pages
