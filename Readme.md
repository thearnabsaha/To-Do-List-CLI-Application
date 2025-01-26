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
   git clone https://github.com/thearnabsaha/To-Do-List-CLI-Application.git
   ```

2. Navigate to the project directory:

   ```bash
   cd To-Do-List-CLI-Application
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

3. **Update a To-Do:**

   ```bash
   npm run todo update "old task description" "new task description"
   ```

   Updates an existing task with a new description.

4. **Mark a To-Do as Done:**

   ```bash
   npm run todo done "your task description"
   ```

   Removes a task matching the given description.

5. **Reset the To-Do List:**

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

3. Update a task:

   ```bash
   npm run todo update "Buy coffee" "Buy tea"
   ```

4. Mark a task as done:

   ```bash
   npm run todo done "Buy tea"
   ```

5. Reset the list:

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
  "version": "1.0.1",
  "main": "index.js",
  "dependencies": {
    "chalk": "^2.4.2",
    "commander": "^13.1.0"
  },
  "scripts": {
    "todo": "node index.js"
  },
  "keywords": ["todo", "cli", "task-manager", "productivity", "nodejs"],
  "author": "Your Name",
  "license": "ISC",
  "description": "A Node.js-based CLI to-do list application for managing daily tasks effectively."
}
```

## Contributing

Contributions are welcome! Feel free to:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.
