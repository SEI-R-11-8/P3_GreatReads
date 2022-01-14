const { User, Book, Sale, CheckoutList } = require('../models');
const { Op, literal, fn, col } = require('sequelize');

const GetAllBooks = async (req, res) => {
  try {
    const result = await Book.findAll({});
    res.send(result);
    console.log(result);
  } catch (error) {
    throw error;
  }
};

const DeleteBookByID = async (req, res) => {
  try {
    let bookId = parseInt(req.params.book_id);
    await Book.destroy({ where: { id: bookId } });
    res.send({ message: `Deleted book with an id of ${bookId}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllBooks,
  DeleteBookByID
};