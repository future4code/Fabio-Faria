import React from "react";

class DetalhesUser extends React.Component {
  render() {
    const detalhesUser = this.props.detalhes.map((user) => {
      return (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      );
    });
    return (
      <div>
        {detalhesUser}
        <button onClick={this.props.voltarPagina}>Pagina Inicial</button>
      </div>
    );
  }
}

export default DetalhesUser;
