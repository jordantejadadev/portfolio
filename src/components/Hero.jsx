import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-hero.webp')" }}
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center fade-up">

        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl typewriter">
          Hola, soy <span className="text-blue-500">Jordan</span>
        </h1>

        <h2 className="mb-6 text-2xl font-semibold text-gray-200 md:text-3xl">
          Desarrollador Full Stack
        </h2>

        <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
          Construyo aplicaciones web modernas utilizando
          <br />
          Java, Spring Boot, React y PostgreSQL.
        </p>

        <Link
          href="/projects"
          className="mt-8 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Ver proyectos
        </Link>

      </div>
    </section>
  );
}