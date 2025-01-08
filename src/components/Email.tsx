import { useEffect } from "react";

const BrevoForm = () => {
  useEffect(() => {
    // Inject Brevo form scripts dynamically
    const loadBrevoScripts = () => {
      const script1 = document.createElement("script");
      script1.src = "https://sibforms.com/forms/end-form/build/main.js";
      script1.defer = true;

      const script2 = document.createElement("script");
      script2.src = "https://www.google.com/recaptcha/api.js?hl=en";

      document.body.appendChild(script1);
      document.body.appendChild(script2);
    };

    loadBrevoScripts();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center p-6 rounded-lg max-w-md mx-auto">
      <style>
        {`
        @font-face {
          font-display: block;
          font-family: Roboto;
          src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff");
        }

        @font-face {
          font-display: fallback;
          font-family: Roboto;
          font-weight: 600;
          src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff");
        }

        #sib-container input::placeholder {
          color: #c0ccda;
        }
      `}
      </style>

      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />

      <div id="sib-form-container" className="w-full">
        <form
          id="sib-form"
          method="POST"
          action="https://9dba397e.sibforms.com/serve/MUIFAHQwvEqqNSQPVFmlY_5w2QgBJL-_Hq1uUaJSoDYUsDDl1iEyeF2Wkr_BHg20HIuv5yRywPtdnz3RhBEDOndvgGqAoQsyTQzX7AwxtKHZMNXB7koqtSINtRxaDhLN1CxwgZry7FtjDcEq4ON_n9cUU3Dt0nUf58VJDgVhyeoBKHVFYk-OSb_vKOYZtNgkqfYGrLRrvdXNuU0s"
          data-type="subscription"
          className="flex flex-col items-center space-y-4"
        >
          <div>
            <img
              src="https://img.mailinblue.com/8591632/images/content_library/original/677ddd6b7555f4d1cf639995.png"
              alt="Logo"
              className="w-20 h-20 mx-auto"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">
            Newsletter
          </h2>
          <p className="text-sm text-gray-600">
            Subscribe to our newsletter and stay updated.
          </p>
          <div className="w-full">
            <input
              type="email"
              id="EMAIL"
              name="EMAIL"
              required
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrevoForm;
