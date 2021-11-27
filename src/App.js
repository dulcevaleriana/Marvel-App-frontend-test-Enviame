import { Routes, Route } from "react-router-dom";

import Menu from './components/Menu';

import Ejercicio3 from './views/Ejercicio3';
import Ejercicio2 from './views/Ejercicio2';
import Ejercicio1 from './views/Ejercicio1';

const App = () =>{  
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Ejercicio3 />} />
        <Route path="/Ejercicio2" element={<Ejercicio2 />} />
        <Route path="/Ejercicio1" element={<Ejercicio1 />} />
      </Routes>
    </div>
  );
}

export default App;
