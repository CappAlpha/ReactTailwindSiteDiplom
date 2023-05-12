import { Link } from 'react-router-dom';

import { navLinks } from '../../../../constants';

const Navbar = () => (
  <nav className="w-full flex sm:py-6 py-2 justify-between items-center navbar">
    <div className="sm:flex hidden">
      <Link to="/">
        <p className="font-poppins font-bold text-[32px] text-gradient xs:leading-[56.8px] leading-[46.8px] active:opacity-70">
          Ingenium
        </p>
      </Link>
    </div>
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px]  ${
            index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
          } hover:text-secondary text-white active:opacity-70`}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
