import React from 'react'
import PortfolioItem from './PortfolioItem'

const portfolioItems = [
  {
    id: 1,
    title: "Modern Family Home",
    location: "Melbourne, VIC",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    description: "A contemporary 4-bedroom family home featuring open-plan living, sustainable materials, and seamless indoor-outdoor flow.",
    fullDescription: "This stunning modern family home showcases contemporary Australian architecture at its finest. The 4-bedroom design features expansive open-plan living areas that seamlessly connect to outdoor entertaining spaces. Built with sustainable materials and energy-efficient systems, this home represents the future of residential construction.",
    tags: ["Residential", "Modern"],
    size: "450 sqm",
    duration: "12 months"
  },
  {
    id: 2,
    title: "Heritage Restoration",
    location: "Sydney, NSW",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    description: "Careful restoration of a 1920s heritage home, preserving original features while adding modern amenities.",
    fullDescription: "A meticulous restoration project that honored the original 1920s architecture while seamlessly integrating modern conveniences. Original timber features, leadlight windows, and period details were carefully preserved and restored to their former glory.",
    tags: ["Heritage", "Restoration"],
    size: "380 sqm",
    duration: "18 months"
  },
  {
    id: 3,
    title: "Coastal Retreat",
    location: "Byron Bay, NSW",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
    description: "Beachside luxury home with panoramic ocean views, designed to withstand coastal conditions.",
    fullDescription: "A luxury coastal home designed to embrace its stunning oceanfront location. Built with materials specifically chosen for coastal conditions, this home features floor-to-ceiling windows, multiple outdoor decks, and a design that maximizes the breathtaking views.",
    tags: ["Luxury", "Coastal"],
    size: "520 sqm",
    duration: "14 months"
  },
  {
    id: 4,
    title: "Commercial Office Complex",
    location: "Brisbane, QLD",
    year: "2023",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    description: "Modern 5-story office building with sustainable design, featuring green spaces and energy-efficient systems.",
    fullDescription: "A state-of-the-art commercial office complex featuring sustainable design principles. The building includes green roofs, solar panels, rainwater harvesting systems, and energy-efficient HVAC. The design prioritizes natural light and employee wellbeing.",
    tags: ["Commercial", "Office"],
    size: "8,500 sqm",
    duration: "24 months"
  },
  {
    id: 5,
    title: "Eco-Friendly Apartment Building",
    location: "Adelaide, SA",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    description: "Multi-unit residential development with solar panels, rainwater harvesting, and native landscaping.",
    fullDescription: "A forward-thinking multi-unit residential development that sets new standards for sustainable living. Features include rooftop solar panels, comprehensive rainwater harvesting, native Australian landscaping, and energy-efficient building systems throughout.",
    tags: ["Residential", "Eco-Friendly"],
    size: "2,800 sqm",
    duration: "20 months"
  },
  {
    id: 6,
    title: "Rural Farmhouse",
    location: "Yarra Valley, VIC",
    year: "2022",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    description: "Traditional Australian farmhouse with modern updates, featuring wrap-around verandas and rural views.",
    fullDescription: "A beautiful blend of traditional Australian farmhouse architecture with contemporary updates. The design features wrap-around verandas, high ceilings, and large windows that frame the stunning rural landscape. Modern amenities are seamlessly integrated while maintaining the character of the original design.",
    tags: ["Rural", "Traditional"],
    size: "420 sqm",
    duration: "16 months"
  }
]

const ConstructionPage = () => {
  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero-title">Construction</h1>
          <p className="page-hero-subtitle">Quality building and construction services across Australia</p>
        </div>
      </section>

      <section className="construction-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Our Construction Services</h2>
            <p>
              CodaBuilder offers comprehensive construction services for residential, commercial, 
              and heritage projects. With over 25 years of experience, we have built a reputation 
              for quality craftsmanship, attention to detail, and timely project delivery.
            </p>
            <p>
              Our team of skilled tradespeople and project managers work closely with clients 
              to ensure every project meets the highest standards of quality and exceeds expectations.
            </p>
          </div>
        </div>
      </section>

      <section className="construction-services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <h3>Residential Construction</h3>
              <p>
                From custom homes to multi-unit developments, we deliver quality residential 
                construction projects that meet your vision and budget. Our expertise includes 
                modern designs, heritage restoration, and sustainable building practices.
              </p>
            </div>
            <div className="service-card">
              <h3>Commercial Construction</h3>
              <p>
                We specialize in commercial office buildings, retail spaces, and mixed-use 
                developments. Our commercial projects feature sustainable design, energy-efficient 
                systems, and modern amenities.
              </p>
            </div>
            <div className="service-card">
              <h3>Heritage Restoration</h3>
              <p>
                Preserving Australia's architectural heritage is a passion. We carefully restore 
                heritage buildings while integrating modern conveniences, ensuring these 
                important structures continue to serve communities for generations.
              </p>
            </div>
            <div className="service-card">
              <h3>Project Management</h3>
              <p>
                Our experienced project managers oversee every aspect of construction, from 
                planning and permits to completion and handover. We ensure projects stay on 
                schedule and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Projects</h2>
            <p className="section-subtitle">A selection of our completed construction projects</p>
          </div>
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConstructionPage
