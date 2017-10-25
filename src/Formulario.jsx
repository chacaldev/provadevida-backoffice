import React from 'react'

class CadastroForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state={nome: '', numBeneficio: '', dtNascimento: '', hMotora: '', hLinguagem:''}
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleNBChange=this.handleNBChange.bind(this);
        this.handleDtNascChange=this.handleDtNascChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

      handleNameChange(event) {     
        this.setState({nome: event.target.value});
      }

      handleNBChange(event){      
        this.setState({numBeneficio: event.target.value})
      }
    
      handleDtNascChange(event){
        this.setState({dtNascimento: event.target.value})
      }      
      submitForm(event){
        alert('Add user to Mongo...');
      }
    

    render() {
        return (
          <form  onSubmit={this.submitForm}>
            <label>
              Nome: <input id="nome" type="text" value={this.state.nome} onChange={this.handleNameChange} />
            </label><br/>
            <label>
              Número Beneficio: <input id="numBeneficio" type="text" value={this.state.numBeneficio} onChange={this.handleNBChange} />
            </label><br/>
            <label>
              Data Nascimento: <input id="dtNascimento" type="text" value={this.state.dtNascimento} onChange={this.handleDtNascChange} />
            </label><br/>
            <label>
              Habilidades:
                <input type='checkbox' value={this.state.hLinguagem} onSelect={this.state.changeHLinguagem}/> Linguagem
                <input type='checkbox' value={this.state.hMotora} onSelect={this.state.changeHLinguagem}/> Motora
            </label><br/>
            <input type="submit" value="Enviar" />
          </form>
        );
    }

}

export default CadastroForm;