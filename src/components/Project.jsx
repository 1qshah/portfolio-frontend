const Project = (props) => {
    const project = props.project

    return (
        <>
            <header>
                <h1>{project.name}</h1>
                <p>{project.overview}</p>
                <p>{project.technologies}</p>
                <div>
                </div>
            </header>
            <main>
                <div>
                    <h1>Features</h1>
                    {project.features}
                </div>
            </main>
        </>
    )
}

export default Project