import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-surface-800/50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                  terminal
                </span>
              </div>
              <span className="text-xl font-bold text-white font-display">DevStudio</span>
            </Link>
            <p className="text-surface-500 text-sm leading-relaxed">
              High-performance digital products for ambitious brands and startups. Built with precision and care.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary hover:bg-surface-700 transition-colors" aria-label="Website">
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary hover:bg-surface-700 transition-colors" aria-label="GitHub">
                <span className="material-symbols-outlined text-xl">code</span>
              </a>
            </div>
          </div>

          {/* Studio */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Studio</h4>
            <ul className="flex flex-col gap-4 text-sm text-surface-500">
              <li><Link to="/work" className="hover:text-primary transition-colors">Work</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/developers" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Expertise */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Expertise</h4>
            <ul className="flex flex-col gap-4 text-sm text-surface-500">
              <li><span className="hover:text-primary transition-colors cursor-default">Web Development</span></li>
              <li><span className="hover:text-primary transition-colors cursor-default">Mobile Engineering</span></li>
              <li><span className="hover:text-primary transition-colors cursor-default">UI/UX Design</span></li>
              <li><span className="hover:text-primary transition-colors cursor-default">Cloud Infrastructure</span></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Connect</h4>
            <ul className="flex flex-col gap-4 text-sm text-surface-500">
              <li><a href="mailto:hi@devstudio.com" className="hover:text-primary transition-colors">hi@devstudio.com</a></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Schedule a Call</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter (X)</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-surface-800/50 gap-4">
          <p className="text-surface-600 text-sm">© 2025 DevStudio. All rights reserved.</p>
          <div className="flex gap-8 text-sm text-surface-600">
            <a href="#" className="hover:text-surface-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-surface-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
