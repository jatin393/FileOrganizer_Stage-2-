#!/usr/bin/env node
const fs = require("fs") ;
let arguments = process.argv.slice(2) ;
let filename = [] ;
let flag = [] ;
for(let i of arguments) {
    if(i[0] == '-'){
          flag.push(i) ;
    }
    else{
         filename.push(i) ;
    }
}
    if(flag.length == 0){
          for(let files of filename){
               console.log(fs.readFileSync(files,"utf-8")) ;
          }
    }
    else{
        for(let flag1 of flag) { 
            if(flag1 == '-rs') {
           for(let i of filename){
                 let filen = fs.readFileSync(i,"utf-8") ; 
                 console.log(filen.split(" ").join("")) ;
           }

           }
           if(flag1 == '-rn'){
                for(let j of filename){
                     let files1 = fs.readFileSync(j,"utf-8") ;
                     console.log(files1.split("\r\n").join("")) ;
                }
           }
        }
       
    }
   
