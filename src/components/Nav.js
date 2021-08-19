
import Image from 'next/image'
import React, { useState } from 'react'
import styles from "./Nav.module.css"


const Nav = () => {
    const [toggle, setToggle] = useState(false)
    
    const Toggle = () => {
        setToggle(!toggle)
    }
    return (
        <nav className={styles.nav}>
            <h1>Sunnyside</h1>

            <ul className={[styles.navLinks , toggle ? styles.toggle : styles.hide ].join(" ")}>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
                <li className={styles.contactBtn}>
                    <p>Contact</p>
                </li>
            </ul>

            <div className={styles.hamburger} onClick={Toggle}>
                <Image 
                    src="/icons/icon-hamburger.svg"
                    width={24}
                    height={18}
                    
                />
            </div>
        </nav>
    )
}

export default Nav
