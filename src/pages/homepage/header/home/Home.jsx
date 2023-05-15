import styles from '../../../../constants/style';
import { discount, robot } from '../../../../assets';
import GetStarted from './GetStarted';

const Home = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img
          src={discount}
          alt="discount"
          className="w-[36px] h-[36px]"
          loading="eager"
        />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span>
          {''} Скидка на {''}
          <span className="text-white"> первый </span>
          {''} заказ
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-bold ss:text-[58px] text-[44px] text-white ss:leading-[80px] leading-[70px]">
          Услуги
          <br className="sm:block hidden" /> {''}
          <span className="text-gradient">строительного инженеринга</span>
        </h1>
        <div className="ss:flex hidden ss:ml-4 ml-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[58px] text-[44px] text-white ss:leading-[80px] leading-[70px] w-full">
        специально для Bас
      </h1>
      <p
        className={`${styles.paragraph} lg:text-justify text-left sm:hyphens-none hyphens-auto max-w-[700px] mt-5`}
      >
        Команда наших экспертов, сделает любой заказ доступный в перечне. От
        проектов зданий до рассчётных програм на С++ и чертежей на AutoLisp.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-2 relative`}>
      <img
        src={robot}
        alt="billing"
        className="md:left-[50px] left-[0px] w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Home;
