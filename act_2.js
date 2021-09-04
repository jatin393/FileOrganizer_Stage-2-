let fs = require('fs');
let path = require('path') ;
let inputArr = process.argv.slice(2);
let mainDir = inputArr[0] ;   // webdev
let subdir = inputArr.slice(1)  // javascript react  mongoDb
// console.log(mainDir);
// console.log(subdir) ;
// for(let i = 0 ;i<subdir.length;i++){
//      let modular = 
// }
let maindirpath = path.join(process.cwd(),mainDir);
console.log(maindirpath) ;
if(!fs.existsSync(maindirpath)){
   fs.mkdirSync(maindirpath) ;
}
for(let i =0 ;i<subdir.length;i++){
    let folder = path.join(mainDir,subdir[i]) ;
    //console.log(folder) ;
    if(!fs.existsSync(folder)){
         fs.mkdirSync(folder) ;
    }
    for(let j = 1;j<=3;j++){
        let modular = path.join(folder,`Module${j}`) ;
        if(!fs.existsSync(modular)){
             fs.mkdirSync(modular) ;
        }
        let finalcontent = path.join(modular,'content.md');
        let writing = fs.writeFileSync(finalcontent,"#Hello EveryOne") ;
    }
   
}
