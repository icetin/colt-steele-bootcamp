// create an emoty array to store todos
todo = [];

// main question prompt when the program starts
let input = prompt("What would you like to do?");

// örnek olması için array'i doldurduk, test aşamasında işe yarar
const todos = ["Collect eggs", "Clean litter box"];

// ask what command they want to use
while (input !== "quit" && input !== "q")  {
    if (input === "list") {
        console.log("***************")
        for (i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("***************")
    } else if (input ===  "new") {
        let newTodo = prompt("Add new todo");
        todos.push(newTodo);
        console.log(`${newTodo} is added to list`);
    } else if (input === "delete") {
        let delItem = parseInt(prompt("Enter the index to be deleted"));
        if (!Number.isNaN(delItem)) {
            let deleted = todos.splice(delItem, 1);
            console.log(`The item ${deleted[0]} is deleted`);
        } else {
            console.log("Unknown index");
        }
    }

    input = prompt("What would you like to do?");
}
console.log("OK, quitting the app");



