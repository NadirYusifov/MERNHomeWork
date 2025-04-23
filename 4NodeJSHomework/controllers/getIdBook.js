import { readFileSync } from "fs";

const getIDBook = (req, res) => {
    try {
        const booksread = readFileSync("./db.json", "utf-8");
        const bookId = req.params.id * 1;
        const { books } = JSON.parse(booksread);
        const bookfind = books.find((book) => book.id == bookId);
        res.send(bookfind);

        // Burda mən Postmanda URL-ə id yazanda Postmanin aşağısında heç nə vermir.
        if (!bookfind) {
            res.send({
                status: 204,
                message: "Book not found"
            })
        }
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Error"
        })
    }
}

export default getIDBook;