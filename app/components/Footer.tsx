import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800 px-6 py-8 text-sm text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p>
          Spotify UI Clone — built with React & Tailwind CSS
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span>
            Built by{" "}
            <span className="text-white font-medium">
              <strong>AAKASH</strong>
            </span>
          </span>

          <a
            href="https://github.com/aako-aakash"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-kumar-saw-bb1630258/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
