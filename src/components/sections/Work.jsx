import React from 'react'
import { myProjects } from '../../constants'
import ProjectCard from '../ProjectCard'

const Work = () => {
  return (
    <section id='projects' className='c-space my-20'>
      <div className="w-full textwhite-600">
        <h3 className="head-text">Projects</h3>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
          />
        ))}
      </div>
    </section>
  )
}

export default Work