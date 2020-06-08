import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../constants/stylingElements";
import styled from "styled-components";

const LoaderButton = styled(Button)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .spinning {
    margin-right: 7px;
    ${"" /* margin-left: 7px; */}
    top: 2px;
    animation: spin 1s infinite linear;
  }
  @keyframes spin {
    from {
      transform: scale(1) rotate(0deg);
    }
    to {
      transform: scale(1) rotate(360deg);
    }
  }
`;

const LoadingDiv = styled.div`
  background: white;
  position: absolute;
  border-radius: 20px;
  top: 88px;
  left: 50%;
  height: 80vh;
  transform: translate(-50%);
  padding: 1rem 2rem;
  width: 95%;
  ${"" /* max-width: 500px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  .spinning {
    font-size: 2rem;
    margin-right: 7px;
    ${"" /* margin-left: 7px; */}
    top: 2px;
    animation: spin 1s infinite linear;
  }
  @keyframes spin {
    from {
      transform: scale(1) rotate(0deg);
    }
    to {
      transform: scale(1) rotate(360deg);
    }
  }
`;

const LoadingPopup = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <LoadingDiv>
          <FontAwesomeIcon icon={faSpinner} className="spinning" />
        </LoadingDiv>
      ) : null}
    </>
  );
};

const LoadingButton = ({ isLoading, disabled = false, text }) => {
  return (
    <LoaderButton disabled={disabled || isLoading}>
      {text}
      {isLoading && <FontAwesomeIcon icon={faSpinner} className="spinning" />}
    </LoaderButton>
  );
};

export { LoadingButton, LoadingPopup };
