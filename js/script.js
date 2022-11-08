// função que adiciona tarefa
function addTask() {

    // título da tarefa
    const taskTitle = document.querySelector('#task-title').value; /*value para capturar o input do usuário*/

    if (taskTitle) { /*verificação para evitar inputs vazios*/

        // clonando o template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true); //Comando para clonar o HTML que mapemamos acima.

        // adicionando o título
        newTask.querySelector('.task-title').textContent = taskTitle; // recuperando o valor do taskTitle para o textContent.

        // removendo as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        // adiciona tarefa na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask);

        // adicionando o evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function () { //com o remove-btn ligado com a newTask, o programa já vai referenciar.
            removeTask(this); //Não precisamos mapear aqui porque o que queremos remover já foi mapeado. Portanto, iremos usar o this.
        });

        // adicionando o evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function () {
            completeTask(this);
        });

        // limpar texto do input 
        document.querySelector('#task-title').value = '';
    }
}

// função de remover tarefa 
function removeTask(task) {

    task.parentNode.remove(true);
}

// função de completar tarefa
function completeTask(task) {

    const taskToComplete = task.parentNode; /*mapeando o pai*/

    taskToComplete.classList.toggle('done'); /*o toggle adiciona uma classe se ela não tiver e remove essa classe se tiver, tudo isso pelo event. Poupa if*/
}

// evento de adicionar tarefa 
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function (e) {

    e.preventDefault();

    addTask();

});
