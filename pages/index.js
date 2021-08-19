import Head from 'next/head'
import Image from 'next/image'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header'
import Testimonials from '../src/components/Testimonials'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunnyside Landing Page</title>
        <meta name="description" content="Frontend Mentor Challenge - Sunnyside Landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.container}>
        <div className={styles.grid2}>
          <div className={styles.textCard}>
            <h1>Transform your brand</h1>
            <p>We are a full-service creative agency specializing in helping brands grow fast.
              Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <button>Learn More</button>
          </div>

          <div className={styles.imgCard}>
            <Image
              src="/images/image-transform.jpg"
              layout="fill"
            />
          </div>

          <div className={styles.imgCard}>
            <Image
              src="/images/image-stand-out.jpg"
              layout="fill"
            />
          </div>

          <div className={styles.textCard}>
            <h1>Stand out to the right audience</h1>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
            <button>Learn More</button>
          </div>

          <div className={styles.imgCard}>
            <Image
              src="/images/image-graphic-design.jpg"
              layout="fill"
            />
            <div className={styles.contentOverlay}>
              <h4>Graphic Design</h4>
              <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
            </div>
          </div>

          <div className={styles.imgCard}>
            <Image
              src="/images/image-photography.jpg"
              layout="fill"
            />

            <div className={styles.contentOverlay}>
              <h4>Photography</h4>
              <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>

        </div>
      </div>

      <Testimonials />

      <div className={styles.grid4}>
        <Image 
          src="/images/image-gallery-milkbottles.jpg"
          width={360}
          height={435}
        />
        <Image 
          src="/images/image-gallery-orange.jpg"
          width={360}
          height={435}
        />
        <Image 
          src="/images/image-gallery-cone.jpg"
          width={360}
          height={435}
        />
        <Image 
          src="/images/image-gallery-sugarcubes.jpg"
          width={360}
          height={435}
        />
      </div>

      <Footer />
      
    </div>
  )
}


export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
