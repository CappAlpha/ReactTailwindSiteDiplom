import { features } from '../../../constants';
import styles, { layout } from '../../../constants/style';
import ButtonToStart from '../../../utils/ButtonToStart';
import FeatureCard from '../../../utils/FeatureCard';

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Спите спокойно,
          <br className="block" />
          пока мы делаем заказ.
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Более половины специалистов больше 10 лет, работают в их области,
            решая задачи.
          </p>
        </h2>

        <ButtonToStart styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
