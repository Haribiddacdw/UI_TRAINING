//1
displayNumber();
function displayNumber() {
  for (var i = 1; i <= 100; i++) {
    console.log(i);
  }
}

//2
displayTodayDate();
function displayTodayDate() {
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;
  console.log("Today's Date :", currentDate);
}

//3
var celsius = 3;
console.log(getFahrenheitValue(celsius)+"F");
function getFahrenheitValue(celsius){
    return celsius*1.8+32;
}

//4
var array=[1,2,3,4,5,6,7,8,9];
console.log(getAverageValue(array));
function getAverageValue(array){
       avg = array.reduce((prevVal, Val) => prevVal+Val)/array.length
    return avg;
}

//5
var string="hari";
console.log(reverseString(string));
function reverseString(string){
    return string.split("").reverse().join("");
}