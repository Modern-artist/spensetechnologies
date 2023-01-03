
import './App.scss';
import Nav from './components/navbar/Nav';
import Heropg from "./components/heropg/Heropg";
import Details from './components/details/Details';
function App() {
  return (
    <div className="App">
      <Nav />
      <Heropg />
      <Details />
    </div>
  );
}

export default App;
