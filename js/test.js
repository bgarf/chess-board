var inquirer = require('inquirer');
  
// async function asyncCall() {
    // await 
    inquirer
        .prompt([
        {type: 'input', name: 'x', message: 'X position'},
        {type: 'input', name: 'y', message: 'Y position'}
        ])
        .then(answers => {
            console.log("You chose the position " + x + y);
            x = answers.x.toUpperCase()
            y = answers.y

            
        })
        .catch(error => {
        if(error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
        });
// } 

