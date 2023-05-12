import styles from '../constants/style';
import ButtonToStart from './ButtonToStart';

const CardTryNow = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex-col">
      <h2 className={`${styles.heading2}`}>
        Воспользуйтесь нашими услугами прямо сейчас!
      </h2>
      <p className={`${styles.paragraph} max-w-[620px] mt-6`}>
        Надёжный помощник в решении задач любого уровня.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonToStart />
    </div>
  </section>
);

export default CardTryNow;
