
// // function add(a,b) {
// //     if(typeof(a)!= "number" || typeof(b) != "number"){
// //          return "Invalid Arguments" ;
// //     }
    
// //          return parseInt(a)+ parseInt(b) ; 
    
// // }
// // let ans = add("6",17) ;
// // console.log(ans) ;

// // let add = function(a,b){
// //      return a+b ; 
// // }
// // console.log(add(5,6)) ;

// // let add  = (m,n)=>{
// //      return m + n;
// // }
// // let ans = add(1000,600) ;
// // console.log(ans) ;

// // let traverse in  the array 
// // let arr = [1,2,3,4,5] ;
 
// //  arr.forEach(index,apple) =>{
// //      console.log(index,apple); 
// // }
// // 
// // let arr = [100,200,300,400] ;
// // forEach(arr,forEach) ;
// // function forEach(apple1,mango1,banana){
// //    console.log(apple1,mango1,banana) ;

// // let arr = [1,2,3,4,5] ;
// // arr.forEach(function(data){
// //    console.log(data) ;
// // // })
// // let arr = [1,2,3,4,5,6] ;
// // arr.forEach(data,index =>{
// //     console.log(data,index) ;
// // })
// // let arr = [1,2,3,4,5,6,7,8,9,10] ;
// // for(let i = 0 ; i < arr.length ; i++){
// //     if(arr[i] %2 != 0){
// //         console.log(arr[i]) ;
// //  }
 
// // }

// // let arr = [1,2,3,4,5] ;
// // arr  = arr.map(function(data){
// //      return  data+3 ; 
// // }

// // )
// // console.log(arr) ;

// // let arr = [1,2,3,4,5,6,7,8,9] ;
// // for(let  i = 0 ;i<arr.length ; i++){ 
// //        if(arr[i] %2 == 0){ 
// //             arr.splice(i,1) ;
// //        }
// // }
// // 
// // let temp = [...arr] ;
// // console.log(temp) ;
// //  arr.filter(function(ans1) {
// //   return ans1%2 == 0 ;
// // }
// // ) 
// // console.log(arr) ;
// // let arry = [4,2,5,7,-1,2,3,-7] ;
// // arry.sort(function(a,b){
// //      if(a<b){
// //           return 1 ; 
// //      }
// //      else if(a == b){ 
// //          return  0 ;
// //      }
// //      else{
// //           return -1 ;
// //      }
// // })
// // console.log(arry); 

// // person = {
// //     "name": "Jatin" ,
// //     lastname : "guru" ,
// //     age : 20 
   

// // }
// // person = {

// // }
// // console.log(person["name"]) ;
// // console.log(person.age) ;
// // // console.log(person) ;
// // let m1 = [1,2,3,4,5]; 
// // m1["peson"] = 77 ;
// // console.log(m1) ;



// solution 1 

// let fps = 60 ; 
// let a = 1 , b =1 ;
// let a1 = 10 , b1 = 1 ;
// let a2 = 10 , b2 = 25  ; 
// console.log(fps*a*b) ; 
// console.log(fps*a1*b1) ; 
// console.log(fps*a2*b2) ; 



// solution 2 
// let arr = [3] ;
// arr[0] = 4 ; 
// arr[1] = 13 ; 
// arr[2]  = 600 ; 

// for(let i = 0 ;i<arr.length ;i++){ 
//       let sum = 0 ; 
//        for(let j = 1 ;j<=arr[i] ;j++){
//               sum += j ;
//        }
//        console.log(sum) ;
// }


// /// solution 3 
// let a = 1; 
// let b = 5 ; 


// let c = 10 ; 
// let i = 20 , r = 1   ; 
// let sum = 0 ; 
// while(i > 0 ){
//        let rem = i%2 
       
//        i = i/2 ;
//        sum += rem * r ;
//        r = r * 10;
// }
// console.log(sum) ;

// // solution 4 
// const tuckIn = (arr1, arr2) => {
//       let a = [arr1.shift()];
//       let b = [arr1.pop()];
//       for (let i = 0; i < arr2.length; i++) {
//         arr1.push(arr2[i]);
//       };
//         arr1.push(b[0]);
//       for (let n = 0; n < arr1.length; n++) {
//         a.push(arr1[n]);
//       };
//       return a;
//     };
//     console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
//     console.log(tuckIn([15,150], [45, 75, 35]));
//     console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));



// // solution 5
// const arr = [true, false, true, false, true];
// const count = arr.filter((value) => value).length;

// console.log(count);
    

// //solution 6
// let num1 = 7;
// let num2 = 5;
// let multiples = (num1, num2) => {
//    let res = [];
//    for(let i = num1; i <= num1 * num2; i += num1){
//       res.push(i);
//    };
//    return res;
// };
// console.log(multiples(num1, num2));


// //solution 7
// function flatten(value) {
//       return Array.isArray(value) ? [].concat(...value.map(flatten)) ? value)
//     }


//     //solution 9
// //     const array1 = [1, 2, 3];

// // const firstElement = array1.shift();

// // console.log(array1);


// // console.log(firstElement);


// decimal to binary

function binary(i) {
  let r = 0 ;
  let sum = 0;
  while(i > 0){ 
      let rem = i%2 ; 
      sum = sum + rem*pow(10,r) ;
      r++ ; 
      i = i/2 ; 
  }
    console.log(sum) ;
}
binary(6) ;