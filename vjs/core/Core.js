class Core {
  constructor(elem, options) {
    this.elem = elem;

    /**
     * options: {
     *  id: "elem-id",
     *  class: "elem-class",
     *  innerText: "Button",
     *  ...
     * }
     */
    this.elemOptions = options ?? {};
  }

  createElement() {
    const elem = document.createElement(this.elem);

    Object.keys(this.elemOptions).forEach((op) => {
      elem.setAttribute(op, this.elemOptions[op]);
    });

    this.elem = elem;

    return elem;
  }

  /**
   * children: [
   *    {
   *        elem: "div",
   *        options: {
   *            id: "elem-id",
   *            class: "elem-class",
   *            innerText: "Box",
   *            ...
   *        }
   *    }
   * ]
   */
  addChildren(target, children) {
    children.forEach((child) => {
      target.appendChild(child);
    });
  }

  static add(target, elem) {
    if (!elem) {
      return;
    }

    target.append(elem);
  }
}

export default Core;
