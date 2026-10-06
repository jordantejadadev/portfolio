import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiSpringboot,
  SiSpringsecurity,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiExpress,
} from "react-icons/si";

const techGroups = [
  {
    title: "Frontend",
    technologies: [
      { icon: <FaReact className="text-cyan-400" />, name: "React" },
      { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
      { icon: <FaJsSquare className="text-yellow-300" />, name: "JavaScript" },
      { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
      { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
      {
        icon: <SiTailwindcss className="text-sky-400" />,
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Backend",
    technologies: [
      { icon: <FaJava className="text-red-500" />, name: "Java" },
      {
        icon: <SiSpringboot className="text-green-500" />,
        name: "Spring Boot",
      },
      {
        icon: <SiSpringsecurity className="text-green-600" />,
        name: "Spring Security",
      },
      { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
      { icon: <SiExpress className="text-gray-300" />, name: "Express" },
    ],
  },
  {
    title: "Bases de datos",
    technologies: [
      { icon: <SiPostgresql className="text-blue-400" />, name: "PostgreSQL" },
      { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    ],
  },
  {
    title: "Herramientas",
    technologies: [
      { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
      { icon: <FaGithub className="text-white" />, name: "GitHub" },
      { icon: <SiDocker className="text-blue-500" />, name: "Docker" },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="bg-white px-4 py-16 text-black dark:bg-black dark:text-white">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Tecnologías que uso
      </h2>

      <div className="mx-auto max-w-5xl space-y-12">
        {techGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-6 text-center text-xl font-semibold text-blue-500">
              {group.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-8">
              {group.technologies.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center space-y-2 transition duration-300 hover:scale-110"
                >
                  <div className="text-5xl">{item.icon}</div>

                  <span className="text-sm text-gray-400">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
