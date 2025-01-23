import JSone from "../assets/Javascript.png";

interface Course {
    title: string;
    description: string;
    image: string;
    link: string;
}

function ProgramPage() {
    const courses: Course[] = [
        {
            title: "Beginner Web Development",
            description:
                "Learn the basics of HTML, CSS, and JavaScript. Create your first webpage in just a few lessons.",
            image: JSone,
            link: "/courses/web-development",
        },
        {
            title: "JavaScript Essentials",
            description:
                "Dive deep into JavaScript with this essential course. Perfect for aspiring developers.",
            image: "/assets/js-essentials.jpg",
            link: "/courses/javascript-essentials",
        },
        {
            title: "React for Beginners",
            description:
                "A step-by-step guide to building modern web applications using React.js.",
            image: "/assets/react-course.jpg",
            link: "/courses/react-for-beginners",
        },
    ];

    return (
        <section id="program" className="w-screen font-robotoSlab bg-gradient-to-br from-gray-50 to-third py-10">
            <div className="container mx-auto px-6">
                <h1 className="text-2xl sm:text-4xl p-2 font-bold text-center text-gray-800 mb-10">
                    Our Programs
                </h1>
                <div className="grid gap-8 p-6 sm:grid-cols-2 lg:grid-cols-3">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
                        >
                            <div className="relative h-48 w-full">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover shadow-lg"
                                />
                                {/* Optional overlay for shadow effect */}
                                <div className="absolute inset-0 bg-black opacity-30"></div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                                    {course.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 truncate">
                                    {course.description}
                                </p>
                                <a
                                    href={course.link}
                                    className="text-main font-medium hover:underline"
                                >
                                    Learn More →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProgramPage;
