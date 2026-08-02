import '../index.css'

const Project = (props) => {
    const { projects } = props
    const thumbnailStyle = {
        textAlign: 'center',
        border: '1px solid black',
        maxWidth: '100%',
        boxSizing: 'border-box'
    }

    return (
        projects.map((project, i) =>
            <div className='projectColumn' key={i}>
                <a href="test">
                    <img style={thumbnailStyle} src='/src/assets/hero.png'></img>
                </a>
                <p>{project.projectText}</p>
            </div>
        )
    )
}

export default Project