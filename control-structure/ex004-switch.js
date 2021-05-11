const taskList = function (level) {
    switch (Math.floor(level)) {
        case 10:
        case 9:
            console.log('Next level!');
            break;
        case 8: case 7:
            console.log('Little missing!');
            break;
        case 6: case 5: case 4: 
            console.log('More Focus!!!');
            break;
        case 3: case 2: case 1: case 0: 
            console.log('Time to start!!');
            break;
        default:
            console.log('Invalid task.');
    }
}

taskList(10);
taskList(8.6);
taskList(6.1);
taskList(3.5);
taskList(-1);
console.log('********* fim *********');

