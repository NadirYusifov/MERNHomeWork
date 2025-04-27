import { readFileSync, writeFileSync } from "fs";

const deleteIDBook = (req, res) => {
    try {
        // ID-ni params ilə alırıq
        const bookID = req.params.id;

        // Faylı oxuyur
        const bookRead = readFileSync("./db.json", "utf-8");

        // Obyekt formatına salırıq
        const { books } = JSON.parse(bookRead);

        // ID-ə görə find edirik 
        const bookFind = books.find((book) => book.id == bookID);

        // ID-ə görə tapdığımız kitabıl silirik
        const bookDelete = books.filter((book) => book.id != bookID)

        // Dəyişklikləri sting olaraq books arrayına yazırıq
        const updatedData = JSON.stringify({ books: bookDelete }, null, 2)
        writeFileSync("./db.json", updatedData, "utf-8")

        // ID-Ə görə sildiyimiz kitab varmı yoxdurmu onu kontrol edirik
        if (!bookFind) {
            res.status(404).send(({
                status: 404,
                message: "Book not found"
            }))

            // Burda Postman'də məsələn URL-də id-si 1 olanı silsəm silinir, amma URL-ə id-si 2-i yazsam id-si 2 silinir təzədən id-si 1 olan geri qayıdır.
            // res.send(bookdelete)

        } else {
            res.status(200).send(({
                status: 200,
                message: "Book deleted successfully"
            }))
        }

        // Error baş verərsə 500 status kodu ilə error mesajı göndəririk
    } catch (error) {
        res.status(500).send(({
            status: 500,
            message: "Error"
        }))
    }
}

export default deleteIDBook;
