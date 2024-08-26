import React,{ useContext} from 'react'
import { Context } from '../../main';
import "../../styles/Modern.css"
import { useRef } from 'react';


const ModernMinimalistTemplate  = () => {
    const { personalInfo, educationInfo, contactInfo, experienceInfo, certificateInfo } = useContext(Context);
    const resumeRef = useRef();
  return (
    <div>
        <div className="resume-container" ref={resumeRef}>
          {personalInfo && contactInfo && (
            <header className="header">
              <h1>
                {personalInfo.firstName} {personalInfo.lastName}
              </h1>
              <p>{personalInfo.profession}</p>
              <p>{personalInfo.address}</p>
              <p>{personalInfo.zip}</p>
  
              <div className="contact-info">
                <p>Email: {contactInfo.email}</p>
                <p>Phone: {contactInfo.phonenumber}</p>
              </div>
            </header>
          )}
          {educationInfo && (
            <section className="section">
              <h2>Education</h2>
              <div className="education-item">
                <h3>{educationInfo.course}</h3>
                <p>{educationInfo.institution}</p>
                <p>Start: {educationInfo.start}</p>
                {educationInfo.finish && <p>Finish: {educationInfo.finish}</p>}
                {educationInfo.currentlyStudying && <p>Till Now</p>}
              </div>
            </section>
          )}
          {experienceInfo && (
            <section className="section">
              <h2>Experience</h2>
              <div className="experience-item">
                <h3>{experienceInfo.position}</h3>
                <p>{experienceInfo.company}</p>
                <p>{experienceInfo.start}</p>
                {experienceInfo.finish && <p>{experienceInfo.finish}</p>}
                {experienceInfo.currentlyworking && <p>Till Now</p>}
              </div>
            </section>
          )}
          {certificateInfo && (
            <section className="section">
              <h2>Certifications</h2>
              <div className="certification-item">
                <p>{certificateInfo.organization}</p>
                <p>{certificateInfo.title}</p>
                <p>{certificateInfo.acquisition}</p>
                <p>{certificateInfo.skills}</p>
              </div>
            </section>
          )}
        </div>
       
      </div>

  )
}

export default ModernMinimalistTemplate 