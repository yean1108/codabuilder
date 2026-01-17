import React from 'react'

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <p className="footer-description">
              Ready to start your next project? Let's discuss how we can bring your vision to life.
            </p>
            <div className="footer-contact">
              <a href="mailto:info@codabuilder.com.au" className="footer-link">
                info@codabuilder.com.au
              </a>
              <a href="tel:+61234567890" className="footer-link">
                +61 2 3456 7890
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="footer-social">
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Facebook</a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Office</h3>
            <p className="footer-address">
              123 Construction Street<br />
              Sydney, NSW 2000<br />
              Australia
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CodaBuilder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
