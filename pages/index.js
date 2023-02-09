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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="https://joonhane.com/site.webmanifest"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Mr+De+Haviland&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/add-to-calendar-button@1/assets/css/atcb.min.css" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-247HC9LWF1"></script>
      </Head>

      <div className={styles.top}></div>
      <div className={styles.main}>
        <section>
          <div>
            <div>
              <h1 className={styles.h1}>Welcome</h1>
            </div>
            <div className={styles.uitalic}>to the wedding of</div>
            <div className={styles.uname}>Hane No</div>
            <div>and</div>
            <div className={styles.uname}>Joon-Sub Chung</div>
          </div>
          <div>
            <div>February 11, 2023 + 2:</div>
            <div>New Life Community Church</div>
            <div>Artesia, California</div>
          </div>
          <div>
            <div>Thank you</div>
            <p>We would like to thank all of our family and friends who have joined us here on this special day. We know that many of you have traveled far to be with us, and we feel very blessed.</p>
            <p>We also extend out heartfelt thanks to our Wedding Party, and especially</p>
            <p>Lastly, we thank our amazing parents, who made us the people we are today. Thank you for all of your love, guidance, and support.</p>
          </div> 
        </section>

        <section>
          <div>
            <div>Weddomg Party</div>
            <div>Parents of the bride</div>
            <div>Sophia and John No</div>

            <div>Parents of the groom</div>
            <div>Hae-Yul and Min-Kun Chung</div>
            
            <div>Maid of Honor</div>
            <div>Helen No</div>

            <div>Best Man</div>
            <div>Andrew Lee</div>
          </div>
          <div>
            <div>
              <div>Bridesmaids</div>
              <div>Marie</div>
              <div>Florence</div>
              <div>Sarah</div>
            </div>
            <div>
              <div>Groomsmen</div>
              <div>Raymond Fung</div>
              <div>Henry Chu</div>
              <div>Ji-Sub</div>
            </div>
          </div>
          <div>
            <div>
              <div>Flower girl</div>
              <div>Zoey Neurn</div>
            </div>
            <div>
              <div>Ring Bearer</div>
              <div>Nick</div>
            </div>
            <div>
              <div>Officiant</div>
              <div>Pastor Nam Park</div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div>Unplugged</div>
            <div>We invite you to be fully present with us during our ceremony. So please turn off all phones and flash photography and enjoy this special moment with us.</div>
            <div>Share us your best shots!</div>
            <div>#JoonSubbedHane #HaneNoSaidYes</div>
          </div>
        </section>
      </div>
      <div className={styles.bottom}></div>
      <script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@1" async defer></script>
    </div>
  )
}