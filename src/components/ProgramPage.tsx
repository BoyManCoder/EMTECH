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
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeIK4JeMWsMJ1FKL6pYY95_WEMUd3VaAW6FlMqkVFVMgHh1AQ/viewform?usp=sf_link",  
        },
        {
            title: "CCC Prep Course",
            description:
                "Dive into Waterloo's 2024 CCC to prep for 2025",
            image: "/CCC-logo.webp",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfsIcQmFYUH8Gl4uF6ZZc1rQIgadcrPSF_vVymlkm6np39wCg/viewform?usp=header", // Link for CCC prep course
        },
        {
            title: "JavaScript Essentials",
            description:
                "Step by step for JS Noobies, coming in FEB sign up!",
            image: "/JSE.jpeg",  
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfOPUv1ZMzX4Ih-wbUg7hxhJnTNa3Hi81zNg_PfXyUsdIKLjQ/viewform?usp=header", // Link for JS Essentials course
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
