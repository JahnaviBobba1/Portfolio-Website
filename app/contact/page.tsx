import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      {/* Navbar */}
      <nav className="w-full px-8 py-6 flex justify-between items-center bg-white/10 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-purple-300">Jahnavi</h1>
        <div className="space-x-6 text-lg font-medium">
          <Link href="/" className="hover:text-purple-200 transition">Home</Link>
          <Link href="/projects" className="hover:text-purple-200 transition">Projects</Link>
          <Link href="/contact" className="hover:text-purple-200 transition">Contact</Link>
        </div>
      </nav>

      {/* Contact Section */}
      <main className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-xl p-10 shadow-2xl space-y-8">
          <h1 className="text-4xl font-bold text-center text-purple-300">Get in Touch</h1>
          <p className="text-center text-gray-300">
            Have a question or want to work together? Fill out the form below or email me directly at{" "}
            <a
              href="mailto:you@example.com"
              className="text-purple-400 underline hover:text-purple-200 transition"
            >
              you@example.com
            </a>
          </p>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-white/20 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded bg-white/20 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Your message..."
                className="w-full p-3 rounded bg-white/20 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 transition rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
