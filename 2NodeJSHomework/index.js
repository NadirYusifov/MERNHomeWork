import inquirer from "inquirer";



// ========== #1 ==========
// import { mkdir, readFile, rmdir, unlink, writeFile } from "fs"
// import process from "process"

// // console.log(process);

// const args = process.argv

// const command = args[2]
// const filename = args[3]
// const comment = args[4]

// //  console.log(args);

// if (command === "readFile") {
//     readFile(filename, err => {
//         if (err) {
//             console.log("Fayl oxunmadı");
//         } else {
//             console.log("Fayl oxundu");
//         }
//     })
// }
// else if (command === "createFile") {
//     writeFile(filename, comment, "utf-8", err => {
//         if (err) {
//             console.log("Yazmadi");
//         } else {
//             console.log("Yazildi");
//         }
//     })
// }
// else if (command === "deleteFile") {
//     unlink(filename, err => {
//         if (err) {
//             console.log("Silinmədi");
//         } else {
//             console.log("Silindi");
//         }
//     })
// }
// else if (command === "createFolder") {
//     mkdir(filename, err => {
//         if (err) {
//             console.log("Qovluq qurulmadı");
//         } else {
//             console.log("Qovluq quruldu");
//         }
//     })
// }
// else if (command === "deleteFolder") {
//     rmdir(filename, err => {
//         if (err) {
//             console.log("Qovluq silinmədi");
//         } else {
//             console.log("Qovluq silindi");
//         }
//     })
// }



// ========== #2 ==========
// Burda sual cavabda doğru cavabaları versin misal üçün 10 sualdan neçəsini səhv etdin kimi cavab versin


// const result = ["1. Deoxyribonucleinodc Acid", "2. 3,14", "3. Ayaz Mütəllibov", "4. Qaraciyər", "5. Ada Lovelace", "Bonus: Nikola Kopernik"]
// inquirer
//     .prompt([
//         {
//             type: "input",
//             message: "Adını və soyadını yaz."
//         },
//         {
//             type: "list",
//             name: "sual-1",
//             message: "1. DNA-nın tam açılışı (İngiliscə) nədir?",
//             choices: ["Digital Nucleus Acid", "Deoxyribonucleinodc Acid", "Dynamic Nucleic Atom", "Bilmirəm"]
//         },
//         {
//             type: "list",
//             name: "sual-2",
//             message: "2. Pi ədədi hansı rəqəmlə başlayır və ilk 3 rəqəmi nədir?",
//             choices: ["3,41", "3,14", "3,44", "Bilmirəm"]
//         },
//         {
//             type: "list",
//             name: "sual-3",
//             message: "3. Azərbaycanın ilk prezidenti kim olub?",
//             choices: ["Heydər Əliyev", "Əbülfəz Elçibəy", "Ayaz Mütəllibov", "Bilmirəm"]
//         },
//         {
//             type: "list",
//             name: "sual-4",
//             message: "4. İnsan bədənində ən böyük daxili orqan hansıdır?",
//             choices: ["Ağciyər", "Qaraciyər", "Ürək", "Bilmirəm"]
//         },
//         {
//             type: "list",
//             name: "sual-5",
//             message: "5. İlk kompüter proqramçısı hesab edilən qadın kimdir?",
//             choices: ["Grace Hopper", "Marie Curie", "Ada Lovelace", "Bilmirəm"]
//         },
//         {
//             type: "list",
//             name: "sual-6",
//             message: "Bonus: Hansı elm adamı heliosentrik (Günəş mərkəzli) kainat modelini irəli sürmüşdür?",
//             choices: ["Nikola Kopernik", "Galileo Galilei", "Johannes Kepler", "Bilmirəm"]
//         }


//     ])

//     .then((answers) => {         
//         console.log("Doğru cavablar:",answers && result);
//     })



// ========== #3 ==========
// Random olaraq yazıb çıxarsın

// inquirer
//     .prompt([
//         {
//             type: "list",
//             name: "rock-paper-sci",
//             message: "Rock, Paper, Sciccors",
//             choices: ["Rock", "Paper", "Sciccors"]
//         }
//     ])
//     .then((answers) => {
//         const rps = ["Rock", "Paper", "Sciccors"]
        
// })
