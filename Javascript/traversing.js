
// let fullname = "jatbbbbbbbbbbbbbbbbinismyNamebbbbbbb";
// let count = 0 ;
// for(let i = 0;i<fullname.length ;i++){
//     if(fullname.charAt(i) =="b"){
//         count++ ;
//     }
// }
// console.log("Number of b's are" + " " + count) ;



// let str = "12345" ;
// let sum = 0 ;
// for(let i = 0 ;i<str.length ;i++){
//    let ans = parseInt(str[i]) ;
//       sum+= ans ;    
// }
// console.log(sum) ; 

// let str1 = "14A562" ;
// let ans1  = 0 ;
// for(let i = 0 ; i < str1.length ;i++){
//     let char1 = str1.charAt(i);
    
//      if(parseInt(char1) >=0 && parseInt(char1) <=9){
//          ans1 += parseInt(char1) ;
//      }
//      else{
//           ans1 = ans1 + str.charCodeAt(char1) ;
//      }
// }
// console.log(ans1) ;



// let ant = 'B' ;
// console.log(ant.charCodeAt(ant)) ;

// // reverse word in javascript 
// let str2 = "jatin guru";
// let str3  = "" ;
// for(let i = str2.length-1 ;i>= 0 ;i--){
//      str3 += str2.charAt(i) ;  
    
// }
// console.log(str3) ;

// // ..............reverse each word by word


// let str5 =  "iu" ;
// let i = 0 ; 
// let j = str5.length-1 ;
// let flag = 0 ;
// while(i<j){
//      if(str5.charAt(i) != str5.charAt(j)) {
//           flag = 1 ;
//      }
//      i++ ; 
//      j-- ;
// }
// if(flag){
//     console.log("Not a palindrome") ;
// }
// else{
//      console.log("Palindrome") ;
// }

// let str6 = "jatin guru is my name" ; 
// let j1 = 0  ;
// let ans5 = "" ;
// for(let i = 0 ; i < str6.length ;i++) { 
//       if(str.charAt(i) == " ") {
           
//             ans5 += str6.substring(j1,i) ;
//             j1 = i ; 
//       }
// }
// console.log(ans5) ;

// // array 
// let arr  = ["jatin",6,5,3,5,6,7,8,"Guru",true] ;
// // string to array using split 
// let string1 = "jatin guru is my name" ;
// let string2 = "jatin";
// console.log(string1.split(" ")) ;
// console.log(string2.split("")) ;
// let arr2 = ["jatin","is","my","name"] ;
// let ans6 = arr2.join("hello") ;
// console.log(ans6) ;

// let arr = [1,2,3,4,5,6] ;
// arr.forEach(function(data,index){
//        console.log(data,index) ;
// })
// let arr = [100,200,300,400] ;
// function alter(apple,mango,banana,str,str2) {
//   console.log(apple,mango,banana,str,str2) ;
// }

// arr.forEach(alter(this,arr,"jatin","is","my","name")) ;


// let arr = [1,2,3,4,5,6,7,8] ;
// for(let i = 0 ;i<arr.length ;i++){
//      arr[i] += +2 ; 
// }
// console.log(arr) ;

// let arr = [100,200,300,400,500] ;

// if(arr[i] %2 != 0){
//         console.log(arr[i] + " ") ;
// }

// let arr1 = [1,2,5,6,8,4] ;
// let arr2 = [2,4,6,8,1] ;
// for(let i = 0 ; i<arr1.length ;i++){ 
//        let ele = arr1[i] ; 
//           let ans = arr2.filter(function(value){
//                    if(arr2.includes(ele)){
//                        return false ;    
//                    }
//                    else{
//                            return true ;
//                    }
// })
// }
// // console.log(ans) ;

// function binary(i) {
//     let r = 0 ;
//     let sum = 0;
//     while(i > 0){ 
//         let rem = i%2 ; 
//         sum = sum + rem*Math.pow(10,r) ;
//         r++ ; 
//         i = floor(i/2) ; 
//     }
//       console.log(sum) ;
//   }
// //   binary(6) ;
// let obj1 = {
//      "jatin" : 25,
//      "guru" : 30 ,
//      "mango"  : 40 
// }

// for(let i = 0 ;  i<Object.keys(obj1).length ;i++) { 
//       console.log(obj1[Object.keys(obj1)[i]]) ;
// }
// console.log(Object.keys(obj1)) ;
// for(let i in obj1){
//      console.log(i) ;
// }
//console.log(Object.values(obj1)) ;
// for(let i = 0 ;i<Object.keys(obj1).length ;i++){
//     console.log(Object.values(obj1)[i]) ;
// }


let abc = {
    "name" : {} ,
    "rollno" : 20 
}
// let newabc = {...abc} ;
// newabc.name["BifName"] = "Yahoo" ;
// console.log(abc) ;
// console.log(newabc); 


let newobj = {} ;
for(let key in abc){
    if(typeof(abc[key] == "object")){
         newobj = {} ;
    }
    else{
         newobj[key] = abc[key] ;
    }
}
console.log(newobj) ;
