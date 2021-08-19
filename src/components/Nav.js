
import React from 'react'
import styles from "./Nav.module.css"


const Nav = () => {
    return (
        <nav className={styles.nav}>
            <h1>Sunnyside</h1>

            <ul className={styles.navLinks}>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li className={styles.contactBtn}>
                    <p>Contact</p>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
