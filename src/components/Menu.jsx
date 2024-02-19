import espresso from "../images/menu/espresso.jpg";
import latte from "../images/menu/latte.jpg";
import cappuccino from "../images/menu/cappuccino.jpg";
import frappuccino from "../images/menu/frappuccino.jpg";
import macchiato from "../images/menu/macchiato.jpg";
import cinnamonRolls from "../images/menu/cinnamon-rolls.jpg";
import bagel from "../images/menu/bagel.jpg";
import cupcake from "../images/menu/cupcake.jpg";
import cookies from "../images/menu/cookies.jpg";
import bananaToast from "../images/menu/banana-toast.jpg";
import eggMushroom from "../images/menu/egg-mushroom.jpg";
import nutellaCrepe from "../images/menu/nutella-crepe.jpg";
import oatmeal from "../images/menu/oatmeal.jpg";
import tunaSalad from "../images/menu/tuna-salad.jpg";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";

function MenuCard({ image, name }) {
    return (
        <div className="menu-item">
            <div>
                <img
                    src={image}
                    alt={name}
                    className="border-2 border-fourth"
                />
            </div>
            <p>{name}</p>
        </div>
    );
}

function Menu() {
    const [onSignature, setOnSignature] = useState(false);
    const signatureRef = useRef(null);

    return (
        <div id="menu" className="flex flex-col gap-8 px-8 py-10 xl:px-14 max-w-screen-2xl mx-auto">
            <h2 className="text-3xl text-primary font-bold">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="food-category">
                    <div>
                        <h3 className="text-2xl text-primary font-bold">
                            Drinks
                        </h3>
                        <hr />
                    </div>
                    <div className="flex flex-col gap-8 md:gap-10 text-primary text-lg">
                        <MenuCard image={espresso} name="Espresso" />
                        <MenuCard image={latte} name="Latte" />
                        <MenuCard image={cappuccino} name="Cappuccino" />
                        <MenuCard image={frappuccino} name="Frappuccino" />
                        <MenuCard image={macchiato} name="Macchiato" />
                    </div>
                </div>
                <div className="food-category">
                    <div>
                        <h3 className="text-2xl text-primary font-bold">
                            Snacks
                        </h3>
                        <hr />
                    </div>
                    <div className="flex flex-col gap-8 md:gap-10 text-primary text-lg">
                        <MenuCard image={cookies} name="Cookies" />
                        <MenuCard image={cinnamonRolls} name="Cinnamon Rolls" />
                        <MenuCard image={bagel} name="Bagels" />
                        <MenuCard image={cupcake} name="Cupcakes" />
                    </div>
                </div>
                <div className="food-category">
                    <div>
                        <h3 className="text-2xl text-primary font-bold">
                            Breakfast
                        </h3>
                        <hr />
                    </div>
                    <div className="flex flex-col gap-8 md:gap-10 text-primary">
                        <div className="menu-item">
                            <div>
                                <CSSTransition
                                    in={onSignature}
                                    nodeRef={signatureRef}
                                    timeout={300}
                                    classNames="signature"
                                >
                                    <img
                                        src={bananaToast}
                                        alt="Banana Toast"
                                        className="sign border-primary border-2"
                                        onMouseOver={(e) => {
                                            setOnSignature(true);
                                            e.target.style.animation = "none";
                                        }}
                                        onMouseOut={(e) => {
                                            setOnSignature(false);
                                            setTimeout(() => {
                                            e.target.style.animation =
                                                "wobble 1s linear infinite";
                                            }, 400);
                                        }}
                                        ref={signatureRef}
                                    />
                                </CSSTransition>
                            </div>
                            <p className="text-primary italic">
                                Our Signature Banana Toast
                            </p>
                        </div>
                        <MenuCard
                            image={eggMushroom}
                            name="Omelette with Mushroom"
                        />
                        <MenuCard image={nutellaCrepe} name="Nutella Crepe" />
                        <MenuCard image={oatmeal} name="Oatmeal" />
                        <MenuCard image={tunaSalad} name="Healty Tuna Salad" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
