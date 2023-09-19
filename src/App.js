import './App.css';
import MenuPizza from './components/MenuPizza';
import IngredientList from './components/IngredientList';
import HeaderApp from './components/HeaderApp';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';


function App() {
  return (
    // <div className="App">
      <Container>
      <HeaderApp />
      <MenuPizza />
      {/* <IngredientList /> */}
    </Container>
    // </div>
  );
}

export default App;
