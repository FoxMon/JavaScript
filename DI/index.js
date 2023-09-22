// DI 전 후 비교
// 요리사
// 1. 의존성 주입 전
class Pork {
  name;

  constructor(name) {
    this.name = name;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Chef {
  constructor() {}

  cook(menu) {
    const pork = new Pork("고기");

    return `${menu} + ${pork.getName()}`;
  }
}

const chef = new Chef();
console.log(chef.cook("pork"));

// 2. 의존성 주입 후
class Kitchen {
  constructor() {}

  getFood(menu) {
    switch (menu) {
      case "pork":
        return new Pork("고기").getName();

      default:
        return null;
    }
  }
}

class AnotherChef {
  kitchen;

  constructor() {
    this.kitchen = new Kitchen();
  }

  cook(menu) {
    return this.kitchen.getFood(menu);
  }
}

const antherChef = new AnotherChef();
const food = antherChef.cook("pork");
console.log(food);
