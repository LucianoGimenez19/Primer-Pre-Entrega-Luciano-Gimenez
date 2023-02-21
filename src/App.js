import ItemListContainer from './componentes/ItemListContainer';
import NavBar from "./componentes/NavBar"
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a Vf Deco!!"} />
    </>
  );
}

export default App;
