import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="w-full my-20 py-12 bg-gradient-to-r from-main to-fourth flex justify-center">
      <div className="max-w-screen-lg w-full text-center px-6">
        <h2 className="text-4xl font-semibold text-white mb-6 h-20">Get in Touch</h2>
        <p className="text-xl text-white mb-8">
          Connect with us through any of the platforms below.
        </p>
        <div className="flex flex-wrap justify-center space-x-12 space-y-6 sm:space-x-8">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-4xl text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110 align-middle"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center text-4xl text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110 align-middle"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="flex justify-center items-center text-4xl text-white hover:text-green-400 transition-all duration-300 transform hover:scale-110 align-middle"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
