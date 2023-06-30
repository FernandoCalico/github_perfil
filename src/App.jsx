import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {
  const [formVisible, setFormVisible] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <header>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      {nomeUsuario.length > 4 && (
        <div>
          <Perfil nomeUsuario={nomeUsuario} endereco="https://github.com/fernandocalico.png"/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </div>
      )}
      {/* {formVisible && (
        <Formulario />
      )}
      <button onClick={() => setFormVisible(!formVisible)} type="button">toggle form</button> */}
    </header>
    )
}

export default App
