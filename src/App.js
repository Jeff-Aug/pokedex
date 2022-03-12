import './App.css';

import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { searchPokemon } from './Api/api';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';

function App() {


  return (
    <div>
      <Navbar />
      <Searchbar/>
      <div className="App">

      </div>
    </div>
  );
}

export default App;
