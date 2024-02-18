import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";

function Header() {
    const [sideNavIn, setSideNavIn] = useState(false);
    const sideNavBar = useRef(null);
    const sideNavShadow = useRef(null);

    return <header className="relative z-10">
        <div className="flex shadow-lg bg-white justify-between items-center p-3">
            <div className="logo">
                <Logo size={7} />
            </div>
            <HiMenu size={28} className="cursor-pointer" onClick={() => setSideNavIn(!sideNavIn)} />
        </div>
        <CSSTransition nodeRef={sideNavBar} in={sideNavIn} timeout={300} classNames="side-nav" unmountOnExit>
            <div ref={sideNavBar} className="bg-white absolute -z-20 right-0 w-3/4 h-screen"></div>
        </CSSTransition>
        <CSSTransition nodeRef={sideNavShadow} in={sideNavIn} timeout={300} classNames="fade" unmountOnExit>
            <div ref={sideNavShadow} className="h-screen w-full absolute -z-30 right-0 bg-black opacity-40" onClick={() => setSideNavIn(!sideNavIn)}>
            </div>
        </CSSTransition>
    </header>;
}

export default Header;
