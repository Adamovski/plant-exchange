import React from "react";
import ClothesDetails from "./ClothesDetails";
import { useParams } from "react-router-dom";

const Details = () => {
  //using local storage to get the item as useParams has issues when refreshing page or entering via direct link - product wont update if is updated in store unless we reenter via search and filter page

  const { id } = useParams();
  console.log(localStorage.getItem(id));
  const item = JSON.parse(localStorage.getItem(id));

  return item ? <ClothesDetails cloth={item} /> : <p>nope</p>;
};

export default Details;
