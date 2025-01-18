import Logo from "../assets/Logo.png"

function MissionPage() {
  return (
    <>
      {/* Desktop Layout */}
      <section className="hidden md:flex w-screen h-full flex-row items-center justify-center bg-main px-10 py-4">
        <div className="h-96 w-1/5 bg-fourth"></div>
        <div className="h-96 m-4 w-3/5 bg-gray-100 px-6 py-4 flex flex-col items-center">
          <h1 className="w-full text-center font-robotoSlab text-white font-medium text-2xl bg-main">
            Founder - Web Developer - Social Media Manager
          </h1>
          <h1 className="w-full text-center font-robotoSlab text-4xl mt-10 h-20 font-heavy">
            Hani Mahdi
          </h1>
          <p className="w-5/6 text-center leading-loose">
            Hani Mahdi is the founder of EmTech, a company dedicated to
            creating innovative digital solutions. As a web developer, he
            designs and optimizes platforms to ensure seamless functionality.
            In his role as a social media manager, Hani crafts strategies to
            enhance the brand’s online presence. His expertise and
            forward-thinking approach continue to drive EmTech’s success in the
            digital space.
          </p>
        </div>
      </section>

      {/* Mobile Layout */}
      <div className="w-screen h-full md:hidden font-robotoSlab">
        <div className="w-screen h-24 bg-secondary flex flex-row items-center justify-between">
          <div className="w-1/3 h-24 ml-4 flex flex-row items-center justify-center">
            <img className="h-4/5" src={Logo} />
          </div>
          <div className="w-2/3 h-24 mx-8 flex flex-row items-center justify-center">
            <h1 className="text-white w-full text-center h-1/2 align-middle text-4xl ">
            Hani Mahdi
            </h1>
            </div>
        </div>
        <div className="h-80 bg-main"></div>
        <div className="h-20 bg-secondary text-md flex flex-row items-center justify-center font-bold text-center text-white">
          <h1>Founder - Web Developer - Social Media Manager</h1>
        </div>
      </div>
    </>
  );
}

export default MissionPage;
