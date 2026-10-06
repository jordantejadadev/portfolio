import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com/jordantejadadev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://linkedin.com/in/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:tu@email.com"
          className="hover:text-white transition"
        >
          <FaEnvelope size={20} />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} MiPortafolio. Todos los derechos reservados.
      </div>
    </footer>
  );
}
