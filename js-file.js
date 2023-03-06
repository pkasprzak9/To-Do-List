// AND ON NOT CROSSING 'remove' BUTTON
// AND WRAPPING TASKS

function addToList() {
    const input = document.getElementById('inputTask').value;
    if (input.trim().length > 0) {
      const list = document.getElementById('tasks');
      const task = document.createElement('li');
      const button = document.createElement('button');
      const check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      check.classList.add('task-check');
      button.innerHTML = 'x';
      button.classList.add('single-task-button');
      task.innerHTML = input;
      task.classList.add('single-task');
      task.append(button);
      task.insertBefore(check, task.firstChild);
      list.firstChild.after(task);
      document.getElementById('inputTask').value = '';
    } else {
      alert('You must add something!');
    }
  }
  

  function removeTask(task) {
    task.parentNode.removeChild(task);
  }

  
  const tasksList = document.getElementById('tasks');
  tasksList.addEventListener('click', function(event) {
    const elementClicked = event.target;
    if (elementClicked.classList.contains('single-task-button')) {
      removeTask(elementClicked.parentNode);
    }
  });
  


