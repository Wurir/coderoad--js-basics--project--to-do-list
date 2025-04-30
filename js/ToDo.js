class ToDo{
    constructor(task){
        this.task = task || []
    }

    renderTasks(container){
        this.task.forEach((taskData)=> {
            const task =  new Task(taskData, ()=> {})
            container.appendChild(task.render())
        })
    }

    render(){
        const container = document.createElement('div')

        const form =  new Form('', (value)=> alert(value))
        container.appendChild(form.render())
        this.renderTasks(container)
        
        return container
    }
}