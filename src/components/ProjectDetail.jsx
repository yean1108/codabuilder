import React, { useEffect } from 'react'

const ProjectDetail = ({ project, onClose }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!project) return null

  return (
    <div className="project-detail">
      <div className="project-detail-hero">
        {project.image && (
          <img src={project.image} alt={project.title} className="project-detail-image" />
        )}
        <div className="project-detail-overlay">
          <button className="project-detail-close" onClick={onClose}>×</button>
          <div className="container">
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-location">{project.location}</p>
          </div>
        </div>
      </div>
      <div className="project-detail-content">
        <div className="container">
          <div className="project-detail-main">
            <div className="project-detail-section">
              <h2>Overview</h2>
              <p className="project-detail-description">{project.fullDescription}</p>
              
              {project.features && project.features.length > 0 && (
                <div className="project-features">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.images && project.images.length > 1 && (
                <div className="project-gallery">
                  <h3>Project Gallery</h3>
                  <div className="gallery-grid">
                    {project.images.slice(1).map((img, index) => (
                      <div key={index} className="gallery-item">
                        <img src={img} alt={`${project.title} - Image ${index + 2}`} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.amenities && project.amenities.length > 0 && (
                <div className="project-amenities">
                  <h3>Nearby Amenities</h3>
                  <div className="amenities-grid">
                    {project.amenities.map((amenity, index) => (
                      <div key={index} className="amenity-item">
                        <div className="amenity-content">
                          <h4>{amenity.name}</h4>
                          <p>{amenity.distance}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.highlights && project.highlights.length > 0 && (
                <div className="project-highlights">
                  <h3>Why Choose This Development</h3>
                  <div className="highlights-grid">
                    {project.highlights.map((highlight, index) => (
                      <div key={index} className="highlight-item">
                        <h4>{highlight.title}</h4>
                        <p>{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="project-detail-sidebar">
              <div className="project-detail-info">
                <div className="project-info-item">
                  <span className="info-label">Status</span>
                  <span className="info-value">{project.status}</span>
                </div>
                <div className="project-info-item">
                  <span className="info-label">Units</span>
                  <span className="info-value">{project.units}</span>
                </div>
                <div className="project-info-item">
                  <span className="info-label">Area</span>
                  <span className="info-value">{project.area}</span>
                </div>
                {project.completion && (
                  <div className="project-info-item">
                    <span className="info-label">Completion</span>
                    <span className="info-value">{project.completion}</span>
                  </div>
                )}
                {project.developer && (
                  <div className="project-info-item">
                    <span className="info-label">Developer</span>
                    <span className="info-value">{project.developer}</span>
                  </div>
                )}
              </div>
              <div className="project-detail-tags">
                <h4>Project Tags</h4>
                <div className="tags-container">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
