export const metadata = {
  title: "Proyectos | Jordan Tejada",
  description:
    "Explora proyectos fullstack desarrollados por Jordan, incluyendo aplicaciones e-commerce, sistemas de soporte y chat en tiempo real.",
};

const projects = [
  {
    title: "E-commerce",
    description:
      "Plataforma e-commerce full stack con gestión de productos, categorías, carrito de compras, usuarios, direcciones y pedidos.",
    tech: [
      "React",
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JPA / Hibernate",
      "Cloudinary",
    ],
    githubFrontend: "https://github.com/jordantejadadev/ecommerce-frontend",
    githubBackend: "https://github.com/jordantejadadev/ecommerce",
    link: "https://ecommerce-frontend-jet-five.vercel.app",
    image: "/projects/ecommerce.webp",
  },
  {
    title: "SupportDesk",
    description:
      "Sistema de gestión de tickets de soporte con autenticación, roles, administración de usuarios y actualización de tickets en tiempo real.",
    tech: [
      "React",
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "JWT",
      "WebSocket",
      "Docker",
    ],
    githubFrontend: "https://github.com/jordantejadadev/supportdesk-frontend",
    githubBackend: "https://github.com/jordantejadadev/supportdesk-backend",
    link: "https://supportdesk-frontend-nine.vercel.app",
    image: "/projects/supportdesk.webp",
  },
  {
    title: "Chat",
    description:
      "Aplicación de chat en tiempo real desarrollada con React y Spring Boot, con comunicación mediante WebSocket.",
    tech: ["React", "Spring Boot", "Supabase", "Tailwind CSS", "WebSocket"],
    githubFrontend: "https://github.com/jordantejadadev/chat-frontend",
    githubBackend: "https://github.com/jordantejadadev/chat-backend",
    link: "https://chat-frontend-delta-navy.vercel.app",
    image: "/projects/chat.webp",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-black px-4 py-20 text-white fade">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          📁 Proyectos
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex h-full flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm transition hover:scale-105 hover:border-blue-500"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 h-40 w-full rounded-lg border border-white/10 object-cover transition hover:opacity-90 hover:brightness-110"
                />
              )}

              <div>
                <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-400">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm text-gray-300">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-white/10 pt-4 text-sm">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-gray-300 transition-colors hover:bg-white hover:text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                {/* Ver proyecto */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-lg bg-blue-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
                >
                  Ver proyecto
                </a>

                {/* GitHub */}
                <div className="flex flex-col gap-2 sm:flex-row">
                  <a
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-white/20 px-3 py-2 text-center text-sm text-gray-300 transition hover:bg-white hover:text-black"
                  >
                    GitHub Frontend
                  </a>

                  <a
                    href={project.githubBackend}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-white/20 px-3 py-2 text-center text-sm text-gray-300 transition hover:bg-white hover:text-black"
                  >
                    GitHub Backend
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
