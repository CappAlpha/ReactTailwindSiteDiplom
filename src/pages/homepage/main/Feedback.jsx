import { apple, bill, google } from '../../../assets';
import styles, { layout } from '../../../constants/style';

const Feedback = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] realtive z-[5]"
        loading="lazy"
      />

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfoRight}>
      <h2 className="font-poppins font-bold xs:text-[48px] text-[36px] text-white xs:leading-[76.8px] leading-[66.8px]">
        Доступные <br className="sm:block hidden" />
        способы оплаты
      </h2>
      <p className={`${styles.paragraph} max-w-[400px] mt-5`}>
        Прислушаемся ко всем вашим пожеланиям, готовы делать правки даже после
        сданной работы в течении месяца.
      </p>
      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="app_store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Feedback;
