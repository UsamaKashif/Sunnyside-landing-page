import Image from 'next/image'
import React from 'react'
import styles from "./Testimonials.module.css"


const Testimonials = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Client Testimonials</h2>
            <div className={styles.testimonials}>
                <div className={styles.testimonial}>
                    <Image 
                        src="/profiles/image-emily.jpg"
                        width={50}
                        height={50}
                        className={styles.img}
                    />
                    <p className={styles.text}>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

                    <p className={styles.name}>Emily R.</p>
                    <small> Marketing Director</small>
                </div>
                <div className={styles.testimonial}>
                    <Image 
                        src="/profiles/image-thomas.jpg"
                        width={50}
                        height={50}
                        className={styles.img}
                    />
                    <p className={styles.text}>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>

                    <p className={styles.name}>Thomas S</p>
                    <small>Chief Operating Officer</small>
                </div>
                <div className={styles.testimonial}>
                    <Image 
                        src="/profiles/image-jennie.jpg"
                        width={50}
                        height={50}
                        className={styles.img}
                    />
                    <p className={styles.text}>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>

                    <p className={styles.name}>Jennie F</p>
                    <small>Business Owner</small>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
