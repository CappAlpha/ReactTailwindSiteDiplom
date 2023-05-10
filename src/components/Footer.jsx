import styles from '../style';
import { currentYear, footerLinks, socialMedia } from '../constants';

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start">
        <p className={`${styles.heading2} mt-4 text-gradient`}>Чертила</p>
        <p className={`${styles.paragraph} mt-2 max-w-[400px]`}>
          Лучший выбор для инженерных заказов. Современный, надёжный, быстрый.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px] "
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px]  text-dimWhite hover:text-secondary active:opacity-70 cursor-pointer ${
                    index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        {currentYear.getFullYear()} Чертила. Все права соблюдены.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            className={`cursor-pointer ${
              index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
            }`}
          >
            <img
              key={social.id}
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
