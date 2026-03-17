import AnimatedSection from '../components/AnimatedSection'
import DeveloperCard from '../components/DeveloperCard'
import { developers } from '../data/developers'

export default function Developers() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="mb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-primary">The Team</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white font-display mb-6 leading-tight">
              Meet the <span className="gradient-text">builders</span>
            </h1>
            <p className="text-lg text-surface-400 leading-relaxed">
              A small but mighty team of engineers and designers who are passionate about
              shipping world-class digital products.
            </p>
          </div>
        </AnimatedSection>

        {/* Developer Cards */}
        <AnimatedSection stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {developers.map((dev, i) => (
            <DeveloperCard key={dev.id} developer={dev} index={i} />
          ))}
        </AnimatedSection>

        {/* Team Values */}
        <AnimatedSection className="mt-24">
          <div className="glass-card glow-border rounded-3xl p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white font-display mb-12 text-center">How We Work</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: 'rocket_launch',
                    title: 'Ship Fast',
                    description: 'We believe in rapid iteration. Get from idea to production in weeks, not months.',
                  },
                  {
                    icon: 'diamond',
                    title: 'Quality First',
                    description: 'Every pixel, every function, every API call is crafted with care and intention.',
                  },
                  {
                    icon: 'handshake',
                    title: 'True Partners',
                    description: 'We\'re not just vendors. We embed ourselves in your mission and care about outcomes.',
                  },
                ].map((val, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <span className="material-symbols-outlined text-primary text-3xl">{val.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white font-display mb-2">{val.title}</h3>
                    <p className="text-surface-400 text-sm leading-relaxed">{val.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
