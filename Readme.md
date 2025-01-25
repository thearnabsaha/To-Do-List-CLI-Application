# To-Do List CLI Application

A Node.js-based Command-Line Interface (CLI) application for managing your daily tasks. This application enables you to add, view, mark as complete, and reset your to-do list seamlessly using a JSON file as storage.

## Features

- **Add Tasks:** Add new tasks to your to-do list.
- **View Tasks:** View all your tasks with ease.
- **Mark Tasks as Done:** Remove tasks that are completed.
- **Reset List:** Clear the entire to-do list.

## Prerequisites

- Node.js (version 14 or above)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todolist-cli.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todolist-cli
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. **View All To-Dos:**

   ```bash
   npm run todo read
   ```

   Displays all the to-dos stored in the `todos.json` file.

2. **Add a To-Do:**

   ```bash
   npm run todo add "your task description"
   ```

   Adds a new task to the to-do list.

3. **Mark a To-Do as Done:**

   ```bash
   npm run todo done "your task description"
   ```

   Removes a task matching the given description.

4. **Reset the To-Do List:**

   ```bash
   npm run todo reset
   ```

   Clears all tasks from the to-do list.

## Example

1. Add tasks:

   ```bash
   npm run todo add "Buy coffee"
   npm run todo add "Complete the report"
   ```

2. View tasks:

   ```bash
   npm run todo read
   ```

   Output:

   ```
   [
     { "task": "Buy coffee" },
     { "task": "Complete the report" }
   ]
   ```

3. Mark a task as done:

   ```bash
   npm run todo done "Buy coffee"
   ```

4. Reset the list:

   ```bash
   npm run todo reset
   ```

## File Structure

```
.
├── index.js         # Main application script
├── todos.json       # JSON file storing the to-do list
├── README.md        # Project documentation
├── package.json     # Project metadata and dependencies
```

## package.json Example

```json
{
  "name": "todolist-cli",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "commander": "^13.1.0"
  },
  "devDependencies": {},
  "scripts": {
    "todo": "node index.js"
  },
  "keywords": ["todo", "cli", "task-manager"],
  "author": "Your Name",
  "license": "ISC",
  "description": "A CLI-based to-do list application built with Node.js."
}
```

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy managing your tasks with this CLI-based to-do list!
