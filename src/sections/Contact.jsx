import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_he607n1",
        "template_c761ehk",
        form.current,
        "zlFPaPRRU7xj21TTO"
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          setError(true);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="py-16 bg-primary-100">
      <h2 className="text-4xl font-bold text-center text-primary-800 mb-10">
        Get In Touch
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          className="w-full px-4 py-3 rounded-lg min-h-[120px]"
          required
        />
        <button
          type="submit"
          className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
        >
          Send Message
        </button>
        {sent && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
            <div className="bg-white px-8 py-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">Success!</h3>
              <p className="mb-4">Message sent successfully!</p>
              <button
                onClick={() => setSent(false)}
                className="bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
        {error && (
          <p className="text-red-600 mt-2">
            Failed to send message. Please try again.
          </p>
        )}
      </form>

      <div className="text-center mt-8">
        <p>Or email me directly at: </p>
        <a
          href="mailto:kevin11bobis02@gmail.com"
          className="text-primary-600 font-medium"
        >
          kevin11bobis02@gmail.com
        </a>
      </div>

      <div className="text-center mt-8">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/kevinzxcb/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800"
          >
            <img src="/facebook.png" alt="Facebook" className="w-7 h-7" />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800"
          >
            <img src="/instagram.png" alt="Instagram" className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/deiv-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800"
          >
            <img src="/github-sign.png" alt="GitHub" className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/kevin-bobis-525732258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-800"
          >
            <img src="/linkedin.png" alt="GitHub" className="w-7 h-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;