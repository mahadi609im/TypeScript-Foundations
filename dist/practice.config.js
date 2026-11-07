class UIElement {
    id;
    constructor(id) {
        this.id = id;
    }
}
class Input extends UIElement {
    type;
    placeholder;
    constructor(id, type, placeholder) {
        super(id);
        this.type = type;
        this.placeholder = placeholder;
    }
    render() {
        return `<input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}"></input>`;
    }
}
class Button extends UIElement {
    label;
    constructor(id, label) {
        super(id);
        this.label = label;
    }
    render() {
        return `<button id="${this.id}">${this.label}</button>`;
    }
}
class Form extends UIElement {
    children = [];
    appendChild(child) {
        this.children.push(child);
    }
    render() {
        const childrenHtml = this.children.map(child => child.render()).join('\n ');
        return `<form id="${this.id}">${childrenHtml}</form>`;
    }
}
const name = new Input('name', 'name', 'Enter your name');
const email = new Input('email', 'email', 'Enter your email');
const password = new Input('pass', 'pass', 'Enter your password');
const button = new Button('submit-btn', 'submit');
const formElement = new Form('form-input-id');
formElement.appendChild(name);
formElement.appendChild(email);
formElement.appendChild(password);
formElement.appendChild(button);
const rootElement = document.getElementById('root');
if (rootElement) {
    rootElement.innerHTML = formElement.render();
}
export {};
