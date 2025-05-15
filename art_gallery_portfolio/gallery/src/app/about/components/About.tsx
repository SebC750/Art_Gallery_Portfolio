'use client'
import React from 'react'
import AboutSection from "../AboutSection.json"
const About = () => {
  return (
    <div className="p-10">
      <h2 className="text-4xl text-red-500 font-bold flex items-center gap-3"> <i className="bi bi-question"> </i>About </h2>
      {AboutSection.map((about,index) => (
        <div key={index} className="collapse collapse-arrow bg-transparent border-0 border-red-500 border-b-2 text-red-500">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title font-semibold">{about.question}</div>
          <div className="collapse-content text-sm">{about.answer}</div>
        </div>
      ))}
    </div>
  )
}

export default About