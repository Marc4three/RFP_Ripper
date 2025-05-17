import { motion } from 'framer-motion'
import { 
  KeyIcon,
  SparklesIcon,
  ShareIcon,
  BuildingOfficeIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline'

const roadmapItems = [
  {
    icon: KeyIcon,
    title: "Authentication",
    description: "Secure user authentication and role-based access"
  },
  {
    icon: SparklesIcon,
    title: "AI Extraction",
    description: "Enhanced AI-powered field extraction"
  },
  {
    icon: ShareIcon,
    title: "Planner/SharePoint",
    description: "Integration with Microsoft 365"
  },
  {
    icon: BuildingOfficeIcon,
    title: "Multi-Tenant SaaS",
    description: "Scalable multi-tenant architecture"
  },
  {
    icon: ArrowDownTrayIcon,
    title: "Exports",
    description: "Advanced export capabilities"
  }
]

export default function Roadmap() {
  return (
    <section className="min-h-screen relative section-padding">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/10 to-dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Phase 2 Roadmap
          </h2>
          <p className="text-xl text-white/80">
            Future enhancements and integrations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(33, 194, 248, 0.2)"
              }}
              className="glass-card p-8 rounded-xl relative overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="p-4 bg-accent/10 rounded-full w-fit mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-white/80 italic">
            These features will be developed based on user feedback and business needs
          </p>
        </motion.div>
      </div>
    </section>
  )
} 