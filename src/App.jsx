import styles from './style';
import Navbar from './Navbar/Navbar.jsx';
import NavbarMobile from './Navbar/NavbarMobile.jsx';
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Business from './components/Business';
import CTA from './utils/CardTryNow';
import Stats from './utils/Stats';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Home from './components/Home';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <NavbarMobile />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />
        <CTA /> <Footer />
      </div>
    </div>
  </div>
);

export default App;
