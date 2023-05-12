import { useState } from 'react';

import { close, menu } from '../../../../assets';
import { navLinks } from '../../../../constants';

const NavbarMobile = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden flex flex-1 justify-between items-center">
      <div className="sm:hidden flex">
        <a href="">
          <p className="font-poppins font-bold text-[32px] text-gradient xs:leading-[56.8px] leading-[46.8px]">
            Ingenium
          </p>
        </a>
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
