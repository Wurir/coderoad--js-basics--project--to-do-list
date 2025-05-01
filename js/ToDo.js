class ToDo{
    constructor(tasks){
        this.tasks = this.loadTasks() || []
        this.container = null
    }

    loadTasks(){
        return JSON.parse(localStorage.getItem('todo'))
    }

    setTasks(newTasks){
        this.tasks = newTasks
        localStorage.setItem('todo', JSON.stringify(this.tasks))
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

    toggleComplete(indexOfTask){
        const newTasks = this.tasks.map((taskData, index) => {
            if(index !== indexOfTask){
                return taskData
            }
            return {
                text: taskData.text,
                isCompleted: !taskData.isCompleted
            }
        })
        this.setTasks(newTasks)
    }

    renderTasks(){
        this.tasks.forEach((taskData, index)=> {
            const task =  new Task(
                taskData,
                ()=> this.toggleComplete(index),
                ()=> this.deleteTask(index)
            )
            this.container.appendChild(task.render())
        })
    }

    render(){
        if(this.container === null) {
            this.container = document.createElement('div')
        }
        this.container.innerHTML = ''

        const form =  new Form('', (value)=> this.addTask(value))
        this.container.appendChild(form.render())
        this.renderTasks()
        
        return this.container
    }
}