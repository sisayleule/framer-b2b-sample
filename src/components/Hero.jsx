import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="hero-title">
              Helping Businesses Scale With Smart Digital Solutions
            </h1>
            <p className="hero-subtitle">
              We design and build high-performance web experiences that drive growth for modern companies.
            </p>
            <div className="hero-buttons">
              <a href="#cta" className="button button-primary">
                Book a Free Consultation
              </a>
              <a href="#services" className="button button-secondary">
                View Our Services
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-visual">
              <div className="visual-card card-1"></div>
              <div className="visual-card card-2"></div>
              <div className="visual-card card-3"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
