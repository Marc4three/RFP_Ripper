import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const steps = [
  {
    title: "Upload File",
    description: "Simply drag and drop your RFP document"
  },
  {
    title: "Extract Fields",
    description: "AI-powered extraction of key information"
  },
  {
    title: "Review + Edit",
    description: "Easy-to-use interface for verification"
  },
  {
    title: "Store",
    description: "Secure storage in your existing systems"
  }
]

const timeline = [
  {
    week: "Weeks 1-2",
    title: "Setup & Configuration",
    description: "Initial setup and system configuration"
  },
  {
    week: "Weeks 3-4",
    title: "Core Development",
    description: "Building the main functionality"
  },
  {
    week: "Weeks 5-6",
    title: "Testing & Refinement",
    description: "Rigorous testing and improvements"
  },
  {
    week: "Weeks 7-8",
    title: "Deployment & Training",
    description: "System deployment and team training"
  }
]

export default function Solution() {
  return (
    <section className="min-h-screen relative section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Solution (Phase 1 MVP)
          </h2>
          <p className="text-xl text-white/80">
            A streamlined workflow that saves time and reduces errors
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-4 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl relative"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-white/60">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <ArrowRightIcon className="w-6 h-6 text-accent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-4 gap-4">
          {timeline.map((item, index) => (
            <motion.div
              key={item.week}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 rounded-xl"
            >
              <div className="space-y-4">
                <div className="text-accent font-semibold">
                  {item.week}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-white/60">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 