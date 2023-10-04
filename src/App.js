import './App.scss';
import MenuPizza from './components/MenuPizza';
import IngredientList from './components/IngredientList';
import HeaderApp from './components/HeaderApp';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
import PreviewOrder from './components/PreviewOrder';


function App() {
  return (
    // <div className="App">
    <Container>
      <HeaderApp />
      <PreviewOrder />
      <MenuPizza />

      {/* <IngredientList /> */}
    </Container>
    // </div>
  );
}

export default App;
