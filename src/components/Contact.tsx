import EmailIcon from '../assets/Email.svg';
import InstaIcon from '../assets/Insta.svg';
import LinkIcon from '../assets/Link.svg'; 

function Contact() {
  return (
    <section
      id="contact"
      className="w-full my-20 py-12 bg-gradient-to-r from-main to-fourth flex justify-center"
    >
      <div className="max-w-screen-lg w-full text-center px-6">
        <h2 className="text-4xl font-semibold text-white mb-6 h-20">Get in Touch</h2>
        <p className="text-xl text-white mb-8">
          Connect with us through any of the platforms below.
        </p>
        <div className="w-full h-40 flex flex-row justify-center items-center">
          {/* Email Button */}
          <a
            href="mailto:example@example.com"
            className="w-20 h-20 mx-6 bg-gray-200 border border-gray-300 shadow-lg rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform"
            aria-label="Email"
          >
            <img src={EmailIcon} alt="Email" className="w-10 h-10" />
          </a>

          {/* Instagram Button */}
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 mx-6 bg-gray-200 border border-gray-300 shadow-lg rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform"
            aria-label="Instagram"
          >
            <img src={InstaIcon} alt="Instagram" className="w-10 h-10" />
          </a>

          {/* Link Button */}
          <a
            href="https://www.yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 mx-6 bg-gray-200 border border-gray-300 shadow-lg rounded-lg flex items-center justify-center transform hover:scale-105 transition-transform"
            aria-label="Website"
          >
            <img src={LinkIcon} alt="Link" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
