import { Link } from "react-router-dom";

function Card({
    image,
    heading,
    paragraph,
    buttonText,
    buttonLinkUrl,
    bgColor,
}) {
    return (
        <div
            className="card grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-4 odd:bg-secondary even:bg-tertiary items-center"
            style={{ backgroundColor: bgColor }}
        >
            <div>
                <img src={image} alt="" className="w-full" />
            </div>
            <div className="flex flex-col items-center text-center py-10 px-10 lg:px-14 gap-4 lg:gap-8 ">
                <h3 className="text-2xl font-bold lg:text-3xl">{heading}</h3>
                <p className="text-lg lg:text-xl">{paragraph}</p>
                <Link to={buttonLinkUrl}>
                    <button>{buttonText}</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;
