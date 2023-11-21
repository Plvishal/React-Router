import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Nav() {
  return (
    <>
      <div className="flex bg-rose-400  justify-evenly p-4 m-2 rounded-lg shadow-md flex-wrap flex-1">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/itemsDetails">ItemsDetails</Link>
      </div>
      <Outlet />
    </>
  );
}

export default Nav;
