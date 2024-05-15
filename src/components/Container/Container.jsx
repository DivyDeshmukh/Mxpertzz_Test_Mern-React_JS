import React from 'react';

function Container({children}) {
  return (
    <div className='h-full w-screen bg-[#0F172A] text-white'>
      {children}
    </div>
  );
}

export default Container;
