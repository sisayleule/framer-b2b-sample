import React from 'react'
import { motion } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
  {
    quote: 'Professional, fast, and extremely detail-oriented. The final website exceeded our expectations.',
    author: 'Alex M.',
    role: 'Product Manager',
    company: 'TechCorp'
  },
  {
    quote: 'Nexora Solutions transformed our online presence. The results speak for themselves - 3x increase in conversions.',
    author: 'Sarah K.',
    role: 'CEO',
    company: 'GrowthLabs'
  },
  {
    quote: 'Outstanding communication and execution. They truly understand what modern B2B companies need.',
    author: 'Michael R.',
    role: 'Marketing Director',
    company: 'CloudScale'
  }
]

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from businesses we've helped grow.
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="sample-badge">Sample</div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.author.charAt(0)}</div>
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-role">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
