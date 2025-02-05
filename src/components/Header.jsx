import Logo from "./Logo";
import { HiMenu } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import { useState, useRef, forwardRef } from "react";
import { Link, useLocation } from "react-router";

const Nav = forwardRef(({ md, setSideNavIn }, ref) => {
    const path = useLocation();

    return (
        <div
            ref={ref}
            className={`${md ? "hidden md:flex" : "flex md:hidden"} md:items-center flex-col md:gap-5 lg:gap-8 gap-10 bg-white top-0 fixed md:static md:z-0 md:h-auto md:w-auto md:flex-row -z-20 right-0 w-4/5 h-screen md:py-0 md:px-0 py-14 px-8 pt-24 md:pt-0`}
        >
            <nav className="text-primary flex md:uppercase md:font-bold text-2xl w-max md:text-lg flex-col gap-8 md:flex-row md:gap-4 lg:gap-10">
                {[
                    { name: "Menu", link: "/menu" },
                    { name: "Rewards", link: "/rewards" },
                    { name: "About", link: "/about" },
                ].map((item, index) => (
                    <div onClick={() => setSideNavIn(false)}>
                        <Link
                            key={index}
                            to={item.link}
                            className={`md:hover:text-secondary ${path.pathname === item.link ? "underline text-secondary" : ""}`}
                        >
                            {item.name}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
});

function Header() {
    const [sideNavIn, setSideNavIn] = useState(false);
    const sideNavBar = useRef(null);
    const sideNavShadow = useRef(null);

    return (
        <header className="relative w-full z-10 md:shadow-md">
            <div className="flex shadow-md md:shadow-none bg-white justify-between items-center p-3 md:p-6 xl:px-14 max-w-screen-2xl mx-auto">
                <Link to="/" className="logo flex items-center gap-5">
                    <Logo size={7} />
                    <div className="text-primary text-xl lg:text-2xl font-bold">
                        Caffeine Corner
                    </div>
                </Link>
                <div
                    onClick={() => setSideNavIn(!sideNavIn)}
                    className="md:hidden hover-max-width-height-anim relative cursor-pointer text-primary p-2 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-1/2 before:-translate-y-1/2 before:bg-gray-200 active:before:bg-gray-300 before:max-w-0 before:h-full before:w-full before:max-h-0 before:rounded-full before:z-0 hover:before:max-w-24 hover:before:max-h-24"
                    style={{ transition: "max-height 0.2s ease" }}
                >
                    <HiMenu size={28} className="relative z-10" />
                </div>
                <Nav md={true} />
            </div>
            <CSSTransition
                nodeRef={sideNavBar}
                in={sideNavIn}
                timeout={300}
                classNames="side-nav"
                unmountOnExit
            >
                <Nav ref={sideNavBar} setSideNavIn={setSideNavIn} md={false} />
            </CSSTransition>
            <CSSTransition
                nodeRef={sideNavShadow}
                in={sideNavIn}
                timeout={300}
                classNames="fade"
                unmountOnExit
            >
                <div
                    ref={sideNavShadow}
                    className="md:hidden h-screen fixed top-0 w-full -z-30 right-0 bg-black opacity-40"
                    onClick={() => setSideNavIn(!sideNavIn)}
                ></div>
            </CSSTransition>
        </header>
    );
}

export default Header;
