import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Project from './components/Project'
import './index.css'

function App() {
  const [page, setPage] = useState('index')


  const projects = [
    {
      url: `sfi-codes.html`,
      thumbnail: "SfiCodes",
      title: "Personal Website",
    },
    {
      url: `plant-trees.html`,
      thumbnail: "PlantTrees",
      title: "Android Kotlin and Java App",
    },
    {
      url: `clash.html`,
      thumbnail: "Clash",
      title: "C# Multiplayer Game",
    },
    {
      url: `secure-chat.html`,
      thumbnail: "Secure Chat",
      title: "Java Application",
    },
  ]

  const handlePage = (title) => {
    setPage(title);
  }

  useEffect(() => {
    console.log('Current state:', page);
  }, [page]); // Runs every time 'page' changes


  const ProjectList = () => {

    return <>
      {
        projects.map((project, i) =>
          <div className='projectColumn' key={i}>
            <button onClick={() => { handlePage(project.title) }}>
              <img className='thumbnail' src='/src/assets/hero.png'></img>
              <p>{project.title}</p>
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
      case 'Personal Website':
        return <Project project={projects.find(project => project.title === 'Personal Website')} />
        break

      case 'Java Application':
        return <Project project={projects.find(project => project.title === 'Java Application')} />
        break

      case 'C# Multiplayer Game':
        return <Project project={projects.find(project => project.title === 'C# Multiplayer Game')} />
        break

      case 'Android Kotlin and Java App':
        return <Project project={projects.find(project => project.title === 'Android Kotlin and Java App')} />
        break
    }
  }
  
  return (
    <>
      <nav>
        <a href="index.html">Home</a>
      </nav>
      {page === 'index' ? <Index /> : currentPage(page)}
      <Footer />
    </>
  )
}

export default App
