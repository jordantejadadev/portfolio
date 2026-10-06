import Image from "next/image";

export default function About() {
  return (
    <section className="bg-black px-6 py-20 text-white fade">
      <div className="mx-auto max-w-4xl">

        {/* Foto y título */}
        <div className="mb-12 text-center">
          <Image
            src="/jordan.webp"
            alt="Foto de Jordan"
            width={160}
            height={160}
            className="mx-auto rounded-full"
            priority
          />

          <h2 className="mt-6 text-3xl font-bold md:text-4xl">
            👨‍💻 Sobre mí
          </h2>
        </div>

        {/* Perfil profesional */}
        <div className="mb-8">
          <h3 className="mb-3 text-xl font-semibold">
            📌 Perfil profesional
          </h3>

          <p className="text-base leading-relaxed text-gray-300">
            Soy egresado de Ingeniería de Sistemas y desarrollador Full Stack,
            enfocado en la construcción de aplicaciones web modernas. Trabajo
            principalmente con Java, Spring Boot, Spring Security, React y
            PostgreSQL, desarrollando tanto el frontend como el backend de mis
            proyectos.
          </p>

          <p className="mt-4 text-base leading-relaxed text-gray-300">
            Durante mi aprendizaje he desarrollado proyectos completos que
            incluyen autenticación y autorización, gestión de usuarios,
            bases de datos, APIs REST, comunicación en tiempo real mediante
            WebSocket y despliegue de aplicaciones.
          </p>
        </div>

        {/* Formación académica */}
        <div className="mb-8">
          <h3 className="mb-3 text-xl font-semibold">
            🎓 Formación académica
          </h3>

          <ul className="space-y-2 text-base text-gray-300">
            <li>🎓 Ingeniería de Sistemas – UTP, Lima (2010 – 2018)</li>
            <li>📘 Inglés Avanzado – ICPNA (2019 – 2021)</li>
            <li>📘 Methodology for TFL – ICPNA (2021 – 2022)</li>
            <li>💻 Desarrollo Web Full Stack – FreeCodeCamp (2022 – 2025)</li>
            <li>🛠️ Técnico en Ensamblaje de PC – IPAL (2009 – 2010)</li>
          </ul>
        </div>

        {/* Conocimientos técnicos */}
        <div className="mb-8">
          <h3 className="mb-3 text-xl font-semibold">
            💻 Conocimientos técnicos
          </h3>

          <ul className="space-y-2 text-base text-gray-300">
            <li>
              🌐 <strong>Frontend:</strong> React, Next.js, JavaScript, HTML,
              CSS, Tailwind CSS
            </li>

            <li>
              ⚙️ <strong>Backend:</strong> Java, Spring Boot, Spring Security,
              Node.js, Express
            </li>

            <li>
              🗄️ <strong>Bases de datos:</strong> PostgreSQL, MongoDB,
              JPA / Hibernate
            </li>

            <li>
              🔐 <strong>Seguridad:</strong> JWT, autenticación y autorización
              basada en roles
            </li>

            <li>
              🔄 <strong>Comunicación en tiempo real:</strong> WebSocket
            </li>

            <li>
              🔧 <strong>Herramientas:</strong> Git, GitHub, Docker
            </li>

            <li>
              ☁️ <strong>Despliegue:</strong> Vercel, Render y Supabase
            </li>
          </ul>
        </div>

        {/* Habilidades blandas */}
        <div className="mb-8">
          <h3 className="mb-3 text-xl font-semibold">
            🤝 Habilidades
          </h3>

          <ul className="space-y-2 text-base text-gray-300">
            <li>✅ Aprendizaje continuo</li>
            <li>✅ Resolución de problemas</li>
            <li>✅ Responsabilidad</li>
            <li>✅ Adaptabilidad</li>
            <li>✅ Comunicación efectiva</li>
          </ul>
        </div>

        {/* Objetivo profesional */}
        <div className="mb-10">
          <h3 className="mb-3 text-xl font-semibold">
            🎯 Objetivo profesional
          </h3>

          <p className="text-base leading-relaxed text-gray-300">
            Seguir desarrollándome como profesional Full Stack, participando
            en proyectos donde pueda aplicar mis conocimientos, aprender nuevas
            tecnologías y contribuir al desarrollo de soluciones útiles,
            escalables y mantenibles.
          </p>
        </div>

        {/* CV */}
        <div className="text-center">
          <a
            href="/CV_Jordan_Tejada_2025.docx"
            download
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            📄 Descargar CV
          </a>
        </div>

      </div>
    </section>
  );
}
