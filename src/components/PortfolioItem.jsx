import React, { useState } from 'react'
import ProjectModal from './ProjectModal'

const PortfolioItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="portfolio-item" onClick={() => setIsModalOpen(true)}>
        <div className="portfolio-image">
          {item.image ? (
            <img src={item.image} alt={item.title} className="portfolio-img" />
          ) : (
            <div className="portfolio-image-placeholder">{item.title}</div>
          )}
          <div className="portfolio-image-overlay">
            <span className="portfolio-year">{item.year}</span>
          </div>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-header">
            <h3 className="portfolio-title">{item.title}</h3>
            <span className="portfolio-location">{item.location}</span>
          </div>
          <p className="portfolio-description">{item.description}</p>
          <div className="portfolio-meta">
            <span className="portfolio-size">{item.size}</span>
            <span className="portfolio-duration">{item.duration}</span>
          </div>
          <div className="portfolio-tags">
            {item.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ProjectModal item={item} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  )
}

export default PortfolioItem
