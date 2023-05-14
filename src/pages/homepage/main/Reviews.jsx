import { reviews } from '../../../constants';
import styles from '../../../constants/style';
import FeedbackCard from '../../../utils/FeedbackCard';

const Reviews = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-center items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Отзывы клиентов
        <br className="sm:block hidden" /> о нашем сервисе
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[480px]`}>
          Всё, что вам нужно - предоставить техническое задание, и мы выполним
          его в кратчайшие сроки.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap llg:justify-between justify-center w-full feedback-container relative z-[1]">
      {reviews.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Reviews;
