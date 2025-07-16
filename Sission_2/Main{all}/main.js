/*-------------------------------
while (true) {
    var message = prompt("Enter Array Values (Numbers):");
    if (message === null) {
        alert("Input cancelled. Exiting...");
        break;
    }
    else {

        if (!message.includes(",") || message.includes(" ")) {
            alert("Input must contain commas only and no spaces!");
            break;
        }
        var arr = message.split(",");
        for (var i = 0; i < arr.length; i++) {
            if (isNaN(arr[i])) {
                alert("Please enter a number");
                break;
            }
        }

        document.writeln(`Array: ${arr} <br>`);

        var sum = 0;
        var Multiplication = 1;
        var Division = 1;
        for (let i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i]);
            sum += arr[i];
            Multiplication *= arr[i];
            Division /= arr[i];
        }

    }
    var again = confirm("Do you want to continue?");
    if (!again) break;
}
document.writeln(`Summation is : ${sum} <br>`);
document.writeln(`Multiplication is : ${Multiplication} <br>`);
document.writeln(`Division is :  ${Division} <br>`);
*/


// -----------------------------------------------------------------------------------------------------------------------------------



/*
------------
2.1 - write js code to convert a string into Pascal Case :
	ex:
		input: "ali mohamed"
		output: "Ali Mohamed"
2.2 write js code to reverse any string from user ;
-------------
*/

/*
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
// 🔔 myName=Arr.toString().split(","); ==> Uosif,Ben,Negm  <== document.writeln(Arr); ==> Only comment

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
*/





//-----------------------------------------------------------------------------------------------------------------------------------------
// 2.3 - ask the user to enter the number of the month then write to the user "you picked" + month name; ensure the user input is number .


/* var input = prompt("Enter Month number")
var number = Number(input); 
if(isNaN(number))
{
    alert("Enter a number please !")
}
else if (number >= 1 && number <= 12) {
  let months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  document.writeln(`A month <span style ='color : red; font-size: 20px; font-weight : bolder;'> ${number} </span> is <span style ='color : red; font-size: 20px; font-weight : bolder;'>${months[number-1]}</span>`);
}
else{
      alert("Please enter a number between 1 and 12");
}
*/






//----------------------------------------------------------------------------------------------------------------
// 2.4 - ask the user to enter his year of birth make sure the input is number and the year is passed the current year then output the his age.

/*
var input = prompt("Enter date number")
var number = Number(input);
var dates = new Date() ;
if(isNaN(number))
{
    alert("Enter a number please !")
}
else if (dates.getFullYear()-number<=10 ) {
    alert("Sorry , you are UnderAge 🔞 .") //  {{{{{{{{{{--------- Note✋:it is my icon , Not ChatGPT.-------------}}}}}}}}}}
} 
else if ( number>dates.getFullYear() || number< 1900) {
    alert("Invalid date !🚩  Enter a valid date ,  please .")
}
else{
    document.writeln(` Congratulations 🌝 , you've passed , your Birth year is : <span style ='color : red; font-size: 20px; font-weight: 900'> ${number} </span> and your old : <span style ='color : red; font-size: 20px; font-weight : 900'>  ${dates.getFullYear()-number} </span> years .`)
}
*/