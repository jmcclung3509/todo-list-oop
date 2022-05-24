const listContainer = document.querySelector(".todo-list");


class Todo {
    todo = "";
    constructor(text, container) {
        this.text = text;
        this.container = container
        this.createTodo();
    }
    createTodo() {
        this.todo = document.createElement("li");
        this.todo.innerHTML = this.text;
        this.container.appendChild(this.todo)


        let checkBtn = document.createElement("button")
        checkBtn.innerHTML = "Done"
        checkBtn.onclick = () => {
            this.checkOff()
        }
        this.todo.appendChild(checkBtn)

        let deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "X"
        deleteBtn.onclick = () => {
            this.deleteTodo()
        }
        this.todo.appendChild(deleteBtn)
    }
    checkOff() {
        this.todo.style.color = "green";
        this.todo.style.textDecoration = "line-through";
    }
    deleteTodo() {
        this.container.removeChild(this.todo)
    }
}
let todoArray = []

function saveTodo() {
    let inputContainer = document.querySelector("#todo")
    let inputValue = inputContainer.value
    todoArray.push(new Todo(inputValue, listContainer))
    clearInput()
}
function undoDelete() {
    todoArray[0].createTodo()
}
function clearInput() {
    let inputContainer = document.getElementById("todo")
    inputContainer.value = ""
}


























// class Todo {
//     newItem = "";
//     constructor(text, container) {
//         this.text = text;
//         this.container = container;
//         this.done = false;
//         this.addToView();
//     }
//     addToView() {
//         this.newItem = document.createElement("li")
//         this.newItem.innerHTML = this.text;
//         let addBtn = document.createElement("button");
//         addBtn.innerHTML = "Add"


//         let markDoneBtn = document.createElement("button");
//         markDoneBtn.innerHTML = "Done"
//         markDoneBtn.onclick = () => {
//             this.markAsDone()
//         }


//         let deleteBtn = document.createElement("button");
//         deleteBtn.innerHTML = "X";
//         deleteBtn.onclick = () => {
//             this.deleteItem()
//         }\
//         this.newItem.appendChild(deleteBtn)
//         this.newItem.appendChild(markDoneBtn)
//         this.container.appendChild(this.newItem)


//     }
//     deleteItem() {
//         this.container.removeChild(this.newItem)
//     }
//     markAsDone() {
//         this.newItem.style.textDecoration = "line-through";
//         this.newItem.style.color = "red"
//     }
// }


// let todoList = []

// function saveTodo() {
//     let todoInput = document.querySelector("#todo")
//     let todoText = todoInput.value;

//     console.log(todoText)
//     todoList.push(new Todo(todoText, listContainer))
// }
// console.log(todoList)


