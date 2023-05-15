import { Link } from 'react-router-dom';

import styles from '../../../../constants/style';
import { arrowUp } from '../../../../assets';

const GetStarted = () => (
  <Link to="start">
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer active:opacity-70 hover:drop-shadow-[0px_0px_20px_rgba(0,255,255,0.2)]`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
            <span className="text-gradient">Начать</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
      </div>
    </div>
  </Link>
);

export default GetStarted;
