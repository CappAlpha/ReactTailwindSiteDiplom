import { aboutUs } from '../../../../constants';
import styles, { layout } from '../../../../constants/style';
import ButtonToStart from '../../../../utils/ButtonToStart';
import AboutCard from './AboutCard';

const AboutUs = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Спите спокойно,
          <br className="block" />
          пока мы делаем заказ.
          <p
            className={`${styles.paragraph} lg:text-justify text-left sm:hyphens-none hyphens-auto max-w-[555px] mt-5`}
          >
            Мы стремимся обеспечить удобство подачи заказов и их широкий
            ассортимент на всей территории России, чтобы все — даже жители самых
            удалённых регионов страны — могли обратиться к нам и получить доступ
            к современному сервису.
          </p>
        </h2>

        <ButtonToStart styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {aboutUs.map((feature, index) => (
          <AboutCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
