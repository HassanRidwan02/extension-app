import logo from './images/logo.svg'
import moon from './images/icon-moon.svg'
import sun from './images/icon-sun.svg'

export default function Navbar({ theme, toggleTheme }) {
    return (
        <div className='navbar'>

            <img src={logo} alt="" />
            <div className='light-dark'>
                <img
                    src={theme === 'light' ? moon : sun}
                    alt="toggle theme"
                    className='mode'
                    onClick={toggleTheme}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    )
}