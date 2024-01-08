import logo from "./imagenes/logo.png";
import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <div className="app-tareas">
      <div className="logo-contenedor">
        <img src={logo} className="logo" />
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis tareas </h1>

        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
