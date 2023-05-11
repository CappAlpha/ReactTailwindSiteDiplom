import { Link } from 'react-router-dom';

import styles from '../constants/style';
import CardTryNow from '../utils/CardTryNow';
import Footer from '../components/Footer';

const StartPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Link to="/">
          <p className="font-poppins font-bold text-[32px] text-gradient xs:leading-[56.8px] leading-[46.8px] active:opacity-70">
            Чертила
          </p>
        </Link>
      </div>
    </header>

    {/* <main className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </main> */}

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CardTryNow /> <Footer />
      </div>
    </footer>
  </div>
);

export default StartPage;
