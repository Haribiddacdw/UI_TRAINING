
    
    // var fname = document.forms["myform"]["firstname"].value;
  // var lname = document.forms["myform"]["lastname"].value;
  // var email = document.forms["myform"]["email"].value;
  // var contactNumber = document.forms["myform"]["contactnumber"].value;
  // var pincode = document.forms["myform"]["pincode"].value;
  // var cardnumber = document.forms["myform"]["cardnumber"].value;
  // var cardexpyear = document.forms["myform"]["cardexpyear"].value;
  // var cvv = document.forms["myform"]["cvv"].value;
   
   
   // if (lname == "") {
  //   lnameError.innerHTML = "Last Name is Required";
  //   isValid = false;
  // } else if (nameCheck.test(lname)==false) {
  //   lnameError.innerHTML ="Last Name is not valid";
  //   isValid = false;
  // }else{
  //    lnameError.innerHTML="";
  // }

//   function createErrorElement(){
//    let errorPara = document.createElement("p");
//    errorPara.id="error";
   
//    if(data=="required"){
//     errorPara.innerText = "First Name is Required"
//    }else{
//     errorPara.innerText = "First Name is not valid"
//    }
// }



  // input = document.querySelector("[name='Email']");
  // if (isEmpty(input.value)) {
  //   promptMessage(input, "is required");
  //   flag &= false;
  // } else if (input.value.length <= 50) {
  //   flag &= true;
  // } else {
  //   promptMessage(input, "is not valid");
  // }
  // if (flag) {
  //   alert("Payment Successful !!!");
  // }
  // return flag;


//   function createErrorElement(errorType,element,elementType){
//    let errorPara = document.createElement("p");
//    errorPara.id="error";
//    let nodeList= document.querySelectorAll("input");
   
//    nodeList.forEach(function (index, value) {
//     if(index.id==element.id){
//       console.log(index);
//       document.getElementById(element.id).insertAdjacentElement('afterend',errorPara);
//       document.getElementById("error").textContent="";
//     }
//   });

//    if(errorType=="required"){
//     errorPara.innerText = elementType+" is Required";
//    }else{
//     errorPara.innerText = elementType+" is not valid";
//    }
// }


   // if (email == "") {
  //   emailError .innerHTML ="Email Address is Required";
  //   isValid = false;
  // }else if(emailCheck.test(email)==false){
  //    emailError.innerHTML="Email Address is not valid";
  //    isValid = false;
  // }else{
  //   emailError.innerHTML="";
  // }
 
  // if (contactNumber == "") {
  //   contactNumberError.innerHTML ="Contact Number is Required";
  //   isValid = false;
  // } else if (contactNumberCheck.test(contactNumber) == false) {
  //   contactNumberError.innerHTML ="Contact Number is not valid";
  //   isValid = false;
  // }else{
  //   contactNumberError.innerHTML="";
  // }

 // fnameError.innerHTML = "";
//   if (fname === "") {
//     fnameError.innerHTML = "First Name is Required";
//    isValid = false;
//   } else if (nameCheck.test(fname)==false) {
//     fnameError.innerHTML = "First Name is not valid";
//     isValid = false;
//   } else {
//     fnameError.innerHTML = "";
//   }
  
 
 
 
   // if (pincode == "") {
  //   pincodeError.innerHTML = "Pin Code is Required";
  //   isValid = false;
  // } else if (pincodecheck.test(pincode)==false) {
  //   pincodeError.innerHTML = "Pin Code is Not Valid";
  //   isValid = false;
  // }else{
  //   pincodeError.innerHTML="";
  // }
 
 
   // if (cardnumber == "") {
  //   cardnumberError.innerHTML ="Card Number is Required";
  //   isValid = false;
  // } else if (cardnumbercheck.test(cardnumber) == false) {
  //     cardnumberError.innerHTML ="Card Number is Not Valid";
  //   isValid = false;
  // }else{
  //   cardnumberError.innerHTML="";
  // }
 
  // if (cardexpyear == "") {
  //   cardexpyearError.innerHTML ="Card Expiry is Required";
  //   isValid = false;
  // }else if(cardexpyearCheck.test(cardexpyear)==false)
  // {
  //   cardexpyearError.innerHTML="Card Expiry is Not Valid";
  //   isValid = false;
  // }else{
  //   cardexpyearError.innerHTML="";
  // }
 
 
 
 // if (cvv == "") {
  //   cvvError.innerHTML = "CVV is Required";
  //   isValid = false;
  // } else if (cvvcheck.test(cvv) == false) {
  //    cvvError.innerHTML = "CVV is Not Valid";
  //   isValid = false;
  // }else{
  //   cvvError.innerHTML="";
  // }




  let isValid = true;
  for(let element of document.querySelectorAll("#emptyFirstName,#emptyLastName,#emptyEmail,#emptyContactNumber,#emptyPincode,#emptyCardNumber,#emptyExpiry,#emptyCVV")){
    element.textContent="";
  }
 
  let fnameError = document.getElementById("emptyFirstName");
  let fname=document.getElementById("firstname");
  fnameError = (fname.value == "")? (fnameError.textContent = "First Name is Required", isValid = false): ((nameCheck.test(fname.value )==false) ? (fnameError.textContent  = "First Name is not valid",isValid = false,fname.style.border = "1px solid rgb(154, 30, 20)") : (fnameError.textContent  = "",fname.style.border = "1px solid #CCCCCC"));
  
  let lname = document.getElementById("lastname");
  let lnameError = document.getElementById("emptyLastName");
  lnameError = (lname.value == "")?(lnameError.textContent  = "Last Name is Required" ,isValid = false):((nameCheck.test(lname.value)==false) ? (lnameError.textContent  ="Last Name is not valid",isValid = false,lname.style.border = "1px solid rgb(154, 30, 20)"):(lnameError.textContent ="",lname.style.border = "1px solid #CCCCCC"));
 
  let emailError = document.getElementById("emptyEmail");
  var email  = document.getElementById("email");
  emailError = (email.value == "")?(emailError.textContent ="Email Address is Required" ,isValid = false):((emailCheck.test(email.value)==false) ? (emailError.textContent="Email Address is not valid" ,isValid = false,email.style.border = "1px solid rgb(154, 30, 20)"):(emailError.textContent="",email.style.border = "1px solid #CCCCCC"));

  let contactNumberError=document.getElementById("emptyContactNumber");
  var contactNumber = document.getElementById("contactnumber");
  contactNumberError = (contactNumber.value == "") ? (contactNumberError.textContent ="Contact Number is Required" ,isValid = false) :(contactNumberCheck.test(contactNumber.value)==false) ? (contactNumberError.textContent ="Contact Number is not valid" ,isValid = false,contactNumber.style.border = "1px solid rgb(154, 30, 20)"): (contactNumberError.textContent="",contactNumber.style.border = "1px solid #CCCCCC");
  
  let pincodeError = document.getElementById("emptyPincode");
  var pincode = document.getElementById("pincode");
  pincodeError = (pincode.value == "") ? (pincodeError.textContent= "Pin Code is Required",isValid = false):(pincodecheck.test(pincode.value)==false) ?(pincodeError.textContent = "Pin Code is Not Valid" ,isValid = false,pincode.style.border = "1px solid rgb(154, 30, 20)") :(pincodeError.textContent="",pincode.style.border = "1px solid #CCCCCC");

  let cardnumberError=document.getElementById("emptyCardNumber");
  var cardnumber = document.getElementById("cardnumber");
  cardnumberError = (cardnumber.value == "" )?(cardnumberError.textContent ="Card Number is Required" ,isValid = false):(cardnumbercheck.test(cardnumber.value)==false)?(cardnumberError.textContent ="Card Number is Not Valid" ,isValid = false,cardnumber.style.border = "1px solid rgb(154, 30, 20)"):(cardnumberError.textContent="",cardnumber.style.border = "1px solid #CCCCCC");

  let cardexpyearError =document.getElementById("emptyExpiry");
  var cardexpyear = document.getElementById("cardexpyear");
  cardexpyearError =(cardexpyear.value == "")? (cardexpyearError.textContent ="Card Expiry is Required" ,isValid = false): (checkYear(cardexpyear.value)==false)?(cardexpyearError.textContent="Card Expiry is Not Valid" ,isValid = false,cardexpyear.style.border = "1px solid rgb(154, 30, 20)"):(cardexpyearError.textContent="",cardexpyear.style.border = "1px solid #CCCCCC");

  let cvvError = document.getElementById("emptyCVV");
  var cvv= document.getElementById("cvv");
  cvvError = (cvv.value == "") ?((cvvError.textContent = "CVV is Required" , isValid = false)):((cvvcheck.test(cvv.value)==false)?(cvvError.textContent = "CVV is Not Valid", isValid = false,cvv.style.border = "1px solid rgb(154, 30, 20)"):(cvvError.textContent="",cvv.style.border = "1px solid #CCCCCC"));
  
/*form submit message*/
  if(isValid) {
    document.getElementById("form-message").innerText="submitted"
       console.log("submitted");
  }
/**
  * @return
  * s a boolean value.
 */
  return isValid;