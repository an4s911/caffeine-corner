import StoreFrontImg from "../images/storefront.webp";

function About() {
    return (
        <section className="mx-5 md:mx-10 lg:w-2/3 lg:mx-auto flex flex-col gap-10 lg:gap-16 my-16">
            <div id="company" className="flex flex-col gap-10">
                <h1 className="text-3xl lg:text-5xl font-bold">Our Company</h1>
                <div className="w-full">
                    <img src={StoreFrontImg} alt="storefront" />
                </div>
                <p className="text-lg">
                    At Caffeine Corner, we believe that coffee is more than just
                    a drink; it’s a ritual, a connection, and an experience.
                    Inspired by the warmth and energy of the global coffee
                    culture, our cafe is a cozy spot where creativity brews
                    alongside your favorite cup of coffee. Whether you're here
                    to savor a single-origin espresso or catch up with friends
                    over a frothy cappuccino, Caffeine Corner is your sanctuary
                    for all things coffee.
                </p>
            </div>
            {[
                {
                    id: "story",
                    title: "Our Story",
                    description: [
                        "It all began with a passion for exceptional coffee and a desire to create a space where every cup tells a story. Founded by coffee enthusiasts with a dream to bring world-class brews closer to home, Caffeine Corner was designed to blend modern design with the comfort of a neighborhood cafe.",
                        "Inspired by the bustling coffee corners of global metropolises, we adopted a sleek and inviting layout, complemented by an unparalleled focus on quality and taste. Today, Caffeine Corner is not just a cafe; it's a hub for coffee lovers, thinkers, and creators alike.",
                    ],
                },
                {
                    id: "coffee",
                    title: "Our Coffee Philosophy",
                    description: [
                        "Coffee at Caffeine Corner starts long before it reaches your cup. We collaborate with sustainable farmers and cooperatives from coffee-growing regions across the world to source premium, ethically grown beans. From the highlands of Ethiopia to the plantations of Colombia, we carefully select beans that reflect the rich diversity of global coffee cultures.",
                        "Once sourced, our beans undergo a meticulous roasting process. We roast in small batches, ensuring every bean reaches its peak flavor potential. Our master roasters and baristas work hand-in-hand to craft a cup that speaks to your palate, balancing bold flavors with nuanced aromas.",
                    ],
                },
                {
                    title: "Crafting Every Cup",
                    description: [
                        "At Caffeine Corner, every cup of coffee is a testament to our dedication. Our baristas are not just coffee makers they're artists who are passionate about their craft. Using state-of-the-art equipment and traditional brewing techniques, we aim to elevate your coffee experience with every pour. Whether it's a velvety latte or a vibrant pour-over, we ensure that every cup is made with precision and care.",
                    ],
                },
                {
                    title: "Sustainability and Community",
                    description: [
                        "We are deeply committed to sustainability and giving back to the community. From eco-friendly packaging to partnerships with local artisans and suppliers, we aim to leave a positive impact wherever we can. At Caffeine Corner, every sip supports a broader mission of sustainability, fairness, and community engagement.",
                    ],
                },
                {
                    title: "Visit Us",
                    description: [
                        "Whether you're stopping by for your morning pick-me-up, a midday break, or a cozy evening hangout, Caffeine Corner welcomes you to enjoy a coffee experience like no other. Come for the coffee, stay for the vibes, and make every moment at Caffeine Corner one to savor.",
                    ],
                },
            ].map((item, index) => (
                <div
                    id={item.id ? item.id : ""}
                    key={index}
                    className="flex flex-col gap-6 md:gap-10"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">
                        {item.title}
                    </h2>
                    <div className="flex flex-col gap-5">
                        {item.description.map((desc) => (
                            <p className="text-lg">{desc}</p>
                        ))}
                    </div>
                </div>
            ))}
            <div>
                <div className="h-0 overflow-visible">
                    <div className="relative z-50 text-white bg-red-500 text-sm w-max px-4 opacity-65">
                        This website is not for this restaurant, it is only an
                        example
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d171642.30591038315!2d28.500633717067238!3d41.017741363616324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55ff498853dcf%3A0x79450ec9bcd3801b!2sCAFFEINE%20CORNER!5e0!3m2!1sen!2str!4v1733073431514!5m2!1sen!2str"
                    className="w-full h-96 lg:h-[450px] border-0"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default About;
