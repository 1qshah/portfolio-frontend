import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'

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
  }, [page]); // Runs every time 'count' changes


  const Projects = () => {

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

  return (
    <>
      <nav>
        <a href="index.html">Home</a>
      </nav>
      <Header />
      <main>
        <h2>Projects</h2>
        <div className='projectRow'>
          <Projects></Projects>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
