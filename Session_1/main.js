
// 1_________________________________________________________________________________________________________________________
// var message= prompt("Enter your message")
// for (let index = 1; index <7 ; index++) {
//     document.writeln(`<h${index}>${message}</h${index}>`)
    
// }




// 2_________________________________________________________________________________________________________________________

// var sum = 0;

// while (true) {
//   var input = prompt("Enter a number:");


//   if (isNaN(input)) {
//     alert("Please enter a valid number.");
//     continue;
//   }

//   var num = Number(input);
//   sum += num;

//   if (num === 0 || sum >= 100) {
//     break;
//   }
//   document.writeln(`Sum is: ${sum} <br>`);
// }

// document.writeln(`
//   Total Sum is: ${sum}`);





  // 3_________________________________________________________________________________________________________________________

// var x = [];

// for (var index = 0; index < 3; index++) {
//   var input = prompt("Enter number " + (index + 1) + ":");
//   x.push(Number(input));
// }
// document.writeln("Array values: " + x);

// var Summation = x[0] + x[1] + x[2];
// var Multiplication  = x[0] * x[1] * x[2];
// var Division = x[0] / x[1] / x[2];

// document.writeln("<h2 style='color:green ;' >Adding — Multiplying — and dividing 3 values</h2>");
// document.writeln("<hr>");
//         document.writeln(`<p style='color: red ;'>sum of the 3 values (${x[0]} + ${x[1]} + ${x[2]}) = ${Summation}</p>`);
//         document.writeln(`<p style='color: red; ' >multiplication of the 3 values (${x[0]} * ${x[1]} * ${x[2]}) = ${Multiplication}</p>`);
//         document.writeln(`<p style='color: red; '>division of the 3 values (${x[0]} / ${x[1]} / ${x[2]}) = ${Division}</p>`);



// 4_________________________________________________________________________________________________________________________

// 4.1--------------------------------------------------receive number from user then display it with different locals 

// var numInput = prompt("Enter your Number :");
// var Num = Number(numInput)

// var local = prompt("Enter your local code (e.g. en-US, ar-EG,) :")
// if (isNaN(Num)) {
//    alert("Please enter a valid number.");
// }
// else{
//   document.writeln(Num.toLocaleString(local))
// }

// 4.2----------------------------------------------------------------write js program to display all numbers inside array with the same length

//  var arr = [10.2, 20, 34, 333.12345];
// for (let index = 0; index < arr.length; index++) {
// document.write(arr[index].toFixed(7) , "<br>")
// }

// 4.3.1 ---------------------------------------------------------

// var t1=new Number(10); 
// var t2= new Number(10);
// console.log(t1==t2);  // false => Identity : addresses / reference

// 4.3.2 -----------------------------------------------------------

// console.log([1,2,3]==[1,2,3]) //False ==> Array as => object 

