// core module sont les module installé avec node
// kif t'installi nodejs yjou par defaut m3ah
//console.log(global)
// ==========================================  
//  __dirname / __filename / exports 
    //path exact mta3 fichier
    console.log(__filename) 
    console.log(__dirname);
  //path
    const path=require("path")
    console.log(path.parse(__filename))
    console.log(path.dirname(__filename))
    console.log(path.extname(__filename))
// ==========================================

// example fs
// fs a des methodes sync et async
    //file system
    // const fs =require("fs")
    // console.log(fs);
    // =========================
// ----------------------------------------------------------------------------
// les methode synchrone sont des methode code bloquante
// step1
// console.log("starting...");
// // STEP2
// let data = fs.readFileSync("file.txt",{encoding : "utf8"});
// console.log(data);
// //il faut preciser kifch ya9raha // par defaut buffer
// // console.log(data.toString());
// // step3
// console.log("finishing...");

//-------------------------
// les methode async contien des call back functions=>
// step1
// console.log("starting...");
// // STEP3
// // fs.readFile("./file.txt", (err, data) => {
// //   err ? console.log(err) : console.log(data.toString());
// // });
// fs.readFile('file.txt',function (err,data) {
//     if (err) {
//       return  console.error(err) 
//     } 
//         console.log(data.toString());
// })
// // step2
// console.log("finishing...");


//------------------------Os
// const os=require("os")
// // information about each cpu 
// console.log(os.cpus())
// //cpu architecture
// console.log(os.arch())
// //tatal memory in bytes
// console.log(os.totalmem())
// // free memory 
// console.log(os.freemem())

// const FreeMemo=os.freemem()

// console.log('la memoire totale sur votre machine est:',TolMemo)
// console.log('la memoire libre sur votre machine est:',FreeMemo)