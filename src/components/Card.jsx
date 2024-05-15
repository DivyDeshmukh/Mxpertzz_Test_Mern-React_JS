import React from 'react';
import Button from './Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

function Card({itemInfo}) {

  return (
    <Link to={`${itemInfo._id}`} className='h-[200px] w-[200px] p-2 rounded-xl bg-blue-800 flex flex-col justify-center items-center gap-2'>
        <div id="img" className='h-[60%] w-full'>
            <img src={`https://ik.imagekit.io/dev24/${itemInfo.Image}`} alt="" className='h-full w-full object-cover' />
        </div>
        <h1 className='text-center text-[13.5px] text-wrap'>{itemInfo.Title}</h1>
        <Button className='w-full bg-[#e0e081]'>{itemInfo.Status}</Button>
    </Link>
  );
}

export default Card;
