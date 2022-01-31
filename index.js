const input = document.querySelector('.input-div .input')
const inputButton = document.querySelector('.input-div button')
const divTaskList = document.querySelector('.task-list')


divTaskList.classList.remove('task-list')


inputButton.addEventListener('click', (event) => {
    createTask(input.value)
})


function createTask(inputValue) {
    const divTask = document.createElement('div')
    const p = document.createElement('p')
    const button = document.createElement('button')
    const hr = document.createElement('hr')
    const br = document.createElement('br')

    button.addEventListener('click', (event) => {
        deleteTask(button)
    })

    divTaskList.classList.add('task-list')
    divTask.className = 'div-task'
    button.className = 'button'

    p.innerText = inputValue
    button.innerText = 'Concluído'
    divTask.append(p)
    divTask.append(button)
    divTask.append(br)
    divTask.append(hr)
    
    divTaskList.append(divTask)
}

function deleteTask(button) {
    const div = button.parentNode.parentNode
    div.removeChild(button.parentNode)
    console.log(divTaskList.hasChildNodes())

}