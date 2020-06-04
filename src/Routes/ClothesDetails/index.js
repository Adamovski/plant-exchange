import React from "react";
import clothes from "../../sampleClothes";
import ClothesDetails from "./ClothesDetails";
import { useAppContext } from "../../libs/contextLib";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const index = parseInt(id) - 1;
  console.log(id);
  return <ClothesDetails cloth={clothes[index]} />;
};

export default Details;
