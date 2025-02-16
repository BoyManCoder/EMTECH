import { useState } from "react";
import Logo from "../assets/Logo.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Marquee from "react-fast-marquee";

const founders = [
  {
    name: "Hani Mahdi",
    role: "- Founder - Web Developer - Social Media Manager",
    linkedin: "https://www.linkedin.com/in/hanimahdi/",
    instagram: "https://www.instagram.com/emtech_stem/",
    github: "https://github.com/BoyManCoder",
    email: "emtech.to@gmail.com",
    image: "/Hani.jpg",
  },
  {
    name: "Sandro Shtikov",
    role: "Co-Founder - Former Course Presenter - ",
    linkedin: "https://www.linkedin.com/in/aleksandre-shtikov/",
    instagram: "#",
    github: "https://github.com/AirWard1234",
    email: "sandro.shtikov2@gmail.com",
    image: "/Sadnro.jpg"
  },
];

function MissionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <>
      <div id="found">
        {/* Desktop Layout (Static) */}
        <section className="hidden md:flex w-screen h-full flex-row items-center justify-center bg-main px-10 py-4">
          <div className="h-96 w-1/5 bg-fourth">
            <img src="/Hani.jpg" className="w-full h-full object-cover"/>
          </div>
          <div className="h-96 m-4 w-3/5 bg-gray-100 px-6 py-4 flex flex-col items-center">
            <h1 className="w-full text-center font-robotoSlab text-white font-medium text-2xl bg-main">
              Founder - Web Developer - Social Media Manager
            </h1>
            <h1 className="w-full text-center font-robotoSlab text-4xl mt-10 h-20 font-heavy">
              Hani Mahdi
            </h1>
            
            <p className="w-5/6 text-center leading-loose">
              Hani Mahdi is the founder of EMTECH, the company dedicated to
              creating innovative digital solutions. As a web developer, he
              designs and optimizes platforms to ensure seamless functionality.
              In his role as a social media manager. His expertise and
              forward-thinking approach continue to drive EMTECH’s success in the
              digital space.
            </p>
            <button
          onClick={toggleModal}
          className="mt-6 py-2 px-4 bg-main border-soft border-2 hover:bg-gray-100 hover:text-black transition-all text-white font-semibold rounded-lg"
        >
          Special Thanks
        </button>
          </div>
        </section>

        {/* Special Thanks Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={toggleModal}
          >
            <div
              className="bg-white p-6 rounded-lg w-2/5"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
              <h2 className="text-2xl font-semibold mb-4">Special Thanks</h2>
              <p className="text-sm mb-4">
                We would like to extend our heartfelt thanks to all the
                individuals and organizations that have contributed to EmTech's
                success. Your support, time, and efforts make our mission possible.
              </p>
              <p>Thank you especially to our regular volunteers: </p>
              <ul className="text-sm list-decimal pl-3 my-2">
                <li>- Vedant Kansara</li>
                <li>- Christian Belchev</li>
                <li>- Gaurav Jhally</li>
                <li>- Somaan Khan</li>
                <li>- Ryan Persaud</li>
                
              </ul>
              <div className="w-full my-4 flex flex-row justify-center items-center">
                <div className="w-1/2 h-60">
                  <img className="h-full w-5/6 object-cover " src="/Sadnro.jpg" />
                </div>
                <div className="w-1/2 h-60 flex flex-col text-md items-start justify-top">
                  <h1 className="font-bold">Sandro Shtikov</h1>
                  <h1 className="text-sm my-2 ">Former: Co-founder & Course Presenter</h1>
                  <p className="text-md">Thank you to Sandro Shtikov for aiding in our beginning phases, and presenting some of our very first courses! We look forward to having you in the future.</p>
                </div>
              </div>
              <button
                onClick={toggleModal}
                className="py-2 px-4 bg-main text-white rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Layout (Dynamic) */}
        <div className="md:hidden w-screen h-[125vh] font-robotoSlab flex flex-col items-center gap-4">
          <h1 className="text-5xl h-20">Executive Team</h1>
          {founders.map((founder, index) => (
            <div
              key={index}
              className="w-5/6 h-3/5 bg-secondary mt-10 flex flex-col justify-between items-center"
            >
              <div className="image w-full bg-main h-1/5 p-2 flex flex-row items-center justify-around">
                <div className="w-1/5 p-1 rounded-xl flex items-center bg-secondary justify-center">
                  <img src={Logo} className="w-full" alt="Logo" />
                </div>
                <div className="flex flex-col w-2/3 h-full items-center font-bold justify-center">
                  <p className="w-full bg-secondary text-white px-3">
                    {founder.name}
                  </p>
                  <Marquee className="w-full bg-secondary text-white flex">
                    {founder.role}
                  </Marquee>
                </div>
              </div>
              <div className="w-full h-3/5">
                <img src={founder.image} className="h-full w-full object-cover"/>
              </div>
              <div className="w-full h-1/6 flex flex-row bg-secondary justify-around items-center custom-shadow">
                <FaGithub
                  className="w-1/4 h-1/2 transition-all cursor-pointer"
                  color="#82D4BB"
                  onClick={() => window.open(founder.github, "_blank")}
                />
                <FaLinkedin
                  className="w-1/4 h-1/2 transition-all cursor-pointer"
                  color="#82D4BB"
                  onClick={() => window.open(founder.linkedin, "_blank")}
                />
                <FaInstagram
                  className="w-1/4 h-1/2 transition-all cursor-pointer"
                  color="#82D4BB"
                  onClick={() => window.open(founder.instagram, "_blank")}
                />
                <MdEmail
                  className="w-1/4 h-1/2 transition-all cursor-pointer"
                  color="#82D4BB"
                  onClick={() => (window.location.href = `mailto:${founder.email}`)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MissionPage;
