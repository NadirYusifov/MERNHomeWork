import { readFileSync, unlink, writeFile } from "fs"

const productsController = (req, res) => {
    if (req.method === "GET") {
        const content = readFileSync("./db.json")
        res.write(content)
        res.end()
    } else if (req.method === "POST") {
        const data = {
            id: 5, name: "Samsung", brand: "24 Ultra", price: 1099
        }

        const content = JSON.parse(readFileSync("./db.json"))
        content.products.push(data)

        const DataToJson = JSON.stringify({ products: content.products }, null, 2)

        writeFile("./db.json", DataToJson, () => {
            res.write(JSON.stringify({ status: 201, msj: " Alindi " }))
            res.end()
        })
    } else if (req.method === "DELETE") {
        const data = {
            id: 5, name: "Samsung", brand: "24 Ultra", price: 1099
        }

        const content = JSON.parse(readFileSync("./db.json"))
        content.products.pop(data)

        const DataToJson = JSON.stringify({ products: content.products }, null, 2)

        writeFile("../db.json", DataToJson, () => {
            res.write(JSON.stringify({ status: 201, msj: "Alindi" }))
            res.end()
        })

        // unlink(DataToJson, () => {
        //     res.write(JSON.stringify({ status: 204, msj: "Silindi" }))
        // })

        // writeFile("./db.json", DataToJson, "utf-8", err => {
        //     res.write("./db json")
        //     res.end()
        // })
    }
}

export default productsController;
