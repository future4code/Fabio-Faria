import React from "react";
import "../styles/styles.css";

class Etapa2 extends React.Component {
  render() {
    return (
      <div className="form-container">
        <h4>INFORMAÇÕES DO CURSO SUPERIOR</h4>
        <form action="">
          <label>
            5. Qual curso?
            <br />
            <input type="text" name="curso" />
          </label>
          <br />
          <label>
            6. Qual a unidade?
            <br />
            <input type="text" name="unidade" />
          </label>
          <br />
          <button onClick={this.props.botaoEtapa}>Proxima Etapa</button>
        </form>
      </div>
    );
  }
}

export default Etapa2;
