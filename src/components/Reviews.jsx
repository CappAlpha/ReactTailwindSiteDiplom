import { feedback } from '../constants';
import styles from '../constants/style';
import FeedbackCard from '../utils/FeedbackCard';

const Reviews = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justift-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Что люди думают
        <br className="sm:block hidden" /> о нашем сервисе
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Всё что вам нужно, это дать нам задание и оно будет готово в
          кратчайшие сроки.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-between justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Reviews;
