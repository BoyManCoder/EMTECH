function About() {
    // Data for the cards
    const cards = [
        {
            title: "Educate",
            description:
                "This is the description for the first card. It provides some meaningful content and insights.",
            image: "/path/to/image1.jpg",
        },
        {
            title: "Empower",
            description:
                "This is the description for the second card. It explains another aspect of the mission.",
            image: "/path/to/image2.jpg",
        },
        {
            title: "Empower",
            description:
                "This is the description for the second card. It explains another aspect of the mission.",
            image: "/path/to/image2.jpg",
        },
    ];

    return (
        <>
            <section id="about" className="w-screen h-full font-robotoSlab text-5xl mt-16 overflow-hidden px-4 sm:px-8 py-8">
                <h1 className="text-center text-5xl mb-8 h-14">Mission</h1>
                <div className="w-full h-full flex flex-col sm:flex-row justify-evenly items-center sm:items-start sm:space-y-0 space-y-6 sm:space-x-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="h-auto sm:h-96 w-4/5 p-5 sm:w-80 bg-soft rounded-xl overflow-hidden flex flex-col shadow-lg"
                        >
                            <div className="h-1/2 w-full flex items-center justify-center">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="object-cover bg-main h-40 sm:h-full w-full sm:w-2/3"
                                />
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
}

export default About;
