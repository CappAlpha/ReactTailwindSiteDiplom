import { Link } from 'react-router-dom';

import styles from '../../constants/style';
import Footer from '../../footer/Footer';

const StartPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Link to="/">
          <p className="mt-4 font-poppins font-bold text-[32px] text-gradient xs:leading-[56.8px] leading-[46.8px] active:opacity-70">
            Ingenium
          </p>
        </Link>
      </div>
    </header>

    {/* <main className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Form />
      </div>
    </main> */}

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
);

export default StartPage;
