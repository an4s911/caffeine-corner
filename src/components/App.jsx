import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Menu from "./Menu";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="">
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="menu" element={<Menu />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
