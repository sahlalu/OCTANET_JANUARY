function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var alertBox = document.getElementById('alert');

    //adding task into the list
    if (taskInput.value !== ''){
        var newTask = document.createElement('li');
        newTask.className = 'task-item';

        var taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.innerText = taskInput.value;

        //task done button
        var doneButton = document.createElement('button');
        doneButton.className = 'done-button';
        doneButton.innerText = '✓';
        doneButton.onclick = function() {
            taskText.style.textDecoration = 'line-through';
        };
        
        //remove task button
        var crossButton = document.createElement('button');
        crossButton.className = 'cross-button';
        crossButton.innerText = '×';
        crossButton.onclick = function() {
            newTask.parentNode.removeChild(newTask);
        };


        newTask.appendChild(taskText);
        newTask.appendChild(crossButton);
        newTask.appendChild(doneButton);

        taskList.appendChild(newTask);
        taskInput.value = '';
    }else{
        alertBox.style.display = 'block';
    }
}

//closing alertBox
function closeAlert() {
    var alertBox = document.getElementById('alert');
    alertBox.style.display = 'none';
}