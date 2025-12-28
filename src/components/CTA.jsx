import React from 'react'
import { motion } from 'framer-motion'
import './CTA.css'

const CTA = () => {
  return (
    <section id="cta" className="section cta">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cta-title">Ready to Build Your B2B Website?</h2>
          <p className="cta-subtitle">
            Let's create a website that represents your brand and converts visitors.
          </p>
          <a href="#contact" className="button button-cta">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
