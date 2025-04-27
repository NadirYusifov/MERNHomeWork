import { randomUUID } from "crypto";
import { readFileSync, writeFileSync } from "fs";

const createNewBook = (req, res) => {
    try {
        // Faylı oxuyur
        const data = readFileSync("./db.json", "utf-8");
        const { books } = JSON.parse(data);
        
        // Yeni kitabın datasını yazdıq 
        const newBook = req.body;
        newBook.id = randomUUID();
        books.push(newBook)

        // Yeni kitabı db-json-a yazdıq
        const updatedData = JSON.stringify({ books: books }, null, 2)
        writeFileSync("./db.json", updatedData, "utf-8")
        res.status(201).send({
            status: 201,
            message: "Book created successfully",
            data: books
        })

        // Burda konsolda newBook'u görə bilmədim.
        // console.log(newBook);

    } catch (error) {
        res.status(500).send(({
            status: 500,
            message: "Error",
        }));
    }
}

export default createNewBook;