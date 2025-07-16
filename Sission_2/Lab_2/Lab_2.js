/*
2.1 - write js code to convert a string into Pascal Case :
	ex:
		input: "ali mohamed"
		output: "Ali Mohamed"
2.2 write js code to reverse any string from user ;

*/
// {{{{{{{{{{--------- Note✋:it is my icon  , Not ChatGPT.-------------}}}}}}}}}}

var Str = prompt(" Your Name :");
if (!isNaN(Str) || /\d/.test(Str))  // /\d/.test ==> Str containing [0-9][Number] ] ? || Self Learning👨‍💻 
    {
 alert("please Enter your Name");
}
else{
 var Arr = Str.trim().split(" ");
for (var i = 0; i < Arr.length; i++) { 
    Arr[i] = Arr[i][0].toUpperCase() + Arr[i].slice(1).toLowerCase()
}
// 🔔 myName=Arr.toString().split(","); ==> Uosif,Ben,Negm  <== document.writeln(Arr);

myName=Arr.join(" "); // 🔔 Array To String .. " " ==> Remove , and write space --> Uosif Ben Negm
document.writeln(`Your name's : ${myName} <br>`);
 for (var i =0 ; i < Arr.length / 2 ; i++) {
  let j = Arr.length - 1 - i;

  let temp = Arr[i];
  Arr[i] = Arr[j];
  Arr[j] = temp;
}

var myReverseName = Arr.join(" ");
 document.writeln(`Your name's : ${myReverseName}`);
}
