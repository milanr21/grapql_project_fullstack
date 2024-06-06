import { Link } from 'react-router-dom';
import NotFOundImg from '../assets/404NotFound.png';
import { FaTentArrowTurnLeft } from 'react-icons/fa6';

const NotFound = () => {
  return (
    <div className='text-center justify-center '>
      <img src={NotFOundImg} alt='Not Found' className='w-1/2 mx-auto' />

      <div className='text-center flex flex-col justify-center'>
        <p className='text-5xl font-semibold my-4'>
          Sorry, this page Doesn't Exist
        </p>

        <button className='flex flex-row items-center justify-center text-3xl my-4 max-w-xs mx-auto p-2 rounded-lg text-white font-bold  bg-blue-400 gap-10'>
          <FaTentArrowTurnLeft />
          <Link className='mr-4' to='/'>
            Go Back Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
