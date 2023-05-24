import Navigation from '../components/header/navigation'

/**
 * The Layout function returns a header, main content with custom spacing, and a footer with a
 * copyright notice.
 * @returns The `Layout` component is being returned, which consists of a header containing a
 * `Navigation` component, a main section containing the `children` passed to the component, and a
 * footer with a copyright notice.
 */
const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>

            <main className='space-custom'>{children}</main>

            <footer>&copy; 2023 Ermelindo Mendes Lopes IPSSI SQY</footer>
        </>
    )
}

export default Layout
