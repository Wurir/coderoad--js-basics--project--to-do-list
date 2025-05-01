# Simple To-Do List

Technology used:
- JavaScript
- HTML
- CSS

------

Project was made by using class with methods

## Code example

```javascript
class ToDo{
    constructor(storageKey){
        this.storageKey = storageKey || 'todo'
        this.container = null
        this.tasks = this.loadTasks() || []
    }
    loadTasks(){
        return JSON.parse(localStorage.getItem(this.storageKey))
    }

    setTasks(newTasks){
        this.tasks = newTasks
        localStorage.setItem(this.storageKey, JSON.stringify(this.tasks))
        this.render()
    }

    deleteTask(indexOfTask){
        const newTasks = this.tasks.filter((taskData, index)=> {
            return index !== indexOfTask
        })
        this.setTasks(newTasks)
    }

    addTask(text){
        const newTaskData = {
            text: text,
            isCompleted: false
        }
        const newTasks = this.tasks.concat(newTaskData)
        this.setTasks(newTasks)
    }
```
