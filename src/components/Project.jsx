const Project = (props) => {
    const project = props.project

    return (
        <>
            <header>
                <h1>{project.title}</h1>
                <p>A website created with React to showcase clients that I can produce a fully functional and appealing website.</p>
                <p>Development team: Myself</p>
                <div>
                </div>
            </header>
            <main>
                <div>
                    <h1>How did I contribute?</h1>

                    <p>Designed and implemented the user registration system using PHP and MySQL.</p>
                    <p>Ensured secure data handling with encryption for user information.</p>
                    <p>Optimized the website's performance for fast and efficient user registration.</p>
                </div>
            </main>
            <main>
                <div>
                    <h1>What was the result?</h1>
                    <h3>Fully functional website produced</h3>
                    <p>The website efficiently registered new users and was approved by the stakeholders.</p>
                    <h3>Received positive feedback for design</h3>
                    <p>It received positive feedback for its seamless functionality and user-friendly design.</p>
                    <h3>Met security benchmarks</h3>
                    <p>The project successfully met all security and performance benchmarks.</p>
                </div>
            </main>
        </>
    )
}

export default Project