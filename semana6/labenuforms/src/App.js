import React from "react";
import "./App.css";

import "./App.css";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";
import FormInicial from "./components/FormInicial";

class App extends React.Component {
  state = {
    etapa: 1,
  };

  renderizaEtapas = () => {
    switch (this.state.etapa) {
      case 1:
        return <FormInicial botaoEtapa={this.mudarEtapaDoEstado} />;
      case 2:
        return <Etapa2 botaoEtapa={this.mudarEtapaDoEstado} />;
      case 3:
        return <Etapa3 botaoEtapa={this.mudarEtapaDoEstado} />;
      case 4:
        return <Etapa4 />;
      default:
        return alert("Preencha corretamente os campos");
    }
  };

  mudarEtapaDoEstado = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };
  render() {
    return <div className="form-container">{this.renderizaEtapas()}</div>;
  }
}

export default App;
