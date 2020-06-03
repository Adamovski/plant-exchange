import React from "react";
import clothes from "../../sampleClothes";
import ClothesDetails from "./ClothesDetails";

const Details = () => {
  // console.log([...plants.plant1.images]);
  return <ClothesDetails cloth={clothes[0]} />;
};

export default Details;
