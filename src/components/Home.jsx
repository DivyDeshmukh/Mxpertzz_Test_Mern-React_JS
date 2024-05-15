import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Button, Card} from "./index";
import "../App.css"
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { setStoriesData } from '../features/dataSlice';

function Home() {

  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const storedData = useSelector(state => state.storiesData)
  const [activeFilter, setActiveFilter] = useState('');

  // a slider or carousel can be integrated with react-slicker 
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   variableWidth: true, // This property allows slides to have variable widths
  // };

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch('https://child.onrender.com/api/sciencefiction');
      const data = await response.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateActiveFilter = (filter) => {
    setActiveFilter(filter);
  }

  useEffect(() => {
    if (activeFilter === 'New') {
      const activeData = storedData.filter((item) => item.Status === 'New');
      setData(activeData);
    } else if (activeFilter === 'In Progress') {
      const activeData = storedData.filter((item) => item.Status === 'In Progress');
      setData(activeData);
    } else if (activeFilter === 'Completed') {
      const activeData = storedData.filter((item) => item.Status === 'Completed');
      setData(activeData); 
    } else if (activeFilter === 'Clear All') {
      const activeData = storedData.filter((item) => item.Status === 'Clear All');
      setData(activeData);
    } else {
      fetchData();
    }
    // console.log(activeFilter, data);
  }, [activeFilter]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // storing the data in redux store to avoid redundant ApI calls
    if (activeFilter !== 'New' && activeFilter !== 'In Progress' && activeFilter !== 'Completed' && activeFilter !== 'Clear All') {
      // console.log(activeFilter);
      dispatch(setStoriesData(data));
    }
  }, [data]);

  return (
    <div className='h-full w-full bg-[#0F172A] text-white flex flex-col gap-4'>
      <div id="top" className='bg-black pt-28 h-[45%]'>
        <div id="title-text" className='flex items-center justify-center text-3xl font-bold'>
          <h1>Science Fiction Stories</h1>
        </div>
        <div id="buttons" className='w-full flex justify-center items-center mt-2 p-2 gap-4'>
          <Button className='bg-blue-800' updateActiveFilter={updateActiveFilter}>New</Button>
          <Button className='bg-[#baba33]' updateActiveFilter={updateActiveFilter}>In Progress</Button>
          <Button className='bg-[#37aa37]' updateActiveFilter={updateActiveFilter}>Completed</Button>
          <Button className='bg-[#6464d0]' updateActiveFilter={updateActiveFilter}>Clear All</Button>
        </div>
      </div>
      <div id="middle" className='h-[50%] flex flex-wrap justify-center items-center gap-4 mt-8'>
        {
          data?.map((item) => (
            <Card itemInfo={item} key={item._id} />
          ))
        }
      </div>
      <div id="bottom" className='flex w-full justify-between h-[5%] px-4'>
        <Link to='/'> <i className="ri-arrow-left-s-line"></i> Previous</Link>
        <Link to='/page2'>Next <i className="ri-arrow-right-s-line"></i></Link>
      </div>
    </div>
  );
}

export default Home;
