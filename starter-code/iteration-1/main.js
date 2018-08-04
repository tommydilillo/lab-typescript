let tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log(`ADD - Task "${task}" inserted in the list`);
    return tasks.length;
}
console.log(`Number of items: ` + addTask);
function listAllTasks() {
    for (let i of tasks) {
        console.log(`List all tasks: ${i}`);
    }
}
function deleteTask(task) {
    const index = tasks.indexOf(task);
    console.log(index);
    tasks.splice(index, 1);
    console.log(`DELETE -- Task ${task}" deleted from the list`);
    console.log(tasks);
    return tasks.length;
}
console.log(`Number of items: ` + deleteTask);
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
