import { CiCoffeeCup } from "react-icons/ci";

function Logo({ size }) {
    return (
        <div
            className="logo relative w-max"
            style={{ fontSize: 4 * size + "px" }}
        >
            <CiCoffeeCup className="bg-fourth text-primary h-[1em] w-[1em] rounded-full p-[0.4em] box-content" />
            <span className="absolute leading-none bottom-0 right-[1px] text-primary p-0 m-0 text-[0.2em]">
                TM
            </span>
        </div>
    );
}

export default Logo;
