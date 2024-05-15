import React, { useState } from 'react';
import {Logo, Button, Menu} from "../index";
import {NavLink} from "react-router-dom";

function Header() {

  const [showDropdown, setShowDropDown] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      // active: authStatus    // conditionally render elements in header based on whether user is logged in or not. But right now, user authentication handling is not mentioned so doing simply
    }, 
    {
      name: "Leaderboard",
      slug: "/leaderboard",
    },
    {
      name: "Daily Quiz",
      slug: "/dailyquiz"
    },
  ];

  const genres = ['Genre 1', "Genre 2", "Genre 3", "Genre 4"];

  return (
    <div className='flex text-white w-screen justify-around py-6 items-center h-[90px] absolute z-[99]'>
      <Logo />
      <div className='flex flex-row items-center justify-center gap-6'>
        {
          navItems.map((navItem) => (
            <NavLink 
            to={navItem.slug}
            key={navItem.name}
            className={({isActive}) => `${isActive ? 'text-purple-600' : 'text-white'}`}
            >
              {navItem.name}
            </NavLink>
          ))
        }
        <div className='relative'>
          <button className='flex justify-center items-center gap-1' onClick={() => setShowDropDown(prev => !prev)}>
            <h1>Genre</h1>
            <i className="ri-arrow-down-s-line"></i>
          </button>
          {showDropdown && <Menu options={genres} />}
        </div>
      </div>
      <Button className='px-4 py-2 bg-blue-600'>Sign Out</Button>
    </div>
  );
}

export default Header;
