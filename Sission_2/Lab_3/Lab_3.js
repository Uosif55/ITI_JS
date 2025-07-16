
// ------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------
// 2.3 - ask the user to enter the number of the month then write to the user "you picked" + month name; ensure the user input is number .

 var input = prompt("Enter Month number")
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
  document.writeln(`A month <span style ='color : red; font-size: 20px; font-weight : bolder;'> ${number} </span> is <span style ='color : red; font-size: 20px; font-weight : bolder;'>${months[number-1]} 📅 </span>`);
}
else{
      alert("Please enter a number between 1 and 12");
}



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