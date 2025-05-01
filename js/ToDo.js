class ToDo{
    constructor(tasks){
        this.tasks = tasks || []
        this.container = null
    }

    deleteTask(indexOfTask){
        this.tasks = this.tasks.filter((taskData, index)=> {
            return index !== indexOfTask
        })
        this.render()
    }

    renderTasks(){
        this.tasks.forEach((taskData)=> {
            const task =  new Task(taskData, ()=> {})
            this.container.appendChild(task.render())
        })
    }

    render(){
        if(this.container === null) {
            this.container = document.createElement('div')
        }
        this.container.innerHTML = ''

        const form =  new Form('', (value)=> alert(value))
        this.container.appendChild(form.render())
        this.renderTasks()
        
        return this.container
    }
}