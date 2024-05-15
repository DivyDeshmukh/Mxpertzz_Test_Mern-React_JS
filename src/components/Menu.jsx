import React from 'react';
import { Link } from 'react-router-dom';

function Select({options}) {
  return (
    <div className='flex flex-col items-start justify-center absolute top-[105%] left-0 whitespace-nowrap bg-slate-400'>
        {options?.map((option) => (
          <Link to={`${option}`} className='px-4 py-2 hover:bg-black' key={option}>
            {option}
          </Link>
        ))}
    </div>
  );
}

export default Select;
