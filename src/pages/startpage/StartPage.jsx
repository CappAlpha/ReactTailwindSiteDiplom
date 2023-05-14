import styles from '../../constants/style';
import Header from '../startpage/header/Header';
import Footer from '../../footer/Footer';
import StartForm from './main/StartForm';
import Catalog from './main/Catalog';

const StartPage = () => (
  <div className="bg-primary w-full overflow-hidden">
    <header className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Header />
      </div>
    </header>

    <main className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Catalog />
        <StartForm />
      </div>
    </main>

    <footer className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </footer>
  </div>
);

export default StartPage;
