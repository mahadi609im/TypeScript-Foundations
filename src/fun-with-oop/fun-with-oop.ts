abstract class UIElement {
  constructor(protected id: string) {}

  abstract render(): string;
}

class Input extends UIElement {
  constructor(
    id: string,
    private type: string,
    private placeholder: string,
  ) {
    super(id);
  }
  render() {
    return `<input id="${this.id}" type="${this.type}" name="${this.id}" placeholder="${this.placeholder}" style="display: block; width: 100%; padding: 10px; margin-bottom: 16px; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box"></input>`;
  }
}

class Button extends UIElement {
  constructor(
    id: string,
    private label: string,
  ) {
    super(id);
  }

  render() {
    return `<button id="${this.id}" style="width: 100%; padding: 12px; font-weight: 600; color: #fff; background: #4f46e5; border: none; border-radius: 6px; cursor: pointer">${this.label}</button>`;
  }
}

class Form extends UIElement {
  private children: UIElement[] = [];

  appendChild(child: UIElement) {
    this.children.push(child);
  }

  render() {
    const childrenHtml = this.children.map(child => child.render()).join('\n ');
    return `<form id="${this.id}" style="max-width: 380px; margin: 40px auto; padding: 28px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); font-family: system-ui, sans-serif; box-sizing: border-box">\n ${childrenHtml} \n</form>`;
  }
}

const formElement = new Form('login-form');

const email = new Input('email', 'email', 'Enter your email');
const password = new Input('pass', 'password', 'Enter your password');
const button = new Button('submit-btn', 'submit');

formElement.appendChild(email);
formElement.appendChild(password);
formElement.appendChild(button);

const rootElement = document.getElementById('root');
if (rootElement) {
  rootElement.innerHTML = formElement.render();
}
