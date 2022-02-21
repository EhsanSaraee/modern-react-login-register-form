import styled from 'styled-components';
import './App.css';

const App = () => {
   return <AppContainer>hello world</AppContainer>;
};

const AppContainer = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export default App;
