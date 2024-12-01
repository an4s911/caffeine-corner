import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    const email = "5r5P1@example.com";
    const phoneNumbers = ["123-456-7890", "987-654-3210", "555-555-5555"];
    return (
        <footer className="relative px-6 md:px-10 pb-6">
            <div className="footer-primary-nav grid grid-cols-2 grid-rows-2 lg:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 md:px-4 md:py-14 py-5 gap-y-10">
                <div className="about">
                    <h3>
                        <Link to="/about">About Us</Link>
                    </h3>
                    <div>
                        <Link to="/about#company">Our Company</Link>
                        <Link to="/about#coffee">Our Coffee</Link>
                        <Link to="/about#news">Stories and News</Link>
                        <Link to="/about#partners">Partners</Link>
                    </div>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <div>
                        {phoneNumbers.map((number, index) => (
                            <Link key={index} to={`tel:${number}`}>
                                {number}
                            </Link>
                        ))}
                        <Link to={`mailto:${email}`}>{email}</Link>
                    </div>
                </div>
                <div className="address">
                    <h3>Address</h3>
                    <div>
                        <p>
                            123 Main Street
                            <br />
                            Anytown, USA 12345
                        </p>
                    </div>
                </div>
                <div className="order">
                    <h3>Store</h3>
                    <div>
                        <p>Order from our local stores or over the phone</p>
                        <Link to="/menu">
                            <button>Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="mx-2 border-1 border-secondary" />
            <div className="social-links flex items-center gap-4 py-6 px-1 md:py-10">
                <Link to="https://twitter.com">
                    <FaSquareXTwitter className="icon" />
                </Link>
                <Link to="https://facebook.com">
                    <FaFacebook color="#3b5998" className="icon" />
                </Link>
                <Link to="https://instagram.com">
                    <FaInstagram color="#e1306c" className="icon" />
                </Link>
                <Link to="https://github.com/an4s911/caffeine-corner">
                    <FaGithub className="icon" />
                </Link>
            </div>
            <p className="text-gray-600 flex whitespace-nowrap flex-wrap gap-2">
                <span>&copy; 2024 Caffeine Corner</span>
                <span className="hidden sm:block">|</span>
                <span>
                    Inspired by{" "}
                    <Link
                        className="text-primary hover:text-secondary"
                        to="https://www.starbucks.com/"
                    >
                        Starbucks
                    </Link>
                </span>
            </p>
        </footer>
    );
}

export default Footer;
