import React, { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Contact Us</h1>
          <p className="page-hero-subtitle">Get in touch with our team to discuss your next project</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                Whether you're planning a new construction project, interested in our 
                development opportunities, or have questions about our services, we'd 
                love to hear from you.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail-item">
                  <h3>Office</h3>
                  <p>
                    123 Construction Street<br />
                    Sydney, NSW 2000<br />
                    Australia
                  </p>
                </div>
                
                <div className="contact-detail-item">
                  <h3>Phone</h3>
                  <p>
                    <a href="tel:+61234567890">+61 2 3456 7890</a>
                  </p>
                </div>
                
                <div className="contact-detail-item">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:info@codabuilder.com.au">info@codabuilder.com.au</a>
                  </p>
                </div>
                
                <div className="contact-detail-item">
                  <h3>Business Hours</h3>
                  <p>
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 9:00 AM - 1:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="contact-social">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">LinkedIn</a>
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">Facebook</a>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="construction">Construction Inquiry</option>
                    <option value="development">Development Opportunity</option>
                    <option value="general">General Inquiry</option>
                    <option value="careers">Careers</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
