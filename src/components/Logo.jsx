import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={"/"} className='flex items-center justify-center gap-2'>
      <div id="img" className='h-[50px] w-[50px] rounded-full overflow-hidden'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLl3hpcrdUvSgaPpq2fLmMliKigpLf3zEThIBJDtILA&s" alt="logo" 
        className='h-full w-full object-cover'
        />
      </div>
      <h1 className='text-white'>BrainyLingo</h1>
    </Link>
  );
}

export default Logo;
