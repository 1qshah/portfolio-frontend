const Project = (props) => {
    const {projects} = props

    return (
            projects.map((project, i) =>
                <div key={i}>
                    <a href="test">
                    <img src='/src/assets/hero.png'></img>
                    </a>
                    <p>{project.projectText}</p>
                </div>
            )
    )
}

export default Project