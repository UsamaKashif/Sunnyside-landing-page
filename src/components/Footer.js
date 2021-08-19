import Image from 'next/image'
import React from 'react'

import styles from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1>Sunnyside</h1>
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>

            <div className={styles.socials}>
                <Image
                    src="/icons/icon-facebook.svg"
                    width={20}
                    height={20}
                />
                <Image
                    src="/icons/icon-instagram.svg"
                    width={20}
                    height={20}
                />
                <Image
                    src="/icons/icon-twitter.svg"
                    width={20}
                    height={20}
                />
                <Image
                    src="/icons/icon-pinterest.svg"
                    width={20}
                    height={20}
                />
            </div>
        </footer>
    )
}

export default Footer
