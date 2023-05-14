import { Link } from 'react-router-dom';

import styles from '../constants/style';
import { currentYear, footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start">
        <Link to="/">
          <p
            className={`${styles.heading2} text-gradient active:opacity-70 hover:drop-shadow-[0px_15px_15px_rgba(0,255,255,0.2)]`}
          >
            Ingenium
          </p>
        </Link>
        <p className={`${styles.paragraph} mt-2 max-w-[400px]`}>
          Лучший выбор для инженерных заказов. Современный, надёжный, быстрый.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink, index) => (
          <div key={`main div ${index}`} className="ss:my-0 my-4 min-w-[150px]">
            <h4
              key={`title ${footerLink.title}`}
              className="font-poppins font-medium text-[18px] leading-[27px] text-white"
            >
              {footerLink.title}
            </h4>
            <ul
              key={`main menu item ${footerLink.id}`}
              className="list-none mt-4"
            >
              {footerLink.links.map((link, index) => (
                <li key={`menu item ${link.name}`}>
                  <Link
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary active:opacity-70 cursor-pointer li ${
                      index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}
                    to="/"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        {currentYear.getFullYear()} Ingenium.
        <br className="sm:hidden block" /> Все права соблюдены.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        <p className="font-poppins font-normal text-dimWhite sm:text-[22px] text-[16px] leading-[30.8px] mr-3">
          Мы в соцсетях:
        </p>
        {socialMedia.map((social, index) => (
          <a
            key={`link ${social.id}`}
            href={social.link}
            target="_blank"
            className={`cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
          >
            <img
              key={`img ${social.id}`}
              src={social.icon}
              alt={social.id}
              className={`w-[26px] h-[26px] object-contain`}
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
