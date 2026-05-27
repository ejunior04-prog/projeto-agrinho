// Selecionando os elementos do DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    // Validação para não adicionar tarefas vazias
    if (taskText === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    // Criando o elemento de lista (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Criando o botão de deletar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');

    // Evento para remover a tarefa ao clicar no botão 'X'
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    // Colona o botão dentro do li, e o li dentro da lista (ul)
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Limpa o campo de entrada e foca nele novamente
    taskInput.value = '';
    taskInput.focus();
}

// Ouvinte de evento para o botão de adicionar
addTaskBtn.addEventListener('click', addTask);

// Permite adicionar a tarefa também ao apertar a tecla "Enter"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
