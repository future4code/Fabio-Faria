import React from "react";
import Etapa2 from "./Etapa2";
import "../styles/styles.css";

class FormInicial extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h2>ETAPA 1 - DADOS GERAIS</h2>
        <form>
          <div>
            <label>
              1. Qual seu Nome?
              <br />
              <input type="text" />
            </label>
          </div>
          <div>
            <label>
              2. Qual sua idade?
              <br />
              <input type="number" min="0" />
            </label>
          </div>
          <div>
            <label>
              3. Qual seu e-mail?
              <br />
              <input type="email" />
            </label>
          </div>
          <div>
            <label>
              4. Qual sua escolaridade?
              <br />
              <select>
                <option value="">Selecione</option>
                <option value="Ensino Médio">Ensino Médio Completo</option>
                <option value="Ensino Médio Incompleto">
                  Ensino Médio Incompleto
                </option>
                <option value="Ensino Superior">
                  Ensino Superior Completo
                </option>
                <option value="Ensino Superior Incompleto">
                  Ensino Superior Incompleto
                </option>
              </select>
            </label>
          </div>
          <br />
        </form>
        <button onClick={this.props.botaoEtapa}>Proxima Etapa</button>
      </div>
    );
  }
}

export default FormInicial;
