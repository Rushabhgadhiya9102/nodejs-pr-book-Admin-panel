const booksModel = require("../models/booksModels");

// ======= router =========

// dashboard page
exports.getBooks = async (req, res) => {
  res.render("index");
};

// form page
exports.formPage = async(req,res) =>{
  res.render("pages/form-basic", { books: null })
}

// table page 
exports.tablePage = async(req,res) =>{
  const bookData = await booksModel.find();
  res.render("pages/tables", {bookData})
}

// ======== router ==========

//  post book

exports.createbook = async (req, res) => {
  try {
    await booksModel.create(req.body);
    res.redirect("/booksList");
    
  } catch (error) {
    console.error(error.message);
  }
};

// delete book 
exports.deletebook = async(req, res)=>{
  try {
    await booksModel.findByIdAndDelete(req.params.id)
    res.redirect('/booksList')
  } catch (error) {
    console.error(error.message);
    
  }
}

// edit product
exports.editbook = async (req, res) => {
  try {
    const books = await booksModel.findById(req.params.id)
    res.render('pages/form-basic', {books})
  } catch (error) {
    console.error(error.message);
    
  }
}

// update product
exports.updatebook = async (req,res) =>{
  try {
    await booksModel.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/booksList')

  } catch (error) {
    console.error(error.message);
    
  }
}