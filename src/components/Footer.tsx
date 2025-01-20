import Logo from "../assets/Logo.png";

function Footer() {
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const email = e.target.elements.email.value;

    try {
      const response = await fetch(
        "https://9dba397e.sibforms.com/serve/MUIFAHQwvEqqNSQPVFmlY_5w2QgBJL-_Hq1uUaJSoDYUsDDl1iEyeF2Wkr_BHg20HIuv5yRywPtdnz3RhBEDOndvgGqAoQsyTQzX7AwxtKHZMNXB7koqtSINtRxaDhLN1CxwgZry7FtjDcEq4ON_n9cUU3Dt0nUf58VJDgVhyeoBKHVFYk-OSb_vKOYZtNgkqfYGrLRrvdXNuU0s",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ EMAIL: email }).toString(),
        }
      );

      if (response.ok) {
        alert("Thank you for subscribing!");
        e.target.reset();
      } else {
        alert("Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <footer className="w-screen h-auto bg-secondary text-white">
        <section className="w-full max-w-screen-xl mx-auto p-8 flex flex-col sm:flex-row justify-between items-start">
          <div className="flex flex-col sm:flex-row sm:items-start sm:w-3/5 w-full">
            <div className="flex flex-row justify-evenly items-center w-full mb-6 sm:mb-0">
              <div className="flex items-center justify-center sm:w-1/5">
                <div className="w-24 h-24 flex items-center justify-center">
                  <a href="#">
                  <img src={Logo} alt="Logo" />
                  </a>
                </div>
              </div>
              <ul className="flex flex-col space-y-2 text-left sm:w-1/3">
                <li><a href="#found" className="hover:underline">Founders</a></li>
                <li><a href="#about" className="hover:underline">Mission</a></li>
                <li><a href="#program" className="hover:underline">Programs</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 sm:w-full">
              <p className="text-sm leading-relaxed sm:text-left text-center">
                Welcome to our website! We are dedicated to empowering communities
                through innovative programs and a mission-driven approach. Our founders
                are committed to building a brighter future for everyone.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-end sm:w-2/6 mt-6 sm:mt-0">
            <p className="mb-2 text-sm">Stay updated! Subscribe to our newsletter:</p>
            <form onSubmit={handleSubmit} className="flex w-full">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-l-md pl-4 border-none text-black focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-2 w-3/5 sm:w-2/5 py-2 bg-main text-white rounded-r-md hover:bg-fourth"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <div className="w-full text-center py-4 border-t border-gray-700">
          <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
