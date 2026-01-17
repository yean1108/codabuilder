import React from 'react'

const DevelopmentItem = ({ project, onClick }) => {
  return (
    <div className="development-item" onClick={onClick}>
      <div className="development-image">
        {project.image ? (
          <img src={project.image} alt={project.title} className="development-img" />
        ) : (
          <div className="development-image-placeholder">{project.title}</div>
        )}
        <div className="development-status">{project.status}</div>
      </div>
      <div className="development-content">
        <h3 className="development-title">{project.title}</h3>
        <p className="development-location">{project.location}</p>
        <p className="development-description">{project.description}</p>
        <div className="development-meta">
          <span className="development-units">{project.units} Units</span>
          <span className="development-area">{project.area}</span>
        </div>
        <div className="development-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DevelopmentItem
