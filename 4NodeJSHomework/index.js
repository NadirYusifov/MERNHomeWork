import express from 'express';
import getIDBook from './controllers/getidbook.js';
import getAllBooks from './controllers/getAllBooks.js';
import createNewBook from './controllers/createNewBook.js';
import deleteIDBook from './controllers/deleteIDBook.js';

const app = express();
const port = 8000;
app.use(express.json());

// GET method
app.get("/books", getAllBooks);
app.get("/books/:id", getIDBook);

// POST method
app.post("/books", createNewBook);

// DELETE method
app.delete("/books/:id", deleteIDBook)


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});