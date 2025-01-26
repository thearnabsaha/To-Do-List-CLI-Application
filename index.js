const fs = require('fs');
const chalk=require("chalk"); 
const { Command } = require('commander');
const program = new Command();

let todos=[]
program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('1.0.0');

program.command('read')
  .description(chalk.green('to read all the todos (node index.js read)'))
  .action(()=>{
    fs.readFile('todos.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          console.log(chalk.green('Reset the Tasklist First'));
        console.log(chalk.green(`Use this code first : ${chalk.white("npm run todo reset")}`));

          return;
        }
        console.log(JSON.parse(data));
      });
  })
  
program.command('add')
  .description(chalk.green('to add a todo (node index.js add "buy coffee" ) '))
  .argument('<string>', 'which todo will be added')
  .action(()=>{
    fs.readFile('todos.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        console.log(chalk.green('Reset the Tasklist First'));
        console.log(chalk.green(`Use this code first : ${chalk.white("npm run todo reset")}`));

        return;
      }
      todos=JSON.parse(data)
      if(!todos.filter(e=>e.task===program.args[1].trim()).length){
        todos.push({task:program.args[1].trim()})
        fs.writeFile('todos.json', `${JSON.stringify(todos)}`, (err) => {
          if (err) throw err;
          console.log(chalk.green('Task Added successfully'));
        });
      }else{
        console.log(chalk.green("Task already exists"));
      }
    });
  })

program.command('done')
  .description(chalk.green('to delete a todo (node index.js done "buy coffee" ) '))
  .argument('<string>', 'which todo will be added')
  .action(()=>{
    fs.readFile('todos.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        console.log(chalk.green('Reset the Tasklist First'));
        console.log(chalk.green(`Use this code first : ${chalk.white("npm run todo reset")}`));
        return;
      }
      todos=JSON.parse(data)
      if(todos.filter(e=>e.task===program.args[1].trim()).length){
        
        todos=todos.filter(e=>e.task!==program.args[1].trim())
        fs.writeFile('todos.json', `${JSON.stringify(todos)}`, (err) => {
          if (err) throw err;
          console.log(chalk.green('Task removed successfully'));
        });
      }else{
        console.log(chalk.green('Task does not exist'));
      }
    });
  })

program.command('update')
  .description(chalk.green('to update a todo (node index.js update "buy coffee" "buy tea") '))
  .argument('<string>', 'old todo')
  .argument('<string>', 'new todo')
  .action(()=>{
    fs.readFile('todos.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        console.log(chalk.green('Reset the Tasklist First'));
        console.log(chalk.green(`Use this code first : ${chalk.white("npm run todo reset")}`));
        return;
      }
      todos=JSON.parse(data)
      if(!todos.filter(e=>e.task===program.args[2].trim()).length){
        if(todos.filter(e=>e.task===program.args[1].trim()).length){
          
          todos=todos.filter(e=>e.task!==program.args[1].trim())
          todos.push({task:program.args[2].trim()})
          fs.writeFile('todos.json', `${JSON.stringify(todos)}`, (err) => {
            if (err) throw err;
            console.log(chalk.green('Task Updated successfully'));
          });
        }else{
          console.log(chalk.green('Given Task Does not exists'));
        }
      }else{
        console.log(chalk.green('New Task already Exists '));
      }
    });
  })

program.command('reset')
  .description(chalk.green('to reset the todolist (node index.js reset) '))
  .action(()=>{
      fs.writeFile('todos.json', `[]`, (err) => {
        if (err) throw err;
        console.log(chalk.green('TaskList Resets successfully'));
      });
  })
program.parse();