interface Props {
  name: string;
  desc: string;
  img: string;
}

function FoundersPage({ name, desc, img }: Props) {
  return (
    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center justify-center p-4">
      <div className="w-32 h-32 md:w-40 md:h-40 bg-third rounded-full overflow-hidden flex justify-center items-center">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-3/5 h-auto p-4 text-white flex flex-col justify-center mt-4 md:mt-0 md:ml-4">
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-center md:text-left">{name}</h2>
        <p className="text-md md:text-base text-center md:text-left">{desc}</p>
      </div>
    </div>
  );
}

function MissionPage() {
  // Array of founders with their data
  const founders = [
    {
      name: "Hani Mahdi",
      desc: "Hani is a passionate leader focused on educational initiatives and community outreach. They are dedicated to ensuring that every individual has access to high-quality learning opportunities.",
      img: "/assets/hani.jpg", // Replace with the correct image path
    },
    {
      name: "Sandro Shtikov",
      desc: "Sandro brings innovation and technology expertise to empower youth education. He believes that technology is key to driving forward educational equity and accessibility.",
      img: "/assets/sandro.jpg", // Replace with the correct image path
    },
  ];

  return (
    <section id="mission" className="w-screen bg-gradient-to-l from-fourth to-main text-white py-10 px-4">
      <div className="w-full text-4xl md:text-5xl font-bold h-24 font-robotoSlab text-center mb-2">
        <h1 className="h-full" >Meet Our Founders</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6">
        {founders.map((founder, index) => (
          <FoundersPage
            key={index}
            name={founder.name}
            desc={founder.desc}
            img={founder.img}
          />
        ))}
      </div>
    </section>
  );
}

export default MissionPage;
