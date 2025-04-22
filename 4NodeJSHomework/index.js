import express from 'express';
import { readFileSync } from "fs";
import testController from './controllers/test.js';
import getAllBooks from './controllers/getAllBooks.js';
import getIDBook from './controllers/getidbook.js';
import createNewBook from './controllers/createNewBook.js';

const app = express();
const port = 7000;

app.get("/", testController);
app.get("/books", getAllBooks);
app.get("/books/:id", getIDBook);
app.post("/books", createNewBook)
app.use(express.json());
// app.delete("/books/:id", (req, res) => {
//     const bookID = req.params.id * 1;
//     const bookread = readFileSync("./db.json", "utf-8");
//     const {books} = JSON.parse(bookread);
//     const index = books.filter(bookid => bookid.id == bookID)
//     console.log(index);
    
//     const bookdelete = books.splice(index, 1);
//     res.send(bookdelete);
// })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});