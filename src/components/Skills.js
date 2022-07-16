import React from 'react';
import Card from './Card';
import "./Skills.css";
import SkillsData from './SkillsData';

function Skills() {
  return (
    <section className='skills top' id="skills">
        <div className='container'>
            <div className='heading'>
                <h4>skills</h4>
                <h1>What I Do</h1>
            </div>
            <div className='content grid'>
                {SkillsData.map((skill, index) =>{
                    return <Card key={index} img={skill.image} title={skill.title} desc={skill.desc}/>
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills
