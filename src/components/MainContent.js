import './MainContent.css'

function MainContent() {
    return (
        <div className="container-main">
            <header>
                <h1 className="text-white fs-600 fw-700">Laura Smith</h1>
                <p className="text-orange fs-300">Frontend Developer</p>
                <p className="text-grey--light fs-200">laurasmith.website</p>
            </header>
            <div className="buttons-contact text-white">
                <div className="fs-400 button button--grey">
                    <i class="fa-solid fa-envelope"></i>
                    <p className="fw-400">Email</p>
                </div>
                <div className="fs-400 button button--blue">
                    <i class="fa-brands fa-linkedin"></i>
                    <p className="fw-400">LinkedIn</p>
                </div>
            </div>
            <main className="text-white main-text">
                <article>
                    <h2 className="fs-500 fw-600 ">About</h2>
                    <p className="fs-200 text-grey">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </article>
                <article>
                    <h2 className="fs-500 fw-600">Interests</h2>
                    <p className="fs-200 text-grey">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </article>
            </main>
        </div>
    );
}

export default MainContent;