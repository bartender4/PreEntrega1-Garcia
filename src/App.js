import './App.css';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/ItemListContariner/ItemListContainer';
function App() {
  return (
    <div className="App">
      
      <h1>
        Recopados
      </h1>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
