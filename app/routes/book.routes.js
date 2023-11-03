const express = require("express");
const router = express.Router();

const { validate } = require("../middlewares/validate.middleware");
const { bookSchema } = require("../validations/book.schema");

const {
  getAllbooksController,
  addbookController,
  updatebookController,
  deletebookController,
} = require("../controllers/book.controller");

// READ
router.get("/", getAllbooksController);

// CREATE
router.post("/", validate(bookSchema), addbookController);

// UPDATE
router.put("/:id", validate(bookSchema), updatebookController);

// DELETE
router.delete("/:id", deletebookController);

module.exports = router;
