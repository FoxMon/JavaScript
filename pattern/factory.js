class MacBookLego {
  constructor({ name, price, memory }) {
    this.name = name;
    this.price = price;
    this.memory = memory;
  }
}

class SurfaceBookLego {
  constructor({ name, price, memory }) {
    this.name = name;
    this.price = price;
    this.memory = memory;
  }
}

/**
 * Lego의 Factory
 */
class LegoFactory {
  constructor() {
    this.name = "Lego Factory";

    this.lego = {
      MacBookLego,
      SurfaceBookLego,
    };
  }

  // Must implement
  createLego(legoName, attr) {
    return new this.lego[legoName](attr);
  }
}

function main() {
  const legoName = "MacBookLego";
  const legoAttr = {
    name: "MacBook",
    price: 2000000,
    memory: "1TB",
  };

  const legoFactory = new LegoFactory();
  const lego = legoFactory.createLego(legoName, legoAttr);
  console.log(lego);
}

main();
