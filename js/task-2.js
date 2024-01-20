`use strict`;

class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems(items) {
    return this.#items;
  }

  addItem(value) {
    return this.#items.push(value);
  }

  removeItem(value) {
    if (this.#items.includes(value)) {
      this.#items = this.#items.filter((i) => i !== value);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
