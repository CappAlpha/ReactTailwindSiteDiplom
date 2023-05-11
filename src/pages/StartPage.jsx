import { Link } from 'react-router-dom';

import styles from '../constants/style';
import CTA from '../utils/CardTryNow';
import Footer from '../components/Footer';

const StartPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Link to="/">
          <p className={`${styles.paragraph}`}>Touch me</p>
        </Link>
      </div>
    </div>

    {/* <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Home />
      </div>
    </div> */}

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA /> <Footer />
      </div>
    </div>
  </div>
);

export default StartPage;
