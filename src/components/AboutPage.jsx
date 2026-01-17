import React from 'react'

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">About Us</h1>
          <p className="page-hero-subtitle">Building excellence across Australia for over 25 years</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Our Story</h2>
            <p>
              Founded in 1998, CodaBuilder has grown from a small local builder to one of 
              Australia's most respected construction and development companies. Our journey 
              has been built on a foundation of quality, integrity, and a commitment to 
              creating exceptional spaces for people to live, work, and thrive.
            </p>
            <p>
              With over 25 years of experience in the Australian construction industry, 
              we have completed hundreds of projects across residential, commercial, and 
              heritage sectors. Our portfolio includes award-winning designs, sustainable 
              developments, and community-focused projects that have transformed neighborhoods 
              across the country.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality Craftsmanship</h3>
              <p>
                Every project is built to the highest standards using premium materials and 
                skilled tradespeople. We never compromise on quality, ensuring every detail 
                meets our exacting standards.
              </p>
            </div>
            <div className="value-item">
              <h3>Sustainable Building</h3>
              <p>
                We prioritize eco-friendly materials and energy-efficient designs in all 
                our projects. Our commitment to sustainability ensures we build for the 
                future while respecting the environment.
              </p>
            </div>
            <div className="value-item">
              <h3>Client Focused</h3>
              <p>
                Your vision is our priority. We work closely with clients throughout every 
                stage of the project, ensuring their needs are met and expectations exceeded.
              </p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>
                We embrace new technologies and building methods that improve efficiency, 
                quality, and sustainability. Our team stays at the forefront of industry 
                innovations.
              </p>
            </div>
            <div className="value-item">
              <h3>Integrity</h3>
              <p>
                Honesty and transparency guide everything we do. We build trust through 
                reliable communication, fair pricing, and ethical business practices.
              </p>
            </div>
            <div className="value-item">
              <h3>Community</h3>
              <p>
                We believe in building not just structures, but lasting relationships with 
                our clients and communities. Every project contributes to the betterment 
                of the neighborhoods we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-content">
            <p>
              Our success is built on the expertise and dedication of our team. From project 
              managers and site supervisors to skilled tradespeople and support staff, every 
              member of the CodaBuilder team is committed to excellence.
            </p>
            <p>
              We invest in ongoing training and development, ensuring our team stays current 
              with the latest building techniques, safety standards, and industry best 
              practices. This commitment to professional development translates directly 
              into superior project outcomes for our clients.
            </p>
          </div>
        </div>
      </section>

      <section className="about-commitment">
        <div className="container">
          <div className="commitment-content">
            <h2>Our Commitment</h2>
            <p>
              At CodaBuilder, we are committed to setting new benchmarks in construction 
              quality, sustainability, and client satisfaction. Our track record speaks 
              for itself, with numerous industry awards and hundreds of satisfied clients 
              across Australia.
            </p>
            <p>
              Whether you're planning a custom home, commercial development, or heritage 
              restoration, we bring the same level of dedication, expertise, and attention 
              to detail to every project. We don't just build structures – we build 
              communities, relationships, and legacies.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
