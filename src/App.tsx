import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer
} from './components'

import styles from "./styles/styles"



function App() {

  return (
    <div className='bg-primary w-full overflow-hidden'>

      {/* navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      {/*  main */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      
      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={styles.boxWidth}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>


    </div>
  )
}

export default App
