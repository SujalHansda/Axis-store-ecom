import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const ptype = ((data?.attributes?.sub_categories?.data)?.map((item) => item?.attributes?.title)); //ok this ?mf is crazy. it just sets unavailable value to undefined.
  const ptypes = ptype ? ptype.join(', ') : null;
  return (
    <div className='product'>
      {loading ? (
        <div className='loading'>
          <img src='/img/spinner.gif' alt='' />
        </div>
      ) : (
        <>
          <div className='left'>
            <div className='images'>
              <img
                src={UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
                alt='first_image'
                onClick={(e) => setSelectedImg("img")}
              />
              {data?.attributes.img2.data && (
                <img
                  src={
                    UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt='second_image'
                  onClick={(e) => setSelectedImg("img2")}
                />
              )}
            </div>
            <div className='mainImg'>
              <img
                src={
                  UPLOAD_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=''
              />
            </div>
          </div>
          <div className='right'>
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <p>{data?.attributes?.desc}</p>
            <div className='quantity'>
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className='add'
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className='links'>
              <div className='item'>
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className='item'>
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className='info'>
              <span>Vendor: CHANEL</span>
              <span>Product Type: {ptypes} </span>
              <span>Tag: {ptypes}</span>
              <hr />
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
