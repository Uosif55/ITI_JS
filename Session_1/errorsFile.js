// _____________ERROR___________
// 🔔 var input= prompt("Enter a number :") ==> inside loop 
// var sum=0;
// while (true) {
//    🔔  sum +=input; ==> prompt receive string Not Num =====> [sum += Number(input) ✅]

//     if (isNaN(input)) {
//         alert("Please enter a num ") 
//    🔔   ==> missing continue
//     }
    
//     else if (input == 0 || sum >= 100) 
//     {
//     break;
//     }
//     else{
//         document.writeln(`Sum is :  ${sum}`)
//     }
// }





  // _____________ERROR___________
//   var x = [] ;
// for (var index = 0; index < 3; index++) {
//   var Input = prompt("Enter 3 No : "); ------> clean code
//  🔔  x = Number(Input); ---> (Push) ==> x.push(Number(Input)) ==> علشان نخزن ف الاراي
// }
// document.writeln(x);





// --------------------------------
 // document.write(arr[index].toFixed(7) + "\n") ------> \n =>  HTMLمش بتشتغل ف ال 
//  "\n" ==> console ✅
// "<br>" ==> document ✅