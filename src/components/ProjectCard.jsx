import React from 'react'
import styles from "../components/ProjectCard.module.css"
import projects from '../data/projects.json'
import {getImageUrl} from "../util"


const ProjectCard = ({
    project:{title,imageSrc,description,skills,source}
}) => {

  return (
    <div className={styles.container}> 
        <img src={getImageUrl(imageSrc)} alt="abc"className={styles.image}/>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
            {skills.map((skill,id)=>{
                    return(
                        <li key={id} className={styles.skill}>{skill}</li>
                    )
                    
                })}
        </ul>
        <div className={styles.links}>
            <a href={source} className={styles.link}>source</a>
        </div>
                 
    </div>
  )
}

export default ProjectCard