import { Link } from "react-router-dom";

function Card({ image, heading, paragraph, buttonText, buttonLinkUrl, bgColor }) {
    return <div className="grid grid-cols-1 gap-4 odd:bg-secondary even:bg-tertiary" style={{ backgroundColor: bgColor }}>

        <div>
            <img src={image} alt="" />
        </div>
        <div className="flex flex-col items-center text-center py-10 px-10 gap-4">
            <h3 className="text-2xl font-bold">{heading}</h3>
            <p className="text-lg">{paragraph}</p>
            <Link to={buttonLinkUrl}>
                <button>{buttonText}</button>
            </Link>
        </div>

    </div>;
}

export default Card;
