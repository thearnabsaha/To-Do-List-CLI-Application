const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

let todos=[]
program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('1.0.0');

program.command('read')
  .description('to read all the todos (node index.js read)')
  .action(()=>{
    fs.readFile('todos.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        console.log(JSON.parse(data));
      });
  })
  
program.command('add')
  .description('to add a todo (node index.js add "buy coffee" ) ')
  .argument('<string>', 'which todo will be added')
  .action(()=>{
    fs.readFile('todos.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      todos=JSON.parse(data)
      todos.push({task:program.args[1]})
      fs.writeFile('todos.json', `${JSON.stringify(todos)}`, (err) => {
        if (err) throw err;
        console.log('File written successfully');
      });
    });
  })

program.command('done')
  .description('to delete a todo (node index.js done "buy coffee" ) ')
  .argument('<string>', 'which todo will be added')
  .action(()=>{
    fs.readFile('todos.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      todos=JSON.parse(data)
      todos=todos.filter(e=>e.task!==program.args[1])
      fs.writeFile('todos.json', `${JSON.stringify(todos)}`, (err) => {
        if (err) throw err;
        console.log('File written successfully');
      });
    });
  })

program.command('reset')
  .description('to reset the todolist (node index.js reset) ')
  .action(()=>{
      fs.writeFile('todos.json', `[]`, (err) => {
        if (err) throw err;
        console.log('File written successfully');
      });
  })
program.parse();
