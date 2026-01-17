import React, { useEffect } from 'react'

const ProjectModal = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image">
          {item.image ? (
            <img src={item.image} alt={item.title} className="modal-img" />
          ) : (
            <div className="modal-image-placeholder">{item.title}</div>
          )}
        </div>
        <div className="modal-body">
          <div className="modal-header">
            <h2 className="modal-title">{item.title}</h2>
            <div className="modal-meta">
              <span className="modal-location">{item.location}</span>
              <span className="modal-year">{item.year}</span>
            </div>
          </div>
          <div className="modal-details">
            <div className="modal-detail-item">
              <span className="detail-label">Size</span>
              <span className="detail-value">{item.size}</span>
            </div>
            <div className="modal-detail-item">
              <span className="detail-label">Duration</span>
              <span className="detail-value">{item.duration}</span>
            </div>
          </div>
          <p className="modal-description">{item.fullDescription}</p>
          <div className="modal-tags">
            {item.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
