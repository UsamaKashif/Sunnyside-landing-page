import React from 'react'
import styles from "./Header.module.css"
import Nav from './Nav'

import Image from 'next/image'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Nav />

                <h1 className={styles.title}>We are creatives</h1>

                <div className={styles.arrow}>
                    <Image 
                        src="/icons/icon-arrow-down.svg"
                        width={36}
                        height={100}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header
