import { copyFile, readFile, writeFile } from "fs"

// # Tapşırıq 1
// const code = "\x4E\x61\x64\x69\x72"

// writeFile("./ad.txt", code, err => {
//     if (err) {
//         console.log("1");
//     } else {
//         console.log("2");
//     }
// })


// ======== Sual ========
// Arrayi necə paraçalyım?
// forEach ilə təkrar yazmaq olurmu?

// const code = ["\x4E", "\x61", "\x64","\x69", "\x72"]
// const test = code.join()
// console.log(test);

// writeFile("./ad.txt", code, "utf-8", err => {
//     if (err) {
//         console.log("1");
//     } else {
//         console.log("2");
//     }
// })

// ===================================================================================================================

// # Tapşırıq 2
// ======== Müəllimin metodu ========
// let number = ""    
// for (let vurulan = 1; vurulan < 10; vurulan++) {
//     for (let vuran = 1; vuran <= 9; vuran++) {
//         number += `${vurulan} x ${vuran} = ${vurulan * vuran} \n `

//     }
// }


// ======== Menim metodum xetam var ========
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// number.forEach((element) => {
// for (let index = 0; index <= 9; index++) {
//     // const element = array[index];
//     number += `${element} x ${index} = ${element*index} \n`
// }
//    number += `\n`
// })

// writeFile("./vurma.txt", number, (err) => {
//     if (err) {
//         console.log("Problem var", err.message);
//     } else {
//         console.log("Problem yoxdur");
//     }
// })
// console.log();

// ===================================================================================================================

// # Tapşırıq 3
// writeFile("./test.txt", "utf-8", err => {
//     if (err) {
//         console.log("Alınmadı");
//     } else {
//         console.log("Alındı");
//     }
// }) 

// unlink("./test.txt", err => {
//     if (err) {
//         console.log("Silinmədi");
//     } else {
//         console.log("Silindi");
//     }
// })

// ===================================================================================================================

// # Task 1
// let write = "test mesaj"
// let upperWrite = write.toUpperCase()

// readFile("./changename.txt", err => {
//     if (err) {
//         console.log("Fayl oxunmadı");
//     } else {
//         console.log("Fayl oxundu");
//     }
// })

// writeFile("./changename.txt", write, "utf-8", (err, data) => {
//     if (err) {
//         console.log("Fayl yazılmadı");
//     } else {
//         console.log("Fayl yazıldı", data);
//     }
// })

// writeFile("./changeName-1.txt", upperWrite, "utf-8", (err, data) => {
//     if (err) {
//         console.log("Fayl yazılmadı");
//     } else {
//         console.log("Fayl yazıldı");
//     }
// });

// ===================================================================================================================

// # Task 2
// writeFile("./notcopy.txt", "utf-8", err => {
//     if (err) {
//         console.log("Fayl yazıldı");
//     } else {
//         console.log("Fayl yazılmadı");
//     }
// })

// copyFile("./notcopy.txt", "./copy.txt", err => {
//     if (err) {
//         console.log("Fayl kopyalanmadı");
//     } else {
//         console.log("Fayl kopyalandı");
//     }
// })

// readFile("./notcopy.txt", err => {
//     if (err) {
//         console.log("Fayl oxuya bilmədi");
//     } else {
//         console.log("Fayl oxundu");
//     }
// });