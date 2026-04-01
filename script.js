import { TRASH_ICON } from "./icons.js";

const input = document.getElementById("add-task-content");
const addButton = document.querySelector(".add-button");
const taskList = document.querySelector(".task-list");
const date = document.getElementById("date");

const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
date.textContent = now.toLocaleDateString('pt-BR', options);


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderList();

function renderList() {
    taskList.innerHTML = "";

    const listaOrdenada = [...tasks].sort((a, b) => a.isCompleted - b.isCompleted); // n entendi essa parte, tem que ser item ou task?

    listaOrdenada.forEach(e => {

        const li = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");
        const p = document.createElement("p");
        const btn = document.createElement("button");

        li.classList.add("task-item");
        label.classList.add("task-item-content");
        input.type = "checkbox";
        p.textContent = e.task;
        btn.classList.add("delete-button");
        btn.innerHTML = TRASH_ICON;


        label.appendChild(input);
        label.appendChild(p);
        li.appendChild(label);
        li.appendChild(btn);


        taskList.appendChild(li);

        if (e.isCompleted) {
            li.classList.add("is-completed");
            input.checked = true;
        }

        input.addEventListener("change", function () {
            e.isCompleted = input.checked;
            renderList();
        });

        btn.addEventListener("click", function () {
            tasks = tasks.filter(task => e.id !== task.id);
            renderList(); ///cria uma novas lista onde ele procura a tarefa que nao seja igual a tarefa que o usuário quer excluir, ou seja, ele cria uma nova lista sem a tarefa que o usuário quer excluir.
        });

    });

    saveToLocalStorage();
};


function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


addButton.addEventListener("click", function () {
        let inputTaks = input.value;
        const taskExists = tasks.some(task => task.task === inputTaks); // o some retorna true ou false, ele verifica se tem algum item na lista que seja igual a tarefa que o usuário quer adicionar, se tiver ele retorna true, se não tiver ele retorna false. O some é mais eficiente do que o find, porque ele para de procurar assim que encontra o primeiro item que atende a condição, enquanto o find continua procurando até o final da lista mesmo depois de encontrar um item que atende a condição.

        if (inputTaks === "") {
            alert("Por favor, insira uma tarefa.");
            return
        } else if (!taskExists) {
            tasks.unshift({
                id: Date.now(),
                task: inputTaks,
                isCompleted: false
            });
            input.value = "";
            renderList()
            console.log(tasks);
        } else {
            alert("Essa tarefa já existe na lista.");
        }
    });


    