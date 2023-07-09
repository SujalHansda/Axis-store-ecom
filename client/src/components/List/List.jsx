import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const listQuery =     `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    (item) => `&[filters][sub_categories][id][$eq]=${item}`
  )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // console.log(listQuery); query for filters!
  const { data, loading, error } = useFetch(listQuery
  );

  return (
    <div className='list'>
      {loading ? (
        <div className='loading'>
          <img src='/img/spinner.gif' alt='' />
        </div>
      ) : (
        data?.map((item) => <Card item={item} key={item.id} />)
      )}
    </div>
  );
};

export default List;
