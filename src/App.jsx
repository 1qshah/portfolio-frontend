import { useState } from 'react'
import Project from './components/Project'
import './index.css'

function App() {
  const [count, setCount] = useState(0)


  const projects = [
    {
      projectLink: `project-sfi-codes.html`,
      thumbnail: "SfiCodes",
      projectText: "Personal Website",
    },
    {
      projectLink: `project-plant-trees.html`,
      thumbnail: "PlantTrees",
      projectText: "Android Kotlin and Java App",
    },
    {
      projectLink: `project-clash.html`,
      thumbnail: "Clash",
      projectText: "C# Multiplayer Game",
    },
    {
      projectLink: `project-secure-chat.html`,
      thumbnail: "Secure Chat",
      projectText: "Java Application",
    },
  ]


  return (
    <>
      <nav>
        <a href="index.html">Home</a>
      </nav>
      <header>
        <h1>Sfi Codes</h1>
        <p>Cyber Security Graduate, interested in technology, developing projects and taking on
          challenges.</p>
        <p>Scroll down to see my projects</p>
      </header>
      <main>
        <h1>Projects</h1>
        <Project projects={projects} />
      </main>
      <footer>
              <p>
          I've also worked in Other roles and they were more focused on developing my non technical skills.
          Feel free to have a read.
        </p>
        <p>©Copyright 2050 by nobody. All rights reversed.</p>
      </footer>
    </>
  )
}

export default App
