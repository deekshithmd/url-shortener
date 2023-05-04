import styled from "styled-components";
import { Shortener } from "./components/Shortner";

function App() {
  return (
    <div>
      <Header>URL Shortener</Header>
      <Shortener />
    </div>
  );
}

const Header = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

export default App;
