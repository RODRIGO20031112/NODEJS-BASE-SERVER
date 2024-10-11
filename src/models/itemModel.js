// src/models/itemModel.js
class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

let items = [
  new Item(1, "Item 1"),
  new Item(2, "Item 2"),
  new Item(3, "Item 3"),
  new Item(4, "Item 4"),
  new Item(5, "Item 5"),
];

export const getAllItems = () => items;

export const getItemById = (id) => items.find((item) => item.id === id);

export const addItem = (name) => {
  const newItem = new Item(items.length + 1, name);
  items.push(newItem);
  return newItem;
};

export const updateItem = (id, name) => {
  const item = getItemById(id);
  if (item) {
    item.name = name;
    return item;
  }
  return null;
};

export const deleteItem = (id) => {
  items = items.filter((item) => item.id !== id);
  return items;
};
