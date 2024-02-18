import Card from "./Card";
import image1 from "../images/card/1.jpg"
import image2 from "../images/card/2.jpg"
import image3 from "../images/card/3.jpg"
import image4 from "../images/card/4.jpg"

function Main() {
    const orderNowUrl = "/";
    return <main className="flex flex-col gap-6 mb-6 mt-24 md:mt-28">
        <Card image={image1} buttonLinkUrl={orderNowUrl} buttonText="Order Now" paragraph="Experience the Classic Latte, a timeless favorite, under 200 calories in a grande." heading="Feel-good finds" />
        <Card image={image2} buttonLinkUrl={orderNowUrl} buttonText="Order Now" paragraph="A Symphony of Flavors: Our Frappuccino, with its Creamy Layers and Biscuit Garnish, is a Melody of Freshness and Quality." heading="Next-level luxurious" />
        <Card image={image3} buttonLinkUrl={orderNowUrl} buttonText="Order Now" paragraph="Hand-Picked and Perfectly Roasted: Experience the Authentic Taste of Our Freshly Roasted Coffee Beans" heading="Perfection in Every Sip" />
        <Card image={image4} buttonLinkUrl={orderNowUrl} buttonText="Order Now" paragraph="Satisfaction in Every Sip: Our Expert Baristas Craft Each Cup with Precision and Passion" heading="Relish the Artful Blend" />
    </main>;
}

export default Main;
