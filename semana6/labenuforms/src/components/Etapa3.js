import React from "react";

class Etapa3 extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h4>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h4>
        <form action="">
          <label>
            5. Por que você não terminou um curso de graduaçāo?
            <br />
            <input type="text" />
          </label>
          <br />
          <label>
            6. Você fez algum curso complementar?
            <br />
            <select>
              <option value="">Selecione</option>
              <option value="">Não</option>
              <option value="">Curso Técnico</option>
              <option value="">Curso de Inglês</option>
            </select>
          </label>
          <br />
          <button onClick={this.props.botaoEtapa}>Proxima Etapa</button>
        </form>
      </div>
    );
  }
}

export default Etapa3;
