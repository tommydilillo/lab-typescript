// Add the reference to the "TodoInterface"

// 1. Create a class Todo that implements the Interface created before.

import { Methods } from 'todoInterface.js';

class Todo implements Methods {
    tasks = []

    addTask(task: string): Number {
        this.tasks.push(task);
        console.log(`ADDDED to tasks array: ${task}`)
        return this.tasks.length

    }
    listAllTasks(): void {
        this.tasks.forEach((task, num) => {
            console.log(`List ${num} is: ${task} `)
        })
    }

    deleteTask(task: string) {
        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
        console.log(`DELETE -- Task ${task}" deleted from the list`);
        console.log(this.tasks);
        return this.tasks.length
    }

}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
