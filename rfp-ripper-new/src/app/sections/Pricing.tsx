import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const pricingItems = [
  {
    title: "Month 1",
    price: "$10,000",
    description: "Initial setup and core development",
    features: [
      "System architecture",
      "Basic UI implementation",
      "Document upload functionality"
    ]
  },
  {
    title: "Month 2",
    price: "$10,000",
    description: "Advanced features and testing",
    features: [
      "AI extraction implementation",
      "Edit interface development",
      "Testing and refinement"
    ]
  },
  {
    title: "Month 3",
    price: "$5,000",
    description: "Final deployment and training",
    features: [
      "System deployment",
      "Team training",
      "Documentation"
    ]
  }
]

export default function Pricing() {
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
            Investment
          </h2>
          <p className="text-xl text-white/80">
            Transparent pricing with clear deliverables
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-8 rounded-xl border border-accent/20"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="text-3xl font-bold text-accent mb-2">
                    {item.price}
                  </div>
                  <p className="text-white/60">
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-4">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <CheckIcon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="glass-card p-8 rounded-xl inline-block">
            <div className="text-2xl font-bold text-white">
              Total Investment: <span className="text-accent">$25,000</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 