function Events() {
    const events = [
      {
        date: "August 2024",
        title: "Web Development Basics Course",
        img: "/WebDev.jpeg",  // Add image path
        desc: "A course to get you started with web development, covering HTML, CSS, and JavaScript.",
      },
      {
        date: "December 2024",
        title: "Northview Hacks",
        img: "/NorthviewHacks.jpeg",
        desc: "The exciting hackathon event in collaboration with TDSB where students compete to build innovative projects. Huge Thanks to our team above!",
      },
      {
        date: "December 2024 - January 2025",
        title: "Canadian Computing Competition Prep Course",
        img: "/CCC.png",  // Add image path
        desc: "Prepare for the Canadian Computing Competition with Hani, we went through the 2024 previous problems.",
      },
      {
        date: "February 2025 [Coming Soon]",
        title: "Javascript Essentials",
        img: "/JSE.jpeg",  // Add image path
        desc: "Learn the fundamentals of JavaScript, one of the most popular programming languages.",
      },
      {
        date: "March 2025 [Coming Soon]",
        title: "React Basics",
        img: "/RE.png",  // Add image path
        desc: "Get to know the basics of React, a powerful JavaScript library for building UIs.",
      },
    ];
  
    return (
      <>
        <h1 id="events" className="w-screen text-center font-robotoSlab text-5xl h-14 mt-10 mb-6">Events</h1>
        <section className="w-screen h-auto grid grid-cols-1 p-10  sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {events.map((event, index) => (
            <div key={index} className="event-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
              <img src={event.img} alt={event.title} className="w-full h-60 object-cover rounded-lg mb-4" />
              <div className="event-details">
                <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                <p className="text-gray-700 text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }
  
  export default Events;
  