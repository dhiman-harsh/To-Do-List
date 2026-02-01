let toDos = []
let toDoInput = document.querySelector('.task-content')
let addButton = document.querySelector('.add')
let taskList = document.querySelector('.u-list')
let note = document.querySelector('.note')

// add task to content page
let addTaskOnPage = function () {
    let task = toDoInput.value
    if (task) {
        toDos.push(task)
        taskList.innerHTML = "";
    }
    toDos.forEach((value, index) => {
        let content = value

        let li = document.createElement('li')
        li.setAttribute('class', 'list-item')

        let input = document.createElement('input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('name', 'task')
        input.setAttribute('class', 'input-checkbox')

        let div = document.createElement('div')
        div.setAttribute('class', 'li-content')
        div.innerHTML = content

        let span = document.createElement('span')
        span.setAttribute('class', 'remove-task')
        span.innerHTML = `<i class="fa-solid fa-xmark remove-task-i"></i>`

        li.append(input)
        li.append(div)
        li.append(span)

        taskList.append(li);
    })
    updateNote()
}

let updateNote = function () {
    if (toDos.length === 0) {
        note.innerHTML = `List is empty at the moment!`
    } else {
        note.innerHTML = `That's all for now!`
    }
}

let updateToDos = function () {
    toDos.length = 0
    let elements = taskList.children
    for(let i = 0; i < elements.length; i++) {
        let secondChildren = elements[i].children[1]
        toDos.push(secondChildren.innerHTML)
    }
    console.log(toDos)
    updateNote()
}

window.addEventListener('load', () => {
    updateToDos()
})

addButton.addEventListener('click', () => {
    addTaskOnPage()
})

taskList.addEventListener('click', (e) => {
    // checkbox logic
    if (e.target.matches('input[type="checkbox"]')) {
        let text = e.target.parentElement.children[1]
        text.style.textDecoration = e.target.checked ? "line-through" : "none"
    }

    // remove logic
    if (e.target.matches('.remove-task')) {
        e.target.parentElement.remove()
        updateToDos()
    }

    if (e.target.matches('.remove-task-i')) {
        e.target.parentElement.parentElement.remove()
        updateToDos()
    }
})