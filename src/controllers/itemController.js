// src/controllers/itemController.js
import * as itemModel from "../models/itemModel.js";

export const getItems = (req, res) => {
  const items = itemModel.getAllItems();
  res.json(items);
};

export const getItem = (req, res) => {
  const item = itemModel.getItemById(parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item não encontrado" });
  }
};

export const createItem = (req, res) => {
  const newItem = itemModel.addItem(req.body.name);
  res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
  const updatedItem = itemModel.updateItem(
    parseInt(req.params.id),
    req.body.name
  );
  if (updatedItem) {
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: "Item não encontrado" });
  }
};

export const deleteItem = (req, res) => {
  const items = itemModel.deleteItem(parseInt(req.params.id));
  res.json(items);
};
