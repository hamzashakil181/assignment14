// // ASSIGNMENT # 14
// // 1.
// var city = prompt("enter where do you live?")
// if(city === "karachi"){
//     alert ("Welcome to city of lights");
// }

// // 2.
// var gender = prompt("enter your gender")
// if(gender === "male"){
//     alert("Good Morning Sir")
// }
// else if(gender === "female"){
//     alert("Good Morning maam")
// }
// else{
//     alert("undefined")
// }
// // 3.

// var signal_color = prompt("Enter the signal color (Red, Yellow, Green): ")


// if (signal_color === "red"){
//     alert("Must Stop")
// }

// else if (signal_color === "yellow"){
//     alert("ready to move")
// }
// else if (signal_color === "green"){
//     alert("move now")
// }
// else{
//     alert("Invalid color entered. Please enter Red, Yellow, or Green.")}

// // 4.
// var fuel = prompt("remaining fuel in car (in litres)")

// if(fuel< 0.25 ){
//     alert("please refill the fuel in your car")
// }
// else{
//    alert("No need refill the fuel in your car")
// }

// // 5.
// / // a
// // // // var a = 4;
// // // // if (++a === 5){
// // // // alert("given condition for variable a is true");
// // // // }  Yes Alert Displayed
// // // // // b
// // // //  var b = 82;
// // // // if (b++ === 83){
// // // // alert("given condition for variable b is False");
// // // // } No Alert is not displayed
// // // // c Condition 1
// // // var c = 12;
// // // if (c++ === 13){
// // // alert("condition 1 is true");
// // // } 
// // // // Condition 1 Alert Not Displayed 
// // // // Condition 2
// // // if (c === 13){
// // //     alert("condition 2 is true");
// // //     }
// // // //  Conditin 2 is true
// // // // Condition 3
// // // if (++c < 14){
// // //     alert("condition 3 is true");
// // //     }
// // //     // Condition 3 no Alert Display
// // //     // Condition 4
// // //     if(c === 14){
// // //         alert("condition 4 is true");
// // //         }
// // //         // Condition 4 is true
// // //         // D
// // //         var materialCost = 20000;
// // //         var laborCost = 2000;
// // //         var totalCost = materialCost + laborCost;
// // //         if (totalCost === laborCost + materialCost){
// // //         alert("The cost equals");
// // //         }
// // //         // d is true alert displayed
// // //         // e
// // //         if (true){
// // //             alert("True");
// // //             }
// // //             // Alert Displayed 
// // //             if (false){
// // //                 alert("False");
// // //                 }
// // //                 // Alert Not Displayed
// // //                 // f
// // //                  if("car" < "cat"){
// // //                     alert("car is smaller than cat");
// // //                     }
// // //     

// // 6.
// // var sub_1 = prompt("Enter Your First Subject Name")
// // var sub_2 = prompt("Enter Your Second Subject Name")
// // var sub_3 = prompt("Enter Your Third Subject Name")
// // var obtain_sub = +prompt("Enter Subject 1 Obtain Marks")
// // var obtain_sub2 = +prompt("Enter Subject 2 Obtain Marks")
// // var obtain_sub3 = +prompt("Enter Subject 3 Obtain Marks")
// // var totalObtain = obtain_sub+obtain_sub2+obtain_sub3
// // var total = 300
// // var percentage = totalObtain/total*100
// // var remarks 
// // var grade
// // if (percentage < 60){
// //     remarks = "Sorry"
// //     grade = "Fail"
// // }

// //  else if (percentage <= 60){
// //     remarks = "You Need To Improve"
// //     grade = "B"
// // }

// // else if (percentage => 70){
// //     remarks = "Good"
// //     grade = "A"
// // }

// // else if (percentage <= 60){
// //     remarks = "Excellent"
// //     grade = "A-one"
// // }
// // document.write(`<h1><Mark Sheet/h1><br>
// //     Total Marks : ${total}<br>
// //     Marks Obtained : ${totalObtain}<br>
// //     Percentage : ${percentage} % <br>
// //     Grade : ${grade}  <br>
// //     Remarks : ${remarks}`)

// // 7.
// var secNum = 4
// // var num = +prompt("Guess The Number (Range 1 - 10)")
// // if(num === secNum){
// //     alert("Bingo!")
// // }
// // else if(num  === secNum + 1){
// //     alert("Close Enough to the correct answer")
// // }
// // else{
// //     alert("Try Again")
// // }

// // 8.
// var number = +prompt("Enter A Number To Check It Is Divided By 3 or Not")
// // if (number % 3 === 0){
// //     alert(`The ${number} is divided by 3`)
// // }
// // else{
// //     alert(`The ${number} is not divided by 3`)
// // }

// // 9.
// // var check = +prompt("Enter A Number To Check It Is Odd Or Even")
// // if (check % 2 === 0){
// //     alert("This Is An Even Num")
// // }
// // else{
// //     alert("This Number Is An Odd Num")
// // }

// // 10.
// // var temp = prompt("Write A Temperature Name to see the message")
// // if (temp > 40){
// //     alert("It is to hot outside.")
// // }
// // else if(temp > 30){
// //     alert("The Weather today is Normal.")
// // }
// // else if(temp > 20){
// //     alert("Today's Weather is cool.")
// // }
// // else if (temp > 10){
// //     alert("OMG! Today's weather is so Cool.")
// // }
// // else{
// //     alert("Please Enter The Temperature.")
// // }


// // 11.
// var firstNum = +prompt("Enter A First Number to Calculation")
// var secNum = +prompt("Enter A Second Number to Calculation")
// var operation = prompt("Now Enter The Operation (+ , - , % , / , *)")
// var result
// if(operation === "+"){
//     result = firstNum+secNum
//     alert(`The Answer Of ${firstNum} + ${secNum} is ${result}`)
// }
// else if( operation === "-"){
//     result = firstNum-secNum
//     alert(`The Answer Of ${firstNum} - ${secNum} is ${result}`)
// }
// else if (operation === "*"){
//     result = firstNum*secNum
//     alert(`The Answer Of ${firstNum} x ${secNum} is ${result}`)
// }
// else if(operation === "/"){
//     result = firstNum/secNum
//     alert(`The Answer Of ${firstNum} / ${secNum} is ${result}`)
// }
// else if (operation === "%"){
//     result = firstNum%secNum
//     alert(`The Modules Of ${firstNum}   ${secNum} is ${result}`)
// }
// else {
//     alert(`Please Enter The Valid Operation "+,-,/,% "`)
// }