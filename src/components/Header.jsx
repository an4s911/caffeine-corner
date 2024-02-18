import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
    const [sideNavIn, setSideNavIn] = useState(false);
    const sideNavBar = useRef(null);
    const sideNavShadow = useRef(null);

    return <header className="relative z-10">
        <div className="flex shadow-md bg-white justify-between items-center p-3">
            <div className="logo">
                <Logo size={7} />
            </div>
            <HiMenu size={28} className="cursor-pointer text-primary" onClick={() => setSideNavIn(!sideNavIn)} />
        </div>
        <CSSTransition nodeRef={sideNavBar} in={sideNavIn} timeout={300} classNames="side-nav" unmountOnExit>
            <div ref={sideNavBar} className="flex flex-col gap-10 bg-white absolute -z-20 right-0 w-4/5 h-screen py-14 px-8">
                <nav className="text-primary flex text-2xl flex-col gap-8">
                    <Link to="/">Menu</Link>
                    <Link to="/">Rewards</Link>
                    <Link to="/">Gift Cards</Link>
                </nav>
                <hr />
                <div className="flex gap-3">
                    <button className="light">Sign In</button>
                    <button className="">Join Now</button>
                </div>
                <div></div>
            </div>
        </CSSTransition>
        <CSSTransition nodeRef={sideNavShadow} in={sideNavIn} timeout={300} classNames="fade" unmountOnExit>
            <div ref={sideNavShadow} className="h-screen w-full absolute -z-30 right-0 bg-black opacity-40" onClick={() => setSideNavIn(!sideNavIn)}>
            </div>
        </CSSTransition>
    </header>;
}

export default Header;
