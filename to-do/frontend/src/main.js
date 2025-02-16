function saveTasks() {
    const tasks = [];
    const listItems = document.querySelectorAll('#activeUL li, #completedUL li');
    listItems.forEach(item => {
        const taskText = item.querySelector('.task-text').textContent;
        const timeText = item.querySelector('.time-text').textContent;
        const dateText = item.querySelector('.date-text').textContent;
        const priorityText = item.querySelector('.priority').textContent;
        const done = item.classList.contains('done');
        tasks.push({
            text: taskText,
            time: timeText,
            date: dateText,
            priority: priorityText,
            done: done
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.done ? 'done' : '';
        li.innerHTML = `
          <span class="task-text">${task.text}</span> - 
          <span class="time-text">${task.time}</span> - 
          <span class="date-text">${task.date}</span>
          <span class="priority">${task.priority}</span>
          <span class="close">&#x00D7;</span>
      `;
        document.getElementById(task.done ? 'completedUL' : 'activeUL').appendChild(li);

        li.querySelector('.close').onclick = function() {
            showModal(this.parentElement);
        };
        li.onclick = function() {
            this.classList.toggle('done');
            moveTask(this);
        };
    });
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var timeValue = document.getElementById("timeInput").value;
    var dateValue = document.getElementById("dateInput").value;
    var priorityValue = document.getElementById("priorityInput").value;

    li.innerHTML = `
        <span class="task-text">${inputValue}</span> - 
        <span class="time-text">${timeValue}</span> - 
        <span class="date-text">${dateValue}</span>
        <span class="priority">[${priorityValue.charAt(0).toUpperCase() + priorityValue.slice(1)}]</span>
        <span class="close">&#x00D7;</span>
    `;

    if (inputValue === '') {
        alert("Валидация ввода (проверка на пустой ввод).");
    } else {
        document.getElementById("activeUL").appendChild(li);
        sortList();
        saveTasks();
    }

    document.getElementById("myInput").value = "";
    document.getElementById("timeInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("priorityInput").value = "low";

    li.querySelector('.close').onclick = function() {
        showModal(this.parentElement);
    };

    li.onclick = function() {
        this.classList.toggle('done');
        moveTask(this);
    };
}

function showModal(task) {
    var modal = document.getElementById("confirmationModal");
    var confirmDelete = document.getElementById("confirmDelete");
    var cancelDelete = document.getElementById("cancelDelete");

    modal.style.display = "block";

    confirmDelete.onclick = function() {
        task.remove();
        closeModal();
        saveTasks();
    };

    cancelDelete.onclick = function() {
        closeModal();
    };
}

function closeModal() {
    var modal = document.getElementById("confirmationModal");
    modal.style.display = "none";
}

function moveTask(task) {
    const activeList = document.getElementById("activeUL");
    const completedList = document.getElementById("completedUL");

    if (task.classList.contains('done')) {
        completedList.appendChild(task);
    } else {
        activeList.appendChild(task);
    }
    saveTasks();
    sortList();  // Ensure sorting after moving tasks
}

function sortList() {
    const list = document.getElementById("activeUL");
    const listItems = Array.from(list.getElementsByTagName("LI"));

    listItems.sort((a, b) => {
        const priorityA = getPriority(a);
        const priorityB = getPriority(b);
        const dateA = getDate(a);
        const dateB = getDate(b);

        if (priorityA !== priorityB) {
            return priorityB - priorityA; // Descending priority
        }
        return dateA - dateB; // Ascending date
    });

    list.innerHTML = '';
    listItems.forEach(item => list.appendChild(item));
}

function getPriority(listItem) {
    const priorityText = listItem.querySelector('.priority').textContent.trim().toLowerCase();
    switch (priorityText) {
        case "[high]":
            return 3;
        case "[medium]":
            return 2;
        case "[low]":
            return 1;
        default:
            return 0;
    }
}

function getDate(listItem) {
    const dateText = listItem.querySelector('.date-text').textContent.trim();
    return new Date(dateText);
}

document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});
