import Marquee from "react-fast-marquee";

// Import SVGs
import likeIcon from "../assets/like.svg";
import capIcon from "../assets/cap.svg";
import markIcon from "../assets/mark.svg";

interface Props {
  icon: string;
  award: string;
}

function MarqueeItem({ icon, award }: Props) {
  return (
    <div className="w-80 h-14 p-2 m-16 bg-gray-100 rounded-lg text-lg flex flex-row justify-between items-center">
      <div className="h-full w-1/6 flex justify-center items-center">
        <img src={icon} alt="icon" className="h-full w-full object-contain" />
      </div>
      <div className="h-full w-5/6 flex justify-center items-center">
        <p>{award}</p>
      </div>
    </div>
  );
}

function MarqueeH() {
  const marqueeItems = [
    { icon: likeIcon, award: "~7.5k Followers" },
    { icon: capIcon, award: "~100 Students Enrolled" },
    { icon: markIcon, award: "5+ Open positions (More Info)" },
  ];

  return (
    <div className="w-full bg-gray-200 p-4">
      <Marquee>
        <div className="flex justify-evenly w-full">
          {marqueeItems.map((item, index) => (
            <MarqueeItem key={index} icon={item.icon} award={item.award} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeH;
