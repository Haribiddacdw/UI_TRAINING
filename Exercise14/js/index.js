/** Regex Conditions*/
var regexPatterns = {
 "firstname" : /^[a-zA-Z]{1,30}$/,
 "lastname" : /^[a-zA-Z]{1,30}$/,
 "email": /^([a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+){1,50}$/,
 "contactnumber":/^[6-9]\d{9}$/,
 "pincode": /^[6][0-9]{5}$/,
 "cardnumber":/^4[0-9]{12}(?:[0-9]{3})?$/,
 "cardexpyear":/^[0-9]{4}$/,
  "cvv":/^\d{3,4}$/
}
/**
 * It takes an input element as an argument,
 * It checks whether date is valid or not , if valid return true and else return false
 * @returns a boolean value.
 */
function checkYear(input){
   if(regexPatterns[cardexpyear].test(input)&&(new Date().getFullYear() <= parseInt(input))){return true;}
   else{return false;}
}
/**
 * It will validate the user input  whether  is valid or not , if valid return true and else return false
 * @returns a boolean value.
 */
function myFunction() {
  let isValidFlag = true;
  let inputAll =document.querySelectorAll("input");
  clearErrorMessage(inputAll);
  for(let input of inputAll){
    if(isRequired(input.value)){
       isValidFlag&=false;
       errorMessage(input,"is required");
    }else if(!isValid(input)){
      isValidFlag&=false;
       errorMessage(input,"is not valid");
    }
  }
  let input = document.querySelector("[name='cardexpyear']");
  if (isRequired(input.value)) {
    errorMessage(input, "is required");
    isValidFlag &= false;
  } else if (new Date().getFullYear() <= parseInt(input.value)) {
    isValidFlag&= true;
  } else {
    errorMessage(input, "is not valid");
  }

  if (isValidFlag) {
     document.getElementById("form-message").textContent="submitted"
  }
  return isValidFlag;
}
/**
 * It will validate the user input  whether it is correct format or not , if correct return true and else return false
 * @returns a boolean value.
 */
function isValid(input){
   let inputName = input.getAttribute("name");
   let data = input.value;
   let regexResult = regexPatterns[inputName].test(data);
   return regexResult;
}
/**
 * It will validate the user input  whether it is empty or not , if valid return true and else return false
 * @returns a boolean value.
 */
function isRequired(input){
  return input=="";
}
/**
 * It will display the error message to the user
 * @returns a boolean value.
 */
function errorMessage(input,message){
   let id = input.getAttribute("id");
   document.getElementById(id).classList.add("input-box");
   let p = document.querySelector("#" + id + "~ .error");
       p.textContent= input.getAttribute("name") + " " + message;
}
/**
 * It will remove all error message
 * @returns a boolean value.
 */
function clearErrorMessage(inputAll){
  inputAll.forEach((element) => {
    let elementId = element.getAttribute("id");
    document.getElementById(elementId).classList.remove("input-box");
    document.querySelector("#"+elementId+"~ .error").innerText = "";
  });
}
