import AnimatedSection from '../components/AnimatedSection'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Portfolio</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-display mb-6 leading-tight">
              Work that speaks <span className="gradient-text">for itself</span>
            </h1>
            <p className="text-lg text-surface-400 leading-relaxed max-w-2xl">
              Every project is a partnership. Here's a selection of platforms we've designed and
              engineered for ambitious teams pushing boundaries.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatedSection stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatedSection>

        {/* Project Details Sections */}
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} className="mt-24">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <span
                  className="text-xs font-bold uppercase tracking-widest mb-4 block"
                  style={{ color: project.color }}
                >
                  {project.category} · {project.year}
                </span>
                <h2 className="text-3xl font-bold text-white font-display mb-4">{project.title}</h2>
                <p className="text-surface-400 leading-relaxed mb-6">{project.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, val]) => (
                    <div key={key} className="glass-card p-4 rounded-xl text-center">
                      <p className="text-xl font-bold text-white font-display">{val}</p>
                      <p className="text-xs text-surface-500 uppercase tracking-wider capitalize">{key}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-surface-800 text-surface-400 text-xs font-bold uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-primary text-white px-6 py-3 rounded-xl font-bold glow-hover"
                  >
                    Visit Live Site
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                  </a>
                )}
              </div>

              <div className={`relative group ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div
                  className="absolute -inset-4 rounded-3xl blur-3xl opacity-10 group-hover:opacity-25 transition-opacity"
                  style={{ backgroundColor: project.color }}
                />
                <div className="relative rounded-2xl overflow-hidden border border-surface-800 aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </main>
  )
}
