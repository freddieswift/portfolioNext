import Link from 'next/link'
import classes from './Header.module.css'

export default function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.mainNav}>
                <ul className={classes.navLinks}>
                    <Link href='/'><li className={classes.navLink}>About Me</li></Link>
                    <Link href='/projects'><li className={classes.navLink}>Projects</li></Link>
                    <Link href='/blog'><li className={classes.navLink}>Blog</li></Link>
                </ul>
            </nav>
        </header>
    )
}
