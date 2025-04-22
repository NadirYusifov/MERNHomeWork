import http from "http"
import productsController from "./productsController/productsController.js"

const server = http.createServer((req, res) => {
    if (req.url === "/api/v1/products/:id") {
        productsController(req, res)
    }
})

server.listen(8080, () => {
    console.log("http://localhost:8080")
})