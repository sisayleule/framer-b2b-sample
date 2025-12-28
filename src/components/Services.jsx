import React from 'react'
import { motion } from 'framer-motion'
import './Services.css'

const services = [
  {
    icon: '📊',
    title: 'Strategy & Consulting',
    description: 'Helping you define clear goals and a strong digital direction'
  },
  {
    icon: '🎨',
    title: 'Design & Development',
    description: 'Modern, responsive websites built for performance and clarity'
  },
  {
    icon: '🚀',
    title: 'Optimization & Support',
    description: 'Continuous improvements to maximize results over time'
  }
]

const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Everything you need to launch and grow your business online.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
