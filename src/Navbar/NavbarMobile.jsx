import { useState } from 'react';

import { close, menu } from '../assets';
import { navLinks, socialMedia } from '../constants';

const NavbarMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden flex flex-1 justify-between items-center">
      <div className="sm:hidden flex justify-start flex-row mt-0">
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
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-[38px] h-[38px] object-contain"
        onClick={() => setToggle((prev) => !prev)}
      />
      <div
        className={`${
          toggle ? 'flex' : 'hidden'
        } p-6 bg-black-gradient absolute top-[56px] right-0 w-[200px] rounded-l-xl sidebar`}
      >
        <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[20px] ${
                index === navLinks.length - 1 ? 'mb-0' : 'mb-12'
              } hover:text-secondary text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarMobile;
