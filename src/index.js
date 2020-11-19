document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('form').addEventListener('submit', (event) => {
      event.preventDefault()
      // take in input from the new task description
      let newTask = event.target.newTaskDescription.value
      //append new task input to To Do list
      addNewTask(newTask)
    })
  });

  function addNewTask(todo) {
    let task = document.getElementById('tasks')
    let newLi = document.createElement('li')
      newLi.innerText = todo

      task.appendChild(newLi)
      
  }

 
  
  