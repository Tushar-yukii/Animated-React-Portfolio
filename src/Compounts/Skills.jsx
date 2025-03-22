import React from 'react'
import skills from './data/skills.json'
const Skills = () => {
  return (
    <>
      <div className="container skills">
        <h1>SKILLS</h1>
        {skills.map((data)=>(
        <div className="items" key={data.id}>
          <div className="item">
            <img src={`/assets/${data.imageSrc}`} alt="" />
            <h3>{data.title}</h3>
          </div>
        </div>
        ))}
      </div>
      </>
  )
}

export default Skills
