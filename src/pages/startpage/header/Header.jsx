import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/">
      <p className="mt-4 font-poppins font-bold text-[32px] text-gradient xs:leading-[56.8px] leading-[46.8px] active:opacity-70">
        Ingenium
      </p>
    </Link>
  );
};

export default Header;
