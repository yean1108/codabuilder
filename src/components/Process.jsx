import React from 'react'

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "We meet with you to understand your vision, requirements, and budget. This initial consultation helps us create a tailored plan for your project."
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our team works with architects and designers to create detailed plans and obtain all necessary permits and approvals."
    },
    {
      number: "03",
      title: "Construction",
      description: "With careful project management, we execute the build using quality materials and skilled tradespeople, keeping you informed every step of the way."
    },
    {
      number: "04",
      title: "Completion",
      description: "We conduct thorough quality checks, handle final inspections, and ensure everything meets our high standards before handover."
    }
  ]

  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">A streamlined approach to bringing your vision to life</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
