const { getAllbooks, addbook, updatebook, deletebook } = require("../db");

const getAllbooksController = (req, res) => {
  const books = getAllbooks();
  res.send(books);
};

const addbookController = (req, res) => {
  const book = addbook(req.xop);
  res.send(book);
};

const updatebookController = (req, res, next) => {
  const book = updatebook({ payload: req.xop, id: req.params.id });
  if (!book) {
    return next({
      status: 400,
      message: "book not updated",
    });
  }
  res.send(book);
};

const deletebookController = (req, res, next) => {
  const book = deletebook({ id: req.params.id });
  if (!book) {
    return next({
      status: 400,
      message: "book not found",
    });
  }
  res.send(book);
};

module.exports = {
  getAllbooksController,
  addbookController,
  updatebookController,
  deletebookController,
};
