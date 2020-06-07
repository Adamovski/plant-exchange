import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 56px;
  margin-bottom: 2rem;
  min-height: 100vh;
  background: rgb(250, 250, 250);
  background: rgba(0, 0, 0, 0.4)
    url(${require("./../assets/images/suitcase.jpg")});
  background-blend-mode: darken;
  background-size: cover;
  object-fit: cover;
  min-height: 100vh;
`;
export { Wrapper };

const Background = styled.div`
  min-height: 100vh;
  margin-top: -56px;
  margin-bottom: -2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { Background };

const Button = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  min-width: 120px;
  outline: none;
  background: black;
  color: white;
`;

export { Button };
