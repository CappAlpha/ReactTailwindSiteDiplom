import { card } from '../../../assets';
import styles, { layout } from '../../../constants/style';
import ButtonToStart from '../../../utils/ButtonToStart';

const CardDeal = () => (
  <section className={`${layout.section}`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Выберете нужную задачу <br className="sm:block hidden" /> всего за пару
        кликов!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Мы гарантируем вам, что всё будет готово в кратчайшие сроки и в
        соотвествии с ГОСТ.
      </p>

      <ButtonToStart styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt="card"
        className="w-[100%] h-[100%] z-[5]"
        loading="lazy"
      />

      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-10 white__gradient" />
    </div>
  </section>
);

export default CardDeal;
