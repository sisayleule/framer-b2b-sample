import React from 'react'
import { motion } from 'framer-motion'
import './WhyChooseUs.css'

const reasons = [
  'Clear communication and fast delivery',
  'Modern, conversion-focused design',
  'Scalable and maintainable solutions',
  'Attention to detail in every section'
]

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-us">
      <div className="container">
        <div className="why-content">
          <motion.div 
            className="why-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="why-title">Why Businesses Choose Us</h2>
            <p className="why-description">
              We combine technical expertise with business understanding to deliver solutions that truly make an impact.
            </p>
          </motion.div>
          
          <motion.div 
            className="why-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="reasons-list">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="reason-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="check-icon">✓</div>
                  <span>{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
