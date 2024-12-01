function Rewards() {
    return (
        <>
            <section>
                <div className="banner sticky top-0 px-20 py-4 bg-primary text-white font-semibold text-sm uppercase">
                    <h3>Caffeine Corner's Rewards</h3>
                </div>
                <div className="h-screen bg-gradient-to-bl from-tertiary to-fourth flex flex-col justify-center px-20 gap-2">
                    <h2 className="text-4xl text-secondary font-bold uppercase">
                        Free Coffee
                        <br />
                        is just a sip away
                    </h2>
                    <p className="text-xl">
                        Grab them on your way to work every friday at 10am.
                    </p>
                    <div>
                        <input
                            className="py-2 px-4 rounded-md outline-none focus:outline-secondary"
                            type="email"
                            placeholder="Your email"
                        />
                    </div>
                    <p>
                        Enter your email and get your unique free coffee code to
                        use <span className="font-bold">this friday</span>
                    </p>
                </div>
                <div className="flex flex-col items-center py-24 gap-5">
                    <h3 className="text-2xl font-semibold">
                        Getting started is easy
                    </h3>
                    <p>
                        But at our store and get coupons for a chance to win
                        more
                    </p>
                    <div className="steps grid grid-cols-1 lg:grid-cols-3 gap-20 mt-5 px-24">
                        {[
                            {
                                id: 1,
                                title: "Enter your email",
                                description:
                                    "To get your first free coffee. And make sure to come early, because we only serve 50 of them.",
                            },
                            {
                                id: 2,
                                title: "Buy anything at our store",
                                description:
                                    "To get a coupon for a chance to win your next free coffee. But there's a catch, you need to show have posted your previous coffee on Instagram and tagged us @caffeine.corner",
                            },
                            {
                                id: 3,
                                title: "Share with your friends and family",
                                description:
                                    "To let us serve free coffees to the people you and we love. Because sharing is caring isn't it?",
                            },
                        ].map((step) => {
                            return (
                                <div className="step flex flex-col items-center gap-5 flex-1">
                                    <span className="text-2xl border-2 border-primary rounded-full w-12 h-12 flex items-center justify-center text-primary">
                                        {step.id}
                                    </span>
                                    <span className="text-lg font-semibold">
                                        {step.title}
                                    </span>
                                    <p className="text-center">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="questions bg-fourth text-primary flex flex-col justify-center px-36 py-36 gap-3">
                    <h3 className="text-2xl font-semibold">
                        Got any questions?
                    </h3>
                    <p>
                        We want to help in any way we can. Just email us at{" "}
                        <a href="#" className="text-secondary">
                            happy@caffeinecorner.com
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}

export default Rewards;
