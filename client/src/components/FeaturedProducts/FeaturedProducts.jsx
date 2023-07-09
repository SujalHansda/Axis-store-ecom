import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeatureProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
        Combining heritage and innovation, the Dior Fall 2023 men's collection invites you on a fascinating journey through space and time, revisiting the House's iconic fundamentals with modernity.
        </p>
      </div>
      <div className='bottom'>
        {error ? (
          <div className='error'>
            <p>Something went wrong, try again!</p>
          </div>
        ) : loading ? (  //sugoi
          <div className='loading'>
            <img src='/img/spinner.gif' alt='' />
          </div>
        ) : (
          data?.map((item) => <Card item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default FeatureProducts;
