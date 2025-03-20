import { useState } from "react";
import Marquee from "react-fast-marquee";

// Import SVGs
import likeIcon from "../assets/like.svg";
import capIcon from "../assets/cap.svg";
import markIcon from "../assets/mark.svg";

function MarqueeH() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const handleMoreInfoClick = (content:any) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent("");
  };

  const marqueeItems = [
    { icon: likeIcon, award: "~7.5k Followers" },
    { icon: capIcon, award: "~500 Students Reached" },
    {
      icon: markIcon,
      award: "5+ Open positions (More Info)",
      moreInfo: "For those intrested in our open volunteer positions, please read the information below.",
    },
  ];

  return (
    <div className="w-full bg-gray-200 p-4">
      <Marquee>
        <div className="flex justify-evenly w-full">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="w-80 h-14 p-2 m-16 bg-gray-100 rounded-lg text-lg flex flex-row justify-between items-center"
            >
              <div className="h-full w-1/6 flex justify-center items-center">
                <img
                  src={item.icon}
                  alt="icon"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="h-full w-5/6 flex justify-center items-center">
                {item.award.includes("More Info") ? (
                  <button
                    onClick={() =>
                      handleMoreInfoClick(item.moreInfo || "No additional information available.")
                    }
                    className="text-main hover:underline focus:outline-none"
                  >
                    {item.award}
                  </button>
                ) : (
                  <p>{item.award}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Marquee>

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-11/12 sm:w-4/5 lg:w-1/2 max-h-[90vh] overflow-auto">
          <h2 className="text-xl font-bold mb-4">More Info</h2>
          <p>{modalContent}</p>
          <h3 className="font-bold my-2" >Open Positions</h3>
            <ul className="mb-4">
              <li>Social Media Assistant</li>
              <li>Web Development Unpaid Intern</li>
              <li>Course Presenter</li>
            </ul>
            <p className="my-2 text-left">For those interested in any of the above positions, please send an email to hani.mahdi623@gmail.com or through <span className="text-main underline font-bold"><a href="mailto:hani.mahdi623@gmail.com">this link</a></span>. Title it [insert position name] with your resume. We recruit on a day-to-day basis, but please note that all positions are unpaid volunteer opportunities.</p>
          <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-main text-white rounded hover:bg-fourth"
          >
              Close
          </button>
      </div>
  </div>
)}
    </div>
  );
}

export default MarqueeH;


