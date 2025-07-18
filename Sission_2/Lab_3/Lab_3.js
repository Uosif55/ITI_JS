
// ------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------
// 2.3 - ask the user to enter the number of the month then write to the user "you picked" + month name; ensure the user input is number .
/*
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
*/

// ----------------------------------------------------------- // updated //---------------------------------
while (true) {
    var year = prompt("Enter your date's year");
    var number = Number(year);
    var dates = new Date();
    if (number === Number(null)) {
  alert("Input cancelled. Exiting...");
   break;
}
   else if (isNaN(number) || number === 0) {
        alert("Enter a number please !");
        break;
    } else if (dates.getFullYear() - number <= 10) {
        alert("Sorry , you are UnderAge 🔞 ."); 
        break;
    } else if (number > dates.getFullYear() || number < 1900) {
        alert("Invalid year !🚩  Enter a valid year ,  please .");
        break;
    } else {
        var yourYear = number;
    }
    // -------------------------------
    var month = prompt("Enter your date's month");
    var myMonth = Number(month - 1);
     if (myMonth === Number(null)|| myMonth===-1) {
  alert("Input cancelled. Exiting...");
   break;
}
   else if (isNaN(myMonth) ) {
        alert("Enter a number please !");
        break;
    } else if (myMonth + 1 < 1 || myMonth + 1 > 12) {
        alert("Invalid month !🚩  Enter a valid month ,  please .");
        break;
    } else {
        var yourMonth = myMonth;
    }
    // -------------------------------
    var days = prompt("Enter your date's days");
    var myDays = Number(days);
     if (myDays === Number(null)) {
  alert("Input cancelled. Exiting...");
   break;
}
    else if (isNaN(myDays) ) {
        alert("Enter a number please ! ");
        break;
    } else if (myDays < 1 || myDays > 31) {
        alert("Invalid Day !🚩  Enter a valid Day ,  please .");
        break;
    }
    else {
        var YourDay = myDays;

    }
    //------------------------------------
    var userBirth = new Date(yourYear, yourMonth, YourDay);
    if (userBirth.getDate() !== YourDay) {
        alert("InValid Day in This month");
        break;
    }
    else {
        var toDay = new Date();
        var totalDays = toDay - userBirth;
        var userBirthDay = Math.floor((totalDays / (1000 * 24 * 60 * 60)));

        var years = toDay.getFullYear() - userBirth.getFullYear();
        var months = toDay.getMonth() - userBirth.getMonth();

        var totalMonths = years * 12 + months;
        document.writeln(`You have : <br>  a years :  ${years} years .  <br>  OR a months : ${totalMonths} months  . <br>  OR a days ${userBirthDay} days . `);
        break;
    }
}
