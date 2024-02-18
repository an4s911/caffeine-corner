import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";

function Header() {
    return <header className="">
        <div className="flex shadow-lg bg-white justify-between items-center p-3">
            <div className="logo">
                <Logo size={7} />
            </div>
            <HiMenu size={28} className="cursor-pointer" />
        </div>
    </header>;
}

export default Header;
