import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CadastroForm from './Formulario.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Prova de Vida</h1>
          <h3> Cadastro de segurado</h3><br/>
        </header>                
        <CadastroForm/>
      </div>
    );
  }
}

export default App;
