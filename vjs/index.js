import Component from "./core/Component.js";

const component = new Component();

const elem = component.div({
  id: "div-elem",
  children: [
    component.button({
      id: "button",
      text: "Button",
    }),
  ],
});

const root = document.getElementById("root");
root.appendChild(elem);
