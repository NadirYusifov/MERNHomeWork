import { readFileSync } from "fs";

const createNewBook = (req, res) => {
    try {
        const data = readFileSync("./db.json", "utf-8");
        const { books } = JSON.parse(data);
        const 
        // console.log(books);
        res.status(200).send(books);
        
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Error",
        });
    }

    console.log(req.body);
}

export default createNewBook;