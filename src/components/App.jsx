import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Menu from "./Menu";
import Rewards from "./Rewards";
import About from "./About";
import { Route, Routes } from "react-router";

function App() {
    return (
        <div className="">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="menu" element={<Menu />} />
                <Route path="rewards" element={<Rewards />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
