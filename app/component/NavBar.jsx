'use client'

import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

const NavBar = () => {
  const { push } = useRouter(); // Destructure push method from useRouter

  return (
    <nav className='bg-red-500 text-blue text-xl p-4 flex justify-between items-center'>
      <div className='font-bold text-black'>
        <label>REMS employee management app</label>
      </div>
      <div>
        <button
          onClick={() => push('/')}
          className="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded"
        >
          Home
        </button>
        <button
          onClick={() => push('/login')}
          className="bg-white text-blue-500 hover:bg-blue-100 text-sm font-semibold py-2 px-4 mr-2 rounded"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
