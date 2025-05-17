import { motion } from 'framer-motion'
import { 
  DocumentArrowUpIcon,
  DocumentTextIcon,
  PencilSquareIcon,
  ChartBarIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

const scopeItems = [
  {
    icon: DocumentArrowUpIcon,
    title: "Uploading",
    description: "Secure document upload with drag-and-drop support"
  },
  {
    icon: DocumentTextIcon,
    title: "Parsing",
    description: "AI-powered extraction of key RFP information"
  },
  {
    icon: PencilSquareIcon,
    title: "Edit UI",
    description: "Intuitive interface for reviewing and editing"
  },
  {
    icon: ChartBarIcon,
    title: "Status Tracking",
    description: "Real-time progress monitoring and reporting"
  },
  {
    icon: ComputerDesktopIcon,
    title: "Front-End",
    description: "Modern, responsive web interface"
  }
]

export default function Scope() {
  return (
    <section className="min-h-screen relative section-padding">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-primary/5 to-dark" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
            Scope of Work
          </h2>
          <p className="text-xl text-white/80">
            Comprehensive solution covering all aspects of RFP processing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scopeItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-xl"
            >
              <div className="flex flex-col space-y-4">
                <div className="p-4 bg-accent/10 rounded-full w-fit">
                  <item.icon className="w-8 h-8 text-accent" />
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/80 italic">
            Includes source code and comprehensive usage instructions
          </p>
        </motion.div>
      </div>
    </section>
  )
} 