import { navLinks, socialMedia } from '../constants';

const Navbar = () => (
  <nav className="w-full flex sm:py-6 py-2 justify-between items-center navbar">
    <div className="sm:flex hidden flex-row mt-0">
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
            className={`w-[21px] h-[21px] object-contain`}
          />
        </a>
      ))}
    </div>
    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
        <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px]  ${
            index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
          } hover:text-secondary text-white`}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
