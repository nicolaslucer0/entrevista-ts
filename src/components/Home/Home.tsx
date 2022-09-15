import styled from "styled-components";
import "./Home.css";

const FlexContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 3em;
`;

const Title = styled.h1`
  font-size: 30px;
  padding: 20px;
  color: white;
  border-radius: 20px;
  background: linear-gradient(90deg, #673ab7, #2196f3);
`;

const Home = () => {
  //const URL = "https://reqres.in/api/users";

  return (
    <FlexContainer>
      <Title>Lista de usuarios: </Title>
    </FlexContainer>
  );
};

export default Home;
