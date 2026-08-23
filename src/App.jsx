import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Project from './components/Project'
import './index.css'
import projectService from './services/projects'
import imgURL from './assets/hero.png'

function App() {
  const [page, setPage] = useState('/')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    projectService
      .getAll()
      .then(response => {
        setProjects(response.data)
      })
  }, [])

  const handlePage = (title) => {
    setPage(title);
  }
  
  const ProjectList = () => {

    return <>
      {
        projects.map((project, i) =>
          <div className='projectColumn' key={i}>
            <button type='button' aria-label={project.name} onClick={() => { handlePage(project.name) }}>
              <img className='thumbnail' src={imgURL}></img>
              <p>{project.name}</p>
            </button>
          </div>

        )
      }
    </>
  }
  const Index = () => {
    return (
      <>
        <Header />
        <main>
          <h2>Projects</h2>
          <div className='projectRow'>
            <ProjectList></ProjectList>
          </div>
        </main>
      </>
    )
  }

  const currentPage = (current) => {
    switch (current) {
      case 'Portfolio Website':
        return <Project project={projects.find(project => project.name === 'Portfolio Website')} />

      case 'Java Secure Chat':
        return <Project project={projects.find(project => project.name === 'Java Secure Chat')} />

      case 'Unity Multiplayer Game':
        return <Project project={projects.find(project => project.name === 'Unity Multiplayer Game')} />

      case 'Android App':
        return <Project project={projects.find(project => project.name === 'Android App')} />
    }
  }

  return (
    <>
      <nav>
        <button onClick={() => setPage('/')}>Home</button>
      </nav>
      {page === '/' ? <Index /> : currentPage(page)}
      <Footer />
    </>
  )
}

export default App
