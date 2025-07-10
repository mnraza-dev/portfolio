import React from 'react'
import { myProjects } from '../../constants'
import ProjectCard from '../ProjectCard'

const Work = () => {
  return (
    <section id='projects' className='c-space my-20'>
      <div className="w-full textwhite-600">
        <h3 className="head-text">Projects</h3>
      </div>
      {/* Change grid to flex-col for single row per project */}
      <div className="mt-10 flex flex-col gap-8">
        {myProjects.map((project, idx) => (
          <ProjectCard
            key={project.title + idx}
            title={project.title}
            description={project.desc}
            image={project.logo}
            github={project.github}
            demo={project.href}
            tags={project.tags}
            texture={project.texture}
            index={idx}
          />
        ))}
      </div>
    </section>
  )
}

export default Work