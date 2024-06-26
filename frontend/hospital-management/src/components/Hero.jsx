import React from 'react'

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
      <h1>{title}</h1>
      <p>The IIT Guwahati Hospital is an essential healthcare
         facility serving the Indian Institute of Technology Guwahati (IIT Guwahati) community,
          including students, faculty, staff, and their families. The hospital is dedicated
           to providing comprehensive medical care, encompassing general medicine,
            emergency services, and specialized consultations.
             It is equipped with modern medical equipment and staffed by qualified healthcare professionals.
              The hospital aims to ensure the well-being of the campus community through preventive,
               diagnostic, and therapeutic services, as well as health education and wellness programs.
               </p>
      </div>
<div className="banner">
  <img src={imageUrl} alt ="hero" className="animated-image"/>
  <span>
    <img src="Vector.png" alt ="vector"/>
  </span>
</div>

    </div>
  )
}

export default Hero