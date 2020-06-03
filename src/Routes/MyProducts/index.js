import React from "react";
import Wrapper from "../../constants/Wrapper";
import NewProduct from "./AddProduct";

const MyProducts = () => {
  return (
    <Wrapper>
      <div>These are the products</div>
      <NewProduct />
    </Wrapper>
  );
};

export default MyProducts;
