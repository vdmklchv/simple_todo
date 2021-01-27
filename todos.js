const todos = [];
let action = prompt('What would you like to do?').toLowerCase();

while (true) {
    if (action === 'quit') {
        console.log('Program finished. Refresh browser to start again.');
        break;
    }
    switch (action) {
        case 'new':
            const todo = prompt('Enter todo to add:');
            todos.push(todo);
            break;
        case 'list':
            if (todos.length > 0) {
                console.log('List of todos:');
                for (let i = 0; i < todos.length; i++) {
                    console.log(`#${i + 1} - ${todos[i]}`);
                }
            } else {
                console.log('Todos list is empty.');
            }
            break;
        case 'delete': {
            const removeIndex = parseInt(prompt('Enter the number of todo to delete:'));
            if (removeIndex <= todos.length) {
                todos.splice(removeIndex - 1, 1);
            } else {
                console.log('Nothing to delete.');
            }
            break;
        }
    }
    action = prompt('What would you like to do?').toLowerCase();
}