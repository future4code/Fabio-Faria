import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComentario = styled.input`
  width: 100%;
  margin-right: 5px;
`;

export class SecaoComentario extends Component {
  state = {
    comentario: "",
  };

  onChangeComentario = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    this.setState({ comentario: e.target.value });
  };

  render() {
    return (
      <>
        <form aoEnviar={this.onChangeComentario}>
          <CommentContainer>
            <InputComentario
              placeholder={"Comentário"}
              value={this.state.comentario}
              onChange={this.onChangeComentario}
            />
            <button onClick={this.props.aoEnviar}>Enviar</button>
          </CommentContainer>
        </form>
      </>
    );
  }
}
