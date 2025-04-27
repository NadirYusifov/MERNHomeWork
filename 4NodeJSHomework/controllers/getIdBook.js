import { readFileSync } from "fs";

const getIDBook = (req, res) => {
    try {
        // Faylı oxuyur
        const booksRead = readFileSync("./db.json", "utf-8");

        // ID-ni params ilə alırıq
        const bookId = req.params.id;

        // Obyekt formatına salırıq
        const { books } = JSON.parse(booksRead);

        // ID-ə görə find edirik
        const bookFind = books.find((book) => book.id == bookId);

        // ID-ə görə tapdığımız varmı yoxdumu onu kontrol edirik
        if (!bookFind) {
            res.status(404).send({
                status: 404,
                message: "Book not found"
            })
        } else {
            res.status(200).send(({
                status: 200,
                message: "Book found",
                data: bookFind
            }))
        }

        // Error baş verərsə 500 status kodu ilə error mesajı göndəririk
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Error"
        })
    }
}

export default getIDBook;