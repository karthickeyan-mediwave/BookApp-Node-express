const { v4: uuidv4 } = require("uuid");

const books = [];

const getAllbooks = () => books;

const addbook = ({ title, year }) => {
  const id = uuidv4();
  const m = {
    id,
    title,
    year,
  };
  books.push(m);
  return m;
};

const updatebook = ({ id, payload }) => {
  const idx = books.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }

  books[idx]["title"] = payload["title"];
  books[idx]["year"] = payload["year"];

  return books[idx];
};

const deletebook = ({ id }) => {
  const idx = books.findIndex((m) => m.id == id);
  if (idx === -1) {
    return null;
  }

  const book = books[idx];
  books.splice(idx, 1);
  return book;
};

module.exports = {
  getAllbooks,
  addbook,
  updatebook,
  deletebook,
};
