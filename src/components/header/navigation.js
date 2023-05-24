import { Link } from 'react-router-dom'

/**
 * This is a React component that renders a navigation bar with links to different pages.
 * @returns A navigation bar component with links to the Home, About, and Projets pages.
 */
export default function Navigation() {
    return (
        <>
            <nav className='navbar navbar-expand-lg bg-body-tertiary'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        Mon App Meteo
                    </a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarNav'
                        aria-controls='navbarNav'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav'>
                            <div className='nav-item'>
                                <a className='nav-link' href='#'>
                                    <Link to='/' className='nav-link active' aria-current='page'>
                                        Accueil
                                    </Link>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
