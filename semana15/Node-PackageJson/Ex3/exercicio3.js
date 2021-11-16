const tarefas = ["Estudar Node", "Estudar React", "Estudar React Native"];

const novaTarefa = process.argv[2];

tarefas.push(novaTarefa);

console.log(tarefas);
