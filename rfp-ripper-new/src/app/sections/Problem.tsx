import { motion } from 'framer-motion'
import { DocumentTextIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const painPoints = [
  {
    icon: DocumentTextIcon,
    title: "Manual Data Entry",
    description: "Hours spent copying and pasting information from PDFs"
  },
  {
    icon: ClockIcon,
    title: "Time-Consuming",
    description: "Days wasted on repetitive tasks that could be automated"
  },
  {
    icon: ExclamationTriangleIcon,
    title: "Error-Prone",
    description: "High risk of mistakes when handling complex documents"
  }
]

export default function Problem() {
  return (
    <section className="min-h-screen relative section-padding">
      {/* Parallax background */}
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
            Manual RFP workflows are slow, painful, and risky
          </h2>
          <p className="text-xl text-white/80">
            Traditional methods are holding your team back
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 rounded-xl"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <point.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="text-white/60">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 