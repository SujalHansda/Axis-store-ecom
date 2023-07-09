import React, { useState, useEffect, useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() =>{ //for closing cart when clicking outside of it
    let handler = (e) => {
    if(!menuRef.current.contains(e.target)){
      setOpen(false);
    }
    }
    
    document.addEventListener("mousedown", handler);
    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  })

  return (
    <div className='navbar' ref={menuRef}>
      <div className='wrapper'>
        <div className='left'>
          <div className='item'>
            <img src='/img/en.png' alt='' />
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Women
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Men
            </Link>
          </div>
        </div>
        <div className='center'>
          <Link className='link' to='/'>
            AXIS STORE
          </Link>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>
          <div className='icons'>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className='cartIcon' onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
