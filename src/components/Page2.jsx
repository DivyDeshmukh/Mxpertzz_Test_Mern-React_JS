import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from './Button';
import { useSelector } from 'react-redux';
import Card from './Card';

function Page2() {

    const {id} = useParams();
    const itemInfo = useSelector(state => state.storiesData);
    const [item, setItem] = useState(null);
    const [activeFilter, setActiveFilter] = useState('Word Explore');

    // console.log(itemInfo);

    const updateActiveFilter = (filter) => {
      setActiveFilter(filter);
    }

    useEffect(() => {
        // we can make API call with specific id but as we have already stored data inside redux store so we can fetch from there.
        const item = itemInfo?.filter((item) => (
            item._id == id
        ));
        setItem(item[0]);
    }, [id]);

  return (
    <div className='pt-4 w-full h-screen flex justify-center flex-col items-center'>
       <div id="top-text" className=' pt-28 h-[45%]'>
        <div id="title-text" className='flex items-center justify-center text-3xl font-bold'>
          <h1>{item?.Title}</h1>
        </div>
        <div id="buttons" className='w-full flex justify-center items-center mt-2 p-2 gap-4'>
          <Button className='bg-blue-600' updateActiveFilter={updateActiveFilter}>Word Explore</Button>
          <Button className='bg-[#e8e86b]' updateActiveFilter={updateActiveFilter}>In Story Adventure</Button>
          <Button className='bg-[#37aa37]' updateActiveFilter={updateActiveFilter}>Brain Quest</Button>
        </div>

        <p className='font-light text-[13.5px]'>Drag Pictures to the matching words, light up correct pairs, shake for a retry</p>
      </div>
        <div className='h-[270px] w-[80%] flex justify-center items-center gap-12'>
            <div id="drag" className='h-full w-[40%] flex items-center justify-center bg-slate-700'>
                drop here
            </div>
           {
            (!(item?.Wordexplore?.length !== 0 || item?.Brainquest?.length !== 0)) ? (
                <div className='h-full flex items-center justify-center text-center'>
                  <h1>No content in this story open another one...</h1>
                </div>
            ) : (
              <div id="storiesData" className='h-full w-[60%] flex gap-8 flex-row flex-wrap overflow-y-auto items-center justify-center'>
              {/* API has some spelling mistakes and some values are not present */}
                {/* Rendering Word Explore items */}
                {(item?.Wordexplore?.length !== 0 && activeFilter === 'Word Explore') ? (
                  item?.Wordexplore?.map((story, index) => (
                    <Link to={`${item._id}`} key={index} className='h-[200px] w-[200px] p-2 rounded-xl bg-blue-800 flex flex-col justify-center items-center gap-2'>
                      <div id="img" className='h-[60%] overflow-hidden w-full'>
                        {story.Storyimage && <img src={`https://ik.imagekit.io/dev24/${story.Storyimage[0]}`} alt="" className='h-full w-full object-contain' />}
                      </div>
                      <h1 className='text-center text-[13.5px] text-wrap'>{story.Storytitle}</h1>
                      <Button className='w-full'>{story.Storyttext}</Button>
                    </Link>
                  ))
                ) : (activeFilter === 'Word Explore') && <h1>Nothing inside it or Loading...</h1>
                }

                {/* Rendering Story Adventure items */}
                {(item?.Storyadvenure && activeFilter === 'In Story Adventure') ? (
                  item.Storyadvenure?.content?.map((story, index) => (
                    <Link to={story._id} key={index}>{story.Paragraph}</Link>
                  ))
                ) : (activeFilter === 'Story Adventure') && <h1>Nothing inside it or Loading...</h1>
                }

                {/* Rendering Brain Quest items */}
                {(item?.Brainquest && activeFilter === 'Brain Quest') ? (
                  item.Brainquest.map((question, index) => (
                    <Link to={`${item._id}`} key={index}>
                      <h1>{question.Question}</h1>
                      <p>{question.Answer}</p>
                      <select name="" id="">
                        {question.Option.map((option, optionIndex) => (
                          <option key={optionIndex}>{option}</option>
                        ))}
                      </select>
                    </Link>
                  ))
                ) : (activeFilter === 'Brain Quest') && <h1>Nothing inside it or Loading...</h1>
                }
        </div>
            )
           }

        </div>
        <div id="bottom" className='flex w-full justify-between h-[5%] px-4 mt-4'>
        <Link to='/'> <i className="ri-arrow-left-s-line"></i> Previous</Link>
        <Link to='/page2'>Next <i className="ri-arrow-right-s-line"></i></Link>
      </div>
    </div>
  );
}

export default Page2;
