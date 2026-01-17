import React from 'react'
import DevelopmentItem from './DevelopmentItem'

export const developmentProjects = [
  {
    id: 1,
    title: "Calypso Bay",
    location: "South East Queensland",
    description: "A waterfront residential development and marina featuring luxury homes with direct water access.",
    fullDescription: "Calypso Bay is a premier waterfront residential development located in South East Queensland. This master-planned community features luxury homes with direct marina access, world-class amenities, and stunning water views. The development includes a state-of-the-art marina facility, waterfront parks, and a vibrant community atmosphere.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop"
    ],
    status: "Ongoing",
    units: "500+",
    area: "150 hectares",
    tags: ["Residential", "Waterfront", "Marina"],
    features: [
      "State-of-the-art marina facility with 200+ berths",
      "Waterfront parks and recreational areas",
      "Community clubhouse and facilities",
      "Direct water access for residents",
      "Sustainable design with native landscaping"
    ],
    amenities: [
      { name: "Shopping Centers", distance: "5 minutes" },
      { name: "Schools", distance: "10 minutes" },
      { name: "Hospitals", distance: "15 minutes" },
      { name: "Beaches", distance: "2 minutes" },
      { name: "Restaurants", distance: "5 minutes" },
      { name: "Public Transport", distance: "3 minutes" }
    ],
    highlights: [
      { 
        title: "Prime Waterfront Location", 
        description: "Direct access to marina and water activities, with stunning views from every home." 
      },
      { 
        title: "World-Class Facilities", 
        description: "State-of-the-art marina, community clubhouse, and recreational facilities for residents." 
      },
      { 
        title: "Investment Potential", 
        description: "Strong capital growth potential in a rapidly developing waterfront precinct." 
      }
    ],
    completion: "2026",
    developer: "CodaBuilder Development"
  },
  {
    id: 2,
    title: "Harrington Waters",
    location: "Mid North Coast, NSW",
    description: "A master-planned residential community on the beautiful Mid North Coast with stunning water views.",
    fullDescription: "Harrington Waters Estate is a carefully planned residential development on the Mid North Coast of New South Wales. The estate offers a range of residential lots with water views, community facilities, and easy access to local amenities. The development emphasizes sustainable design and community living.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop"
    ],
    status: "Ongoing",
    units: "300+",
    area: "80 hectares",
    tags: ["Residential", "Waterfront", "Community"],
    features: [
      "Waterfront residential lots with stunning views",
      "Community park and playground facilities",
      "Walking and cycling paths",
      "Close proximity to beaches and local amenities",
      "Sustainable design principles"
    ],
    amenities: [
      { name: "Beaches", distance: "5 minutes" },
      { name: "Shopping", distance: "10 minutes" },
      { name: "Schools", distance: "8 minutes" },
      { name: "Medical Centers", distance: "12 minutes" },
      { name: "Parks & Recreation", distance: "Walking distance" },
      { name: "Local Cafes", distance: "5 minutes" }
    ],
    highlights: [
      { 
        title: "Coastal Lifestyle", 
        description: "Experience the best of coastal living with easy access to pristine beaches and water activities." 
      },
      { 
        title: "Community Focus", 
        description: "Designed for families with parks, playgrounds, and community facilities at your doorstep." 
      },
      { 
        title: "Sustainable Living", 
        description: "Eco-friendly design with native landscaping and energy-efficient homes." 
      }
    ],
    completion: "2025",
    developer: "CodaBuilder Development"
  },
  {
    id: 3,
    title: "Cameron Grove Estate",
    location: "Cameron Park, NSW",
    description: "A master-planned residential community accommodating approximately 2,000 dwellings with retail precinct.",
    fullDescription: "Cameron Grove Estate is a comprehensive master-planned residential community spanning 300 hectares. The development will accommodate approximately 2,000 dwellings in medium density and standard residential blocks. The estate includes a shopping precinct with major retailers, specialty shops, and community facilities. A large local park and lake system is seamlessly integrated into the natural surroundings.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop"
    ],
    status: "Ongoing",
    units: "2,000",
    area: "300 hectares",
    tags: ["Residential", "Master-Planned", "Retail"],
    features: [
      "Major retail precinct with Woolworths and specialty shops",
      "Large park and lake system",
      "Community facilities and recreational areas",
      "Medium density and standard residential blocks",
      "Integrated transport links"
    ],
    amenities: [
      { name: "Shopping Precinct", distance: "Within estate" },
      { name: "Schools", distance: "5 minutes" },
      { name: "Parks & Lakes", distance: "Within estate" },
      { name: "Public Transport", distance: "10 minutes" },
      { name: "Medical Facilities", distance: "15 minutes" },
      { name: "Entertainment", distance: "Within estate" }
    ],
    highlights: [
      { 
        title: "Master-Planned Community", 
        description: "Comprehensive development with retail, parks, and community facilities all integrated." 
      },
      { 
        title: "Convenient Location", 
        description: "Close to major transport links and employment hubs, perfect for families and professionals." 
      },
      { 
        title: "Natural Surroundings", 
        description: "Beautiful parklands and lake systems seamlessly integrated into the development." 
      }
    ],
    completion: "2027",
    developer: "CodaBuilder Development"
  },
  {
    id: 4,
    title: "Alight at Cameron Grove",
    location: "Cameron Park, NSW",
    description: "A modern apartment development within the Cameron Grove Estate, offering contemporary living.",
    fullDescription: "Alight at Cameron Grove is a modern apartment development located within the Cameron Grove Estate. This contemporary residential project offers stylish apartments with modern amenities, close proximity to retail and community facilities, and easy access to major transport links.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop"
    ],
    status: "Planning",
    units: "200+",
    area: "5 hectares",
    tags: ["Residential", "Apartment", "Modern"],
    features: [
      "Modern apartment designs with contemporary finishes",
      "Rooftop gardens and communal spaces",
      "Underground parking facilities",
      "Close to retail and community facilities",
      "Energy-efficient building systems"
    ],
    amenities: [
      { name: "Retail Shops", distance: "2 minutes" },
      { name: "Public Transport", distance: "5 minutes" },
      { name: "Schools", distance: "8 minutes" },
      { name: "Parks", distance: "Walking distance" },
      { name: "Cafes & Restaurants", distance: "3 minutes" },
      { name: "Fitness Centers", distance: "10 minutes" }
    ],
    highlights: [
      { 
        title: "Modern Living", 
        description: "Contemporary apartment designs with high-quality finishes and modern amenities." 
      },
      { 
        title: "Prime Location", 
        description: "Located within Cameron Grove Estate with access to all community facilities and retail precinct." 
      },
      { 
        title: "Investment Opportunity", 
        description: "Strong rental demand and capital growth potential in a growing residential area." 
      }
    ],
    completion: "2026",
    developer: "CodaBuilder Development"
  },
  {
    id: 5,
    title: "Future Developments",
    location: "Various Locations",
    description: "A strong pipeline of over 10,000 residential blocks across multiple locations.",
    fullDescription: "With a commitment to quality developments today and into the future, we maintain a strong pipeline of over 10,000 residential blocks across various strategic locations. These future developments will continue our focus on creating communities people love to live in.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop"
    ],
    status: "Planning",
    units: "10,000+",
    area: "Multiple Sites",
    tags: ["Residential", "Future", "Pipeline"],
    features: [
      "Strategic locations across Australia",
      "Master-planned communities",
      "Sustainable development practices",
      "Community-focused design",
      "Quality infrastructure and amenities"
    ],
    amenities: [
      { name: "Strategic Locations", distance: "Various" },
      { name: "Transport Links", distance: "Close proximity" },
      { name: "Employment Hubs", distance: "Nearby" },
      { name: "Educational Facilities", distance: "Accessible" },
      { name: "Shopping & Dining", distance: "Convenient" },
      { name: "Recreational Areas", distance: "Planned" }
    ],
    highlights: [
      { 
        title: "Strong Pipeline", 
        description: "Over 10,000 residential blocks across multiple strategic locations in Australia." 
      },
      { 
        title: "Quality Focus", 
        description: "Commitment to creating communities people love to live in, with sustainable design principles." 
      },
      { 
        title: "Future Growth", 
        description: "Strategic locations chosen for long-term capital growth and lifestyle benefits." 
      }
    ],
    completion: "2027+",
    developer: "CodaBuilder Development"
  }
]

const Development = ({ onProjectClick }) => {
  return (
    <section id="development" className="development">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Development</h2>
          <p className="section-subtitle">Master-planned communities and residential developments across Australia</p>
        </div>
        <div className="development-grid">
          {developmentProjects.map(project => (
            <DevelopmentItem 
              key={project.id} 
              project={project} 
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Development
