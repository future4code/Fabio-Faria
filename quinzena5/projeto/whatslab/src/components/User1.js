import React from "react";

class User1 extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.user}
          value={this.props.valorNome}
          placeholder="Nome"
        />
        <input
          type="text"
          onChange={this.props.mensagem}
          value={this.props.valorMensagem}
          placeholder="Mensagem"
        />
        <button onClick={this.props.post} type="button">
          Enviar
        </button>
      </div>
    );
  }
}

export default User1;
