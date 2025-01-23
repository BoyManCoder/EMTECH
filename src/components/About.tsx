import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbulb from "../components/Lightbulb.tsx";
import Lightning from "../components/Lightning.tsx";
import Sunrise from "../components/Sunrise.tsx"

// Card Data
const cards = [
    {
        title: "Educate",
        description: "This is the description for the first card. It provides some meaningful content and insights.",
        image: Lightbulb, // Using the component directly for rendering inline
    },
    {
        title: "Empower",
        description: "This is the description for the second card. It explains another aspect of the mission.",
        image: Lightning,
    },
    {
        title: "Inspire",
        description: "This is the description for the third card. It focuses on motivating others to achieve greatness.",
        image: Sunrise,
    },
];

const About = () => {
    const cardsRef = useRef<HTMLDivElement | null>(null); // Reference to the container for cards

    // React-Slick Slider Settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true,
        centerPadding: "0px", // Horizontal margin between cards
    };

    // Intersection Observer for fade-in effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            { threshold: 0.5 } // Trigger fade-in when 50% of the card is in view
        );

        const cards = cardsRef.current?.children;
        if (cards) {
            for (let card of cards) {
                observer.observe(card);
            }
        }

        return () => {
            const cards = cardsRef.current?.children;
            if (cards) {
                for (let card of cards) {
                    observer.unobserve(card);
                }
            }
        };
    }, []);

    return (
        <>
            {/* Slider for Mobile Only */}
            <section className="w-screen font-robotoSlab text-5xl mt-16 px-4 sm:px-8 py-8 block lg:hidden">
                <h1 className="text-center text-5xl mb-8 h-14">Mission</h1>
                <Slider {...settings} className="w-full">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="h-96 w-4/5 p-5 mx-auto bg-soft rounded-xl overflow-hidden flex flex-col shadow-lg"
                            style={{ margin: "0 15px" }}
                        >
                            <div className="h-1/2 w-full flex items-center justify-center">
                                {typeof card.image === "function" ? (
                                    <card.image /> // Render the Lightbulb component as SVG
                                ) : (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="object-cover bg-main h-40 sm:h-full w-full sm:w-2/3"
                                    />
                                )}
                            </div>
                            <div className="flex-grow w-full text-center p-6 flex flex-col">
                                <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                                <p className="text-sm text-gray-700">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            {/* Regular View for Large Screens */}
            <section className="w-screen h-full hidden lg:block font-robotoSlab text-5xl mt-16 overflow-hidden px-4 sm:px-8 py-8">
                <h1 className="text-center text-5xl mb-8 h-14">Mission</h1>
                <div
                    ref={cardsRef}
                    className="w-full h-full p-10 flex flex-col sm:flex-row justify-evenly items-center sm:items-start sm:space-y-0 space-y-6 space-x-12"
                >
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="h-96 w-4/5 p-5 sm:w-80 bg-soft rounded-xl overflow-hidden flex flex-col shadow-lg opacity-0 transform translate-y-10 transition-all duration-1000 ease-in-out"
                            style={{ margin: "0 15px" }}
                        >
                            <div className="h-1/2 w-full flex items-center justify-center">
                                {typeof card.image === "function" ? (
                                    <card.image /> // Render the Lightbulb component as SVG
                                ) : (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="object-cover bg-main h-40 sm:h-full w-full sm:w-2/3"
                                    />
                                )}
                            </div>
                            <div className="flex-grow w-full text-center p-6 flex flex-col">
                                <h2 className="text-2xl font-bold mb-3">{card.title}</h2>
                                <p className="text-sm text-gray-700">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;
