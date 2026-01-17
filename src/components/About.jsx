import React from 'react'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p className="about-description">
              With over 25 years of experience in the Australian construction industry, 
              CodaBuilder has established itself as a trusted name in quality building 
              and construction. We specialize in residential, commercial, and heritage 
              restoration projects across Australia.
            </p>
            <p className="about-description">
              Our commitment to excellence, sustainable practices, and attention to detail 
              has earned us numerous awards and the trust of hundreds of satisfied clients. 
              We believe in building not just structures, but lasting relationships with 
              our clients and communities.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <h3>Quality Craftsmanship</h3>
                <p>Every project is built to the highest standards using premium materials and skilled tradespeople.</p>
              </div>
              <div className="feature-item">
                <h3>Sustainable Building</h3>
                <p>We prioritize eco-friendly materials and energy-efficient designs in all our projects.</p>
              </div>
              <div className="feature-item">
                <h3>Client Focused</h3>
                <p>Your vision is our priority. We work closely with clients to bring their dreams to life.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
