class Form{
    constructor(initialValue, onSubmit){
        this.initialValue = initialValue
        this.onSubmit = onSubmit
    }

    render(){
        const form = document.createElement('form')
        const input = new Input(this.initialValue)
        const button = new Button('Add task', this.onSubmit)

        form.style.display = 'flex'
        form.style.justifyContent = 'space-between'
        form.style.paddingTop = '4px'
        form.style.paddingBottom = '4px'
        form.style.borderRadius = '4px'
        form.style.marginBottom = '4px'

        form.appendChild(input.render())
        form.appendChild(button.render())

        return form
    }
}