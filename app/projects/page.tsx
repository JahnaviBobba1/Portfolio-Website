import Link from "next/link";

const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "Vercel"],
    link: "https://your-portfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager App",
    description: "A full-stack task manager using React, Node.js, and MongoDB.",
    tech: ["React", "Express", "MongoDB"],
    link: "https://taskapp-demo.com",
    github: "https://github.com/yourusername/task-manager",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-purple-900 text-white">
      {/* Navbar */}
      <nav className="w-full px-8 py-6 flex justify-between items-center bg-purple-800 shadow-md">
        <h1 className="text-2xl font-bold text-white">Jahnavi</h1>
        <div className="space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="/projects" className="text-purple-200 font-semibold">Projects</Link>
          <Link href="/contact" className="hover:text-purple-300 transition">Contact</Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-10">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-purple-800 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 border-t-4 border-purple-400"
            >
              <h2 className="text-xl font-semibold mb-2 text-purple-200">{project.title}</h2>
              <p className="text-purple-100 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-700 text-purple-100 text-sm px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-300 hover:underline"
                >
                  Live Demo →
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-purple-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-block px-6 py-2 text-white border border-white rounded hover:bg-white hover:text-purple-900 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
