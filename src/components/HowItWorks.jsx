import React from 'react'
import { motion } from 'framer-motion'
import './HowItWorks.css'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business goals and audience'
  },
  {
    number: '02',
    title: 'Design & Build',
    description: 'Create a clean, effective Framer website'
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description: 'Deploy and refine for best results'
  }
]

const HowItWorks = () => {
  return (
    <section className="section how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Our streamlined process ensures quality results and clear communication at every step.
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
