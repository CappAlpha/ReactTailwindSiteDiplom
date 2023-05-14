import { Link } from 'react-router-dom';

const ButtonToStart = ({ styles }) => {
  return (
    <>
      <Link to="/start">
        <button
          type="button"
          className={`py-4 px-16 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[20px] ${styles} outline-none shadow-lg rounded-[20px] hover:drop-shadow-[0px_10px_10px_rgba(0,255,255,0.2)] active:opacity-70`}
        >
          Начать
        </button>
      </Link>
    </>
  );
};

export default ButtonToStart;
