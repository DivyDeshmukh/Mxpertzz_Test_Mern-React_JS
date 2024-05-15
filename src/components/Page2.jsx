import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from './Button';
import { useSelector } from 'react-redux';
import Card from './Card';

function Page2() {

    const {id} = useParams();
    const itemInfo = useSelector(state => state.storiesData);
    const [item, setItem] = useState();
    // console.log(itemInfo);

    useEffect(() => {
        // we can make API call with specific id but as we have already stored data inside redux store so we can fetch from there.
        const item = itemInfo?.filter((item) => (
            item._id == id
        ));
        setItem(item[0]);
        console.log(item.Storyadvenure);
    }, [id]);

  return (
    <div className='pt-28 w-full h-screen flex justify-center flex-col items-center'>
       <div id="top-text" className=' pt-28 h-[45%]'>
        <div id="title-text" className='flex items-center justify-center text-3xl font-bold'>
          <h1>{item?.Title}</h1>
        </div>
        <div id="buttons" className='w-full flex justify-center items-center mt-2 p-2 gap-4'>
          <Button className=''>Word Explorer</Button>
          <Button className='bg-[#e8e86b]'>In Story Adventure</Button>
          <Button className='bg-[#37aa37]'>Brain Quest</Button>
        </div>

        <p>Drag Pictures to the matching words, light up correct pairs, shake for a retry</p>
      </div>
        <div className='h-[270px] w-[80%] flex justify-center items-center gap-12'>
            <div id="drag" className='h-full w-[40%] flex items-center justify-center bg-slate-700'>
                drop here
            </div>
            <div id="storiesData" className='h-full w-[60%] flex flex-wrap gap-4 flex-row'>
                {
                    (item?.Storyadvenure) && (
                        Object.entries(item.Storyadvenure)?.map((item, index) => (
                            <Link to={`${item._id}`} className='h-[200px] w-[200px] p-2 rounded-xl bg-blue-800 flex flex-col justify-center items-center gap-2'>
                                <div id="img" className='h-[60%] w-full'>
                                    <img src={`https://ik.imagekit.io/dev24/${item?._id}`} alt="" className='h-full w-full object-cover' />
                                </div>
                                <h1 className='text-center text-[13.5px] text-wrap'>{item.Storytitle}</h1>
                                <Button className='w-full'>{item.Status}</Button>
                            </Link>
                            ))
                        )
                }
            </div>
        </div>
        <div id="bottom" className='flex w-full justify-between h-[5%] px-4 mt-4'>
        <Link to='/'> <i className="ri-arrow-left-s-line"></i> Previous</Link>
        <Link to='/page2'>Next <i className="ri-arrow-right-s-line"></i></Link>
      </div>
    </div>
  );
}

export default Page2;
