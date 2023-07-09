import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
            alt='sale'
          />

          <Link className='link' to='/products/3'>
            <button>Sale</button>
          </Link>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1613552465135-e5bdaada10bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
            alt='sale'
          />

          <Link className='link' to='/products/2'>
            <button>Women</button>
          </Link>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80'
            alt='sale'
          />

          <Link className='link' to='/products/4'>
            <button>New Season</button>
          </Link>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row2'>
              <img
                src='https://images.unsplash.com/photo-1568306281824-7afe898030d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1370&q=80'
                alt='sale'
              />

              <Link className='link' to='/products/1'>
                <button>Men</button>
              </Link>
            </div>
          </div>
          <div className='col'>
            <div className='row2'>
              <img
                src='https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80'
                alt='sale'
              />

              <Link className='link' to='/products/6'>
                <button>Accesories</button>
              </Link>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80'
            alt='sale'
          />

          <Link className='link' to='/products/5'>
            <button>Shoes</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
