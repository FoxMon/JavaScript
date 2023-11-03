import Core from "./Core.js";

const CHIDREN_KEY = "children";

class Component {
  constructor() {
    this.elem = "";
  }

  div(elemOptions) {
    this.elem = "div";

    const options = {};
    Object.keys(elemOptions).forEach((op) => {
      if (op === CHIDREN_KEY) {
        return;
      }

      options[op] = elemOptions[op];
    });

    const core = new Core(this.elem, options);
    const createdElem = core.createElement();

    const children = elemOptions[CHIDREN_KEY];

    if (Array.isArray(children)) {
      core.addChildren(createdElem, children);
    }

    return createdElem;
  }

  button(elemOptions) {
    this.elem = "button";

    const options = {};
    Object.keys(elemOptions).forEach((op) => {
      if (op === "text") {
        console.log();
        return;
      }

      options[op] = elemOptions[op];
    });

    const core = new Core(this.elem, options);
    const createdElem = core.createElement();
    createdElem.innerText = elemOptions["text"];

    return createdElem;
  }
}

export default Component;
