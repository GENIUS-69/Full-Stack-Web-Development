const fs = require('fs');
const { json } = require('stream/consumers');
const filePath = "./Todo/tasks.json";

const loadTask = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath,dataJSON);
}

const addTask = (task) => {
    const tasks = loadTask();
    tasks.push({task});
    saveTasks(tasks);
}

const command = process.argv[2]
const argument = process.argv[3]

if (command === 'add') {
    addTask(argument);
} else if (command === 'list') {
    listTasks();
} else if (command === 'remove') {
    removeTask(parseInt(argument))
} else {
    console.log('command Not Found...');
}