import styles from '../../constants/style';
import Navbar from './header/navbar/Navbar';
import NavbarMobile from './header/navbar/NavbarMobile';
import Billing from './main/Billing';
import CardDeal from './main/CardDeal';
import Business from './main/Business';
import CardTryNow from '../../utils/CardTryNow';
import Stats from './header/Stats';
import Footer from '../../footer/Footer';
import Reviews from './main/Reviews';
import Home from './header/Home';

const MainPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <header className={`${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <NavbarMobile />
        <Home /> <Stats />
      </div>
    </header>

    <main className={`bg-primary ${styles.flexCenter} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`}>
        <Business /> <Billing />
        <CardDeal /> <Reviews />
        <CardTryNow />
      </div>
    </main>

    <footer className={`bg-primary ${styles.flexCenter} ${styles.paddingX} `}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
);

export default MainPage;
