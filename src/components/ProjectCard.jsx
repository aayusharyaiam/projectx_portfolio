import { Link } from 'react-router-dom'

export default function ProjectCard({ project, index }) {
  return (
    <div
      className="group flex flex-col gap-5"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-surface-800 bg-card">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-hover"
            >
              Visit Live
              <span className="material-symbols-outlined text-sm">open_in_new</span>
            </a>
          )}
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-surface-300 text-xs font-bold border border-surface-700/50">
            {project.year}
          </span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-1.5 font-display group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-surface-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-surface-800 text-surface-400 text-[10px] uppercase font-bold tracking-widest hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
