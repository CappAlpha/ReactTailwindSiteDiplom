import styles from '../constants/style';
import Navbar from '../navbar/Navbar.jsx';
import NavbarMobile from '../navbar/NavbarMobile.jsx';
import Billing from '../components/Billing';
import CardDeal from '../components/CardDeal';
import Business from '../components/Business';
import CardTryNow from '../utils/CardTryNow';
import Stats from '../utils/Stats';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import Home from '../components/Home';

const MainPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <header className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <NavbarMobile />
      </div>
    </header>

    <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Home /> <Stats /> <Business /> <Billing />
        <CardDeal /> <Reviews />
        <CardTryNow />
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
