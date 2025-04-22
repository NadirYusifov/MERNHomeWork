import { readFileSync } from "fs";

const getAllBooks = (req, res) => {
    try {
        const data = readFileSync("./db.json", "utf-8");
        const { books } = JSON.parse(data);
        // console.log(books);
        res.status(200).send(books);
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Error",
        });
    }
};

export default getAllBooks;