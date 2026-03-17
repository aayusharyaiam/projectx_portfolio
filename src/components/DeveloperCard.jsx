export default function DeveloperCard({ developer, index }) {
  const initials = developer.name.split(' ').map(n => n[0]).join('')

  return (
    <div
      className="glass-card glow-border rounded-3xl p-8 hover:bg-card-hover transition-all duration-500 group"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Avatar */}
      <div className="relative mb-6">
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center text-3xl font-bold font-display text-white mx-auto"
          style={{ background: `linear-gradient(135deg, ${developer.color}40, ${developer.color}15)` }}
        >
          {initials}
        </div>
        <div
          className="absolute -inset-2 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity"
          style={{ backgroundColor: developer.color }}
        />
      </div>

      {/* Info */}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white font-display mb-1">{developer.name}</h3>
        <p className="text-sm font-medium" style={{ color: developer.color }}>{developer.role}</p>
        <p className="text-surface-400 text-sm mt-3 leading-relaxed">{developer.bio}</p>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {developer.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 rounded-full bg-surface-800 text-surface-400 text-[10px] uppercase font-bold tracking-widest"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Socials */}
      <div className="flex justify-center gap-3">
        {developer.socials.github && (
          <a
            href={developer.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary hover:bg-surface-700 transition-colors"
            aria-label={`${developer.name} GitHub`}
          >
            <span className="material-symbols-outlined text-lg">code</span>
          </a>
        )}
        {developer.socials.linkedin && (
          <a
            href={developer.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary hover:bg-surface-700 transition-colors"
            aria-label={`${developer.name} LinkedIn`}
          >
            <span className="material-symbols-outlined text-lg">person</span>
          </a>
        )}
        {developer.socials.twitter && (
          <a
            href={developer.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center text-surface-400 hover:text-primary hover:bg-surface-700 transition-colors"
            aria-label={`${developer.name} Twitter`}
          >
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
        )}
      </div>
    </div>
  )
}
