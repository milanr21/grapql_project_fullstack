import Link from 'next/link';
import { FaRProject } from 'react-icons/fa6';

export default function Header() {
  return (
    <nav className='bg-red-300 py-4 pl-1 text-black mb-4 p-0'>
      <div className='container'>
        <Link className='' href='/'>
          <div className='flex items-center text-white'>
            <FaRProject className='text-2xl mr-2' />
            <h1 className='text-2xl font-bold'>Project Management</h1>
          </div>
        </Link>
      </div>
    </nav>
  );
}
