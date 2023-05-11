import styles from '../constants/style';
import ButtonToStart from './ButtonToStart';

const CardTryNow = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:mx-0 mx-6 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Попробуйте наш сервис сейчас!</h2>
      <p className={`${styles.paragraph} max-w-[585px] mt-6`}>
        Всё что вам нужно, это попробовать наш сервис! Зарекомендовавший себя,
        как надёжный помощник в решении задач.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonToStart />
    </div>
  </section>
);

export default CardTryNow;
