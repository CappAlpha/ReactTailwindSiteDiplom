import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/">
      <p className="sm:py-6 py-2 font-poppins font-bold text-[32px] text-gradient xs:leading-[56.8px] leading-[46.8px] active:opacity-70 hover:drop-shadow-[0px_20px_20px_rgba(0,255,255,0.3)]">
        Ingenium
      </p>
    </Link>
  );
};

export default Header;
