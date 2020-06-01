import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  border-radius: 20px;
  background: beige;
  padding: 1rem;
  img {
    display: inline-block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const PlantCard = ({ plants }) => {
  const { image, name, desc, status } = plants;
  return (
    <CardWrapper>
      <h3 className="fish-name">{name}</h3>
      <img src={image} alt={name} />
      <p>{desc}</p>
      <button>Dowiedź się więcej</button>
    </CardWrapper>
  );
};

// Card.propTypes = {
//   plants: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     desc: PropTypes.string,
//     status: PropTypes.string,
//   }),
// };

export default PlantCard;
