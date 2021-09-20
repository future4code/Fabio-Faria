import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

const EstiloLabel = styled.label`
  margin-left: 4px;
  text-decoration: none;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    const tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
      this.setState({ tarefas: JSON.parse(tarefas) });
    }
  }

  onChangeInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  criaTarefa = () => {
    if (this.state.inputValue === "") {
      alert("Digite uma tarefa");
    }
    const tarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };

    this.setState({
      tarefas: [...this.state.tarefas, tarefa],
      completo: false,
      inputValue: "",
    });
  };

  selectTarefa = (id) => {
    const tarefas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });
    this.setState({ tarefas });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  removerTodasTarefas = () => {
    this.setState({ tarefas: [] });
  };

  deletarTarefaSelecionada = (id) => {
    const novaListaDeTarefasRemovendoTarefa = this.state.tarefas.filter(
      (tarefa) => {
        return id !== tarefa.id;
      }
    );

    this.setState({ tarefas: novaListaDeTarefasRemovendoTarefa });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />

          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.removerTodasTarefas}>
            Remover Todas as Tarefas
          </button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                key={tarefa.id}
              >
                {tarefa.texto}
                <input
                  type="checkbox"
                  onChange={() => this.deletarTarefaSelecionada(tarefa.id)}
                />
                <EstiloLabel htmlFor="Deletar Tarefa" />
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
