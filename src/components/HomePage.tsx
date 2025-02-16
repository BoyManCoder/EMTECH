import { useState, useEffect } from "react";
import MarqueeH from "./Marquee"; 

function HomePage() {
  const [dynamicWordIndex, setDynamicWordIndex] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const dynamicWords = ["Race.", "Gender.", "Age.", "Identity."];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSwiping(true);
      setTimeout(() => {
        setDynamicWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
        setIsSwiping(false);
      }, 500);
    }, 2500); 

    return () => clearInterval(interval);
  }, [dynamicWords.length]);

  useEffect(() => {
    const elements = document.querySelectorAll(".text-slide-up");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <>
      <section className="relative">
        <div className="w-screen h-screen font-robotoSlab flex md:flex-row flex-col relative">
          {/* Left Column */}
          <div className="w-full sm:w-1/2 sm:h-2/3 h-1/3 flex flex-col justify-start items-center sm:items-start sm:ml-20 p-4 ">
            <h1 className="text-slide-up my-6 lg:mt-8 text-center sm:text-left text-3xl md:mb-4 lg:mb-0 overflow-y-hidden lg:text-5xl h-1/5 w-full">
              Education Has No{" "}
              <span
                className={`p-1 dynamic-word ${
                  isSwiping ? "swipe-out" : "swipe-in"
                } text-white bg-main`}
              >
                {dynamicWords[dynamicWordIndex]}
              </span>
            </h1>
            <h3 className="text-slide-up w-full sm:w-4/5 m-1 text-base sm:text-xl text-center sm:text-left">
              Everyone should have the opportunity to learn. Education should unite, not divide; this is our mission.
            </h3>
            <button className="transition-all duration-300 hover:bg-main hover:text-grey-200 m-1 mt-4 w-full sm:w-1/4 h-9 text-white text-lg font-robotoSlab bg-fourth rounded-md">
              Learn More
            </button>
          </div>
          <div className="w-full sm:w-1/2 sm:h-2/3 h-1/3 flex flex-col justify-top items-center p-4 relative">
          <div className="w-4/5 h-5/6 sm:h-4/5 sm:mt-16"> 
            <img src="/Slide1.jpeg" className="w-full h-full rounded-lg" />
            </div>
          </div>

          <div className="absolute flex overflow-y-hidden justify-center items-center bottom-40 w-full h-20 bg-third z-0">
            <MarqueeH />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
