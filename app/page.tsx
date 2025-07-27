"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import FinsageDetails from "@/app/finsagedetails"; // ✅ note: no `.ts` or `.tsx` at the end
import PhotoEditorDetails from "@/app/photoEditor";
import PdfQaDetails from "@/app/pdfQaDetails";
import ReactMarkdown from "react-markdown";
import TaskQueueDetails from "@/app/taskQueueDetails";
import InscriptionPipelineDetails from "@/app/InscriptionPipelineDetails";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { SiPython, SiJavascript, SiCplusplus, SiGo, SiReact, SiNodedotjs, SiTensorflow, SiOpencv, SiFlask, SiGithub, SiApachekafka, SiApachehadoop } from "react-icons/si";
import SparkCursor from "@/app/SparkCursor";

 // adjust the path as needed

 type SkillItemProps = {
  icon: React.ReactNode;
  label: string;
};

const SkillItem = ({ icon, label }: SkillItemProps) => (
  <div className="flex flex-col items-center text-center text-white">
    <div className="text-4xl mb-2">{icon}</div>
    <p className="text-sm">{label}</p>
  </div>
);

const certificates = [
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/jahnavibo/intro-to-machine-learning", // optional
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/jahnavibo/intermediate-machine-learning",
  },
  {
    title: "Feature Engineering",
    issuer: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/jahnavibo/feature-engineering",
  },
  {
    title: "Intro to Deep Learning",
    issuer: "Kaggle",
    link: "https://www.kaggle.com/learn/certification/jahnavibo/intro-to-deep-learning",
  },
  {
    title: "Computer Vision",
    issuer: "Kaggle",
    link: "https://www.kaggle.com/learn/computer-vision",
  },
  
];



export default function Portfolio() {
  const [expandedProject, setExpandedProject] = useState(null);
  return (

    <>
    
    <SparkCursor />
    <div className="scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-slate-900 bg-opacity-70 backdrop-blur-sm z-50 text-white px-8 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-300">Jahnavi</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:text-teal-200">Home</a>
          <a href="#education" className="hover:text-teal-200">Education</a>
          <a href="#experience" className="hover:text-teal-200">Experience</a>
          <a href="#projects" className="hover:text-teal-200">Projects</a>
          <a href="#certificates" className="hover:text-teal-200">Certifcates</a>
          <a href="#contact" className="hover:text-teal-200">Contact</a>
          <a href="#skills" className="hover:text-teal-200">Skills</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6 pt-20">
        <div className="max-w-3xl text-center space-y-8">
          <div className="w-40 h-40 mx-auto relative rounded-full overflow-hidden border-4 border-teal-500 shadow-xl shadow-teal-700/40">
            <Image src="/photo.png" alt="Profile" layout="fill" objectFit="cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm <span className="text-teal-400">Jahnavi Bobba</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300">
            I’m a passionate computer science student deeply interested in all aspects of Artificial Intelligence—including generative AI, deep learning, computer vision, and natural language processing. Alongside my AI work, I’m also a full-stack developer with hands-on experience building applications using Flask, Node.js, and modern web technologies.. Always learning, always building.
          </p>
          <div className="flex justify-center gap-4">

            <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#education"
            className="border border-teal-400 hover:bg-teal-800 text-white transition px-6 py-3 rounded-lg font-semibold"
          >
            🎓 View Education
          </a>

          <a
            href="#experience"
            className="border border-teal-400 hover:bg-teal-800 text-white transition px-6 py-3 rounded-lg font-semibold"
          >
            💼 View Experience
          </a>

          <a
            href="#skills"
            className="border border-teal-400 hover:bg-teal-800 text-white transition px-6 py-3 rounded-lg font-semibold"
          >
            🛠️ View Skills
          </a>

          <a
            href="#certificates"
            className="border border-teal-400 hover:bg-teal-800 text-white transition px-6 py-3 rounded-lg font-semibold"
          >
            📜 View Certificates
          </a>

          <a
            href="#projects"
            className="border border-teal-400 hover:bg-teal-800 text-white transition px-6 py-3 rounded-lg font-semibold"
          >
            🚀 View Projects
          </a>

          <a
            href="#contact"
            className="border border-teal-400 hover:bg-teal-800 transition px-6 py-3 rounded-lg font-semibold text-white"
          >
            ✉️ Contact Me
          </a>
        </div>

            </div>
        </div>
      </section>

      {/*Education */}
      <section id="education" className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-4xl font-bold text-center text-teal-300 mb-6">📚 My Education</h2>

          <div className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-teal-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold text-teal-200">PES University</h3>
            <p className="text-slate-300">B.Tech in Computer Science & Engineering</p>
            <p className="text-slate-400">CGPA: <span className="text-white font-medium">8.66</span></p>
            <p className="text-slate-500 text-sm">2022 – 2026</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-teal-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold text-teal-200">Sri Chaitanya Techno School</h3>
            <p className="text-slate-300">Senior Secondary (12th Grade)</p>
            <p className="text-slate-400">Percentage: <span className="text-white font-medium">92.4%</span></p>
            <p className="text-slate-400">Subjects: Maths, Physics, Chemistry, Computer Science</p>
            <p className="text-slate-500 text-sm">2020 – 2022</p>
          </div>

          <div className="bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-teal-500/20 transition duration-300">
            <h3 className="text-2xl font-semibold text-teal-200">High School</h3>
            <p className="text-slate-300">10th Grade</p>
            <p className="text-slate-400">Percentage: <span className="text-white font-medium">94%</span></p>
            <p className="text-slate-400">Subjects: Maths, Science, Social Studies</p>
            <p className="text-slate-500 text-sm">2020</p>
          </div>
        </div>
      </section>


        {/* Experience */}
        <section id="experience" className="min-h-screen bg-slate-900 text-white py-20 px-6">
          <h2 className="text-4xl font-bold text-center text-teal-300 mb-16">My Experience</h2>

          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-white">Research Intern – CDSAML</h3>
              <p className="text-slate-400">Bengaluru, India · July 2024 – August 2024</p>
              <ul className="list-disc list-inside mt-4 text-slate-300 space-y-2">
                <li>Project: <strong>Measuring and Reducing Hallucinations in LLMs</strong></li>
                <li>Generated 10,000 hallucinated samples for QA, dialogue, tasks using HotpotQA and OpenDialKG datasets.</li>
                <li>Designed both one-pass (one-turn) and conversational (multi-turn) methods to induce hallucinations.</li>
                <li>Implemented general code, Chain of Thought, Chain-of-Verification and a hybrid COT and COV methods to reduce hallucinations.</li>
              </ul>
            </div>

            {/* Add more experiences here as needed in the same format */}
          </div>
        </section>

        {/* Projects Section */}
          <section id="projects" className="min-h-screen bg-slate-900 text-white py-20 px-6">
            <h2 className="text-4xl font-bold text-center text-teal-300 mb-16">My Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
              {[
                {
                  title: "Portfolio Website",
                  description: "A sleek personal portfolio built with Next.js and Tailwind CSS.",
                  tech: ["Next.js", "Tailwind", "Vercel"],
                  link: "#",
                  github: "#",
                },
                {
                  title: "Finsage – AI-Powered Finance Assistant",
                  description: "A full-stack personal finance platform offering smart insights, predictive budgeting, expense categorization, goal tracking, receipt OCR, and a natural language chatbot.",
                  fullDescription: <FinsageDetails />,
                  tech: ["React", "FastAPI", "PostgreSQL"],
                  link: "#",
                  github: "https://github.com/Keerthi-k4/FinSage",
                },
                {
                  title: "Multimodal PDF Q&A System",
                  fullDescription: <PdfQaDetails />,
                  description: "A multimodal PDF Q&A RAG system that interprets both text and images using Sentence-BERT and CLIP, enabling semantic retrieval via FAISS and answer generation through LLaMA.",
                  tech: ["Python", "LLama", "HuggingFace"],
                  link: "#",
                  github: "#",
                },
                {
                  title: "Yet Another Task Distributor",
                  description: "A fault-tolerant distributed task queue for emergency services, ensuring exactly-once execution and intelligent routing. Built with Python, Kafka, and Redis, it supports dynamic worker orchestration, heartbeat monitoring, and real-time status tracking.",
                  fullDescription: <TaskQueueDetails />,
                  tech: ["Python", "Kafka"],
                  link: "#",
                  github: "https://github.com/Cloud-Computing-Big-Data/RR-Team-12-yadtq-yet-another-distributed-task-queue-",
                },
                {
                  title: "Photo Editor",
                  description: "A python-based application for image processing with various filters and transformations.",
                  fullDescription: <PhotoEditorDetails />,
                  tech: ["Python", "OpenCV", "Tkinter"],
                  link: "#",
                  github: "https://github.com/JahnaviBobba1/Photo-editor",
                },
                {
                  title: "Denoising and Reconstruction of Rock Inscriptions",
                  description: "This end-to-end pipeline processes noisy or partially damaged inscription images—such as estampages—through two key stages to produce clean, high-fidelity reconstructions.",
                  fullDescription: <InscriptionPipelineDetails />,
                  tech: ["Python", "GAN", "Auto-Encoders"],
                  link: "#",
                  github: "#",
                },
              ].map((project, i) => {
                const isExpanded = expandedProject === i;

                return (
                  <div
                    key={i}
                    className={`${
                      isExpanded
                        ? "fixed inset-0 z-50 p-12 bg-[#0f172a] overflow-y-auto"
                        : ""
                    } bg-white/5 text-white p-10 rounded-3xl border border-slate-700 shadow-xl transition-all duration-500 ease-in-out backdrop-blur-md transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-teal-500/30 cursor-pointer`}
                    onClick={() => setExpandedProject(isExpanded ? null : i)}
                  >
                    <h3 className="text-2xl font-semibold text-teal-300">{project.title}</h3>
                    <p className="text-md text-slate-300 mt-4">{project.description}</p>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="bg-teal-600 text-white text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-4 text-sm">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          className="text-teal-300 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          🔗 Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          className="text-sky-300 hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          💻 GitHub
                        </a>
                      )}
                    </div>

                    {/* Full Description in expanded mode */}
                    {isExpanded && project.fullDescription && (
                      <div className="mt-6 text-slate-300 text-sm prose prose-invert max-w-none">
                        {project.fullDescription}

                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>


      {/* Skills */}

      
                
          <section id="skills" className="bg-slate-800 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-teal-300 mb-10">💻 My Skill Set</h2>

              {/* Programming Languages */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-teal-200 mb-4">🧠 Programming Languages</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillItem icon={<SiPython />} label="Python" />
                  <SkillItem icon={<SiCplusplus />} label="C++" />
                  <SkillItem icon={<SiJavascript />} label="JavaScript" />
                  <SkillItem icon={<SiGo />} label="GoLang" />
                
                 
                </div>
              </div>

              {/* Libraries & Frameworks */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-teal-200 mb-4">🧩 Libraries & Frameworks</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillItem icon={<SiReact />} label="React" />
                  <SkillItem icon={<SiNodedotjs />} label="Node.js" />
                  <SkillItem icon={<SiTensorflow />} label="TensorFlow" />
                  <SkillItem icon={<SiOpencv />} label="OpenCV" />
                  <SkillItem icon={<SiFlask />} label="Flask" />
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-semibold text-teal-200 mb-4">🛠️ Tools & Platforms</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  <SkillItem icon={<SiGithub />} label="GitHub" />
                  <SkillItem icon={<SiApachekafka />} label="Kafka" />
                  <SkillItem icon={<SiApachehadoop />} label="Hadoop" />
                </div>
              </div>
            </div>
          </section>


      {/* Certificates */}
      <section id="certificates" className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-teal-300 mb-10">📜 Certifications</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-teal-200">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mb-2">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 underline text-sm"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>


       

      {/* Contact Section */}

      <section id="contact" className="min-h-screen bg-slate-800 text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md rounded-xl p-10 shadow-xl space-y-8 text-center">
          <h2 className="text-4xl font-bold text-teal-300">Get in Touch</h2>

          <a
            href="mailto:jahnavi@example.com"
            className="inline-flex items-center justify-center gap-2 text-lg font-semibold text-teal-400 hover:text-teal-200 border border-teal-500 px-6 py-3 rounded-lg transition-all"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </a>

          <div className="flex justify-center gap-6 pt-6 text-slate-300">
            {/* GitHub */}
            <a href="https://github.com/JahnaviBobba1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Github className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/jahnavi-bobba-72325a2a9/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin className="w-6 h-6" />
            </a>

            {/* Resume */}
            <a href="/my-portfolio/public/Jahnavi_Bobba_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

    </div>
    
    </>
  );
}
