import styles from '../constants/style';
import Navbar from '../navbar/Navbar.jsx';
import NavbarMobile from '../navbar/NavbarMobile.jsx';
import Billing from '../components/Billing';
import CardDeal from '../components/CardDeal';
import Business from '../components/Business';
import CTA from '../utils/CardTryNow';
import Stats from '../utils/Stats';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Home from '../components/Home';

const MainPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <p className={`${styles.boxWidth}`}>
        <Navbar />
        <NavbarMobile />
      </p>
    </header>

    <main>
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Reviews />
          <CTA />
        </div>
      </div>
    </main>

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
);

export default MainPage;
