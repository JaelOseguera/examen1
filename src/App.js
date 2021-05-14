//APP

import './App.css';
import Alumno from './Componente/Alumno';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alumno        
        identidad="0908-2000-12345" 
        nombre="Oscar Antonio Perez Lopez" 
        nacimiento= "25-may-2000" 
        promedio={(100+72+94)/3}/>
        <Alumno
        identidad="0801-2001-12345" 
        nombre="Maria Fernanda Juarez" 
        nacimiento= "12-feb-2001" 
        promedio={(99+62+71)/3}/>
        <Alumno
        identidad="0908-2000-12345" 
        nombre="Carlos Herminio Aguirre" 
        nacimiento= "25-may-2000" 
        promedio={(89+92+74)/3}/>
      </header>
    </div>
  );
}


export default App;

