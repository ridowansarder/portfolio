import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projectsList = [
  {
    id: 1,
    title: "Software Agency Landing Page",
    description: "A beautiful landing page app using Next.Js and Tailwind.",
    image: "/projects/project1.png",
    tags: ["Next.Js", "TailwindCSS"],
    demoUrl: "https://codewan-saas.vercel.app/",
    githubUrl: "https://github.com/ridowansarder/portfolio.git",
  },
  {
    id: 2,
    title: "Hotel Booking Website",
    description:
      "A hotel booking website built with React.js and TypeScript.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "React.js", "TailwindCSS"],
    demoUrl: "https://snorvo-hotel.vercel.app/",
    githubUrl: "https://github.com/ridowansarder/snorvo-hotel.git",
  },
  {
    id: 3,
    title: "E-commerce Frontend",
    description:
      "An e-commerce web frontend built with Next.Js and TailwindCSS.",
    image: "/projects/project3.png",
    tags: ["Next.js", "TailwindCSS", "TypeScript"],
    demoUrl: "https://ecomm-snorvo.vercel.app/",
    githubUrl: "https://github.com/ridowansarder/ecomm-snorvo.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="shadow-lg rounded-lg overflow-hidden card-hover bg-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-8">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 items-center">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ridowansarder"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
