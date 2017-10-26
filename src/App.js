import React, { Component } from 'react'
import './App.css';
import CadastroForm from './formulario/Formulario.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prova de Vida</h1>
          <h3> Cadastro de segurado</h3><br/>
        </header>                
        <CadastroForm/>
      </div>
    );
  }
}

export default App;
