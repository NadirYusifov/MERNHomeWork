import { readFileSync, writeFileSync } from "fs";

const deleteIDBook = (req, res) => {

// tyrcatch yazanda ifelse işləmir?

    try {
        const bookID = req.params.id;
        const bookRead = readFileSync("./db.json", "utf-8");
        const { books } = JSON.parse(bookRead);
        const bookFind = books.find((book) => book.id == bookID);
        
        if (bookFind) {
            const bookdelete = books.filter((book) => book.id != bookID)
            const updatedData = JSON.stringify({ books: bookdelete }, null, 2)
            writeFileSync("./db.json", updatedData, "utf-8")
            res.status(204).send(({
                status: 204,
                message: "Book deleted successfully"
            }))
        } else {
            res.status(404).send(({
                status: 404,
                message: "Book not found"
            }))
        }

        // Burda Postman'də məsələn URL-də id-si 1 olanı silsəm silinir, amma URL-ə id-si 2-i yazsam id-si 2 silinir təzədən id-si 1 olan geri qayıdır.
        // res.send(bookdelete)

    } catch (error) {
        res.status(500).send(({
            status: 500,
            message: "Error"
        }))
    }
}

export default deleteIDBook;
