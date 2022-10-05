import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  // const openCalendar = () => {
  //   window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20230211T230000Z%2F20230212T054500Z&details=&location=18800%20Norwalk%20Blvd%2C%20Artesia%2C%20CA%2090701%20&text=Joon%20and%20Hane%27s%20Wedding', '_blank');
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Joon &amp; Hane</title>
        <meta name="description" content="Joon and Hane are getting married!" />
        <meta property="og:url" content="http://joonhane.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Joon and Hane's Wedding :: 02.11.23" />
        <meta property="og:description" content="Joon and Hane are getting married!" />
        <meta property="og:image" content="https://joonhane.com/joonhane.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="joonhane.com" />
        <meta property="twitter:url" content="http://joonhane.com" />
        <meta name="twitter:title" content="Save the date! 02.11.23 Joon and Hane" />
        <meta name="twitter:description" content="Joon and Hane are getting married!" />
        <meta name="twitter:image" content="https://joonhane.com/joonhane.jpg" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Mr+De+Haviland&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/add-to-calendar-button@1/assets/css/atcb.min.css" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="https://joonhane.com/site.webmanifest"></link>
      </Head>

      <div className={styles.top}></div>
      <div className={styles.main}>
        <div className={styles.featured}>
          <div className={styles.us}>
            <img className={styles.imgus} src="https://joonhane.com/us.jpg" alt="joon-sub and hane on a bridge"/>
          </div>
          <div className={styles.info}>
            <h1 className={styles.save}>
              Save<br /> the Date!
            </h1>
            <div className={styles.italic}>for the wedding of</div>
            <h2 className={styles.name}>Hane No</h2>
            <div className={styles.row}>
              <div className={styles.divider}></div>
              <div className={styles.and}>and</div>
              <div className={styles.divider}></div>
            </div>
            <h2 className={styles.name}>Joon-Sub Chung</h2>
            <div className={styles.date}>Saturday, Februrary 11th, 2023</div>
            <div className={styles.italic}>Artesia, CA</div>
            <div className={styles.follow}>Formal Invitation To Follow</div>
            <div className="atcb"></div>
            <button className={styles.button} id="default-button" role="button">
              {/* <div className={styles.tooltip}>
                <div>
                  Gmail
                </div>
                <div>
                  Apple Calendar
                </div>
              </div> */}
              <div className={styles.buttonRow}>
                <img className={styles.cal} alt="a small calender" src="https://joonhane.com/cal.svg"/>
                <span className={styles.iconAdd}>Add to Calendar</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bottom}></div>
      <script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@1" async defer></script>
    </div>
  )
}