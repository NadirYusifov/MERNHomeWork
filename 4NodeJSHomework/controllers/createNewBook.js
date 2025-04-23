import { randomUUID } from "crypto";
import { readFileSync, writeFileSync } from "fs";

const createNewBook = (req, res) => {
    try {
        const data = readFileSync("./db.json", "utf-8");
        const { books } = JSON.parse(data);
        const newBook = req.body;
        newBook.id = randomUUID();
        books.push(newBook)
        const updatedData = JSON.stringify({ books: newBook }, null, 2)
        writeFileSync("./db.json", updatedData, "utf-8")
        res.status(201).send({
            status: 201,
            message: "Book created successfully"
        })

        // Burda konsolda newBook'u görə bilmədim.
        // console.log(newBook);

    } catch (error) {
        res.status(500).send(({
            status: 500,
            message: "Error",
        }));

        res.send("Ok")

    }
}

export default createNewBook;