
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
    var again = confirm("Do you like showing your Inputs ?");
    if (!again) break;
}
document.writeln(`Summation is : ${sum} <br>`);
document.writeln(`Multiplication is : ${Multiplication} <br>`);
document.writeln(`Division is :  ${Division} <br>`);
