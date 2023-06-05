import React from 'react';
import './NavBar.css';
import { MenuItems } from './MenuItems';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons">
          <i
            className={clicked ? 'fas fa-times' : 'fas fa-bars'}
            onClick={handleClick}
          ></i>
        </div>

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
          {' '}
          {/* on ne peut ajouter de point aactive sinon cela deforme les emplacement
          des items */}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  <i class={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
