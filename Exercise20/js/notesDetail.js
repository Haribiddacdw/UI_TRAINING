//card object
var cardDetails = {
  "noteId":"",
  "color":"",
  "title":"",
  "imageUrl":"",
  "textContent":"",
  "date":""
};

/**
 * this function will display the clicked card in full size
 * @return null
 */
function getNote(){
  const storedCard = sessionStorage.getItem('cardData');
  if (storedCard){
    const parsedCard = JSON.parse(storedCard);
    console.log(parsedCard);
    $('.theme-icon').css('background-color', parsedCard.color)
    $("#note-image").attr("src", parsedCard.image);
    document.getElementById('note-title').textContent = parsedCard.title;
    document.getElementById('note-date').textContent = parsedCard.date;
    document.getElementById('note-description').textContent=parsedCard.textContent;
  }   
}
/***
 * This function will helps to close the form
 * @return null
 */
function hideForm(){
  var x = document.getElementById("formcontainer");
  if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
/***
 * This function will helps to edit the form 
 * @return null
 */
function editForm(){
    var x = document.getElementById("formcontainer");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }  
      colorEventlistener();
}

  function saveButtonClickHandler() {
       submitCard2(form);
  }

function colorEventlistener() {
  document.getElementById("choose-color").addEventListener("click", (event) => {
    showTickMark(event.target.id);
    cardDetails["color"] = event.target.id;
  });
}
function showTickMark(color) {
  hideTicks();
  document.querySelector(`.${color} i`).style.display = "inline";
}
function hideTicks() {
    document.querySelector(".color1 i").style.display = "none";
    document.querySelector(".color2 i").style.display = "none";
    document.querySelector(".color3 i").style.display = "none";
    document.querySelector(".color4 i").style.display = "none";
    document.querySelector(".color5 i").style.display = "none";
}

function selectedColor(color) {
  switch (color) {
      case "color1":
          return "rgb(229,205,234)";
          break;
      case "color2":
          return "rgb(252,252,252)";
          break;
      case "color3":
          return "rgb(247,204,127)";
          break;
      case "color4":
          return "rgb(231,238,234)";
          break;
      case "color5":
          return "rgb(243,171,145)";
          break;
      default:
          break;
  }
}
/***
 * This function will helps get current date 
 * @return null
 */
function getDate(){
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const d = new Date();
  let month = months[d.getMonth()]+" ";
  let date = d.getDate().toString()+",";
  let year = d.getFullYear().toString();
  let dateformat = month+date+year;
  return dateformat;
}



function submitCard2(form){
  let selectID = localStorage.getItem("selected");
  let listofnotes = JSON.parse(localStorage.getItem("listOfNotes"));
  let formData = new FormData(form);
  let dateformat = getDate();
  formData.forEach(function(value, key){
      cardDetails["noteId"]= selectID;
      cardDetails[key] = value;
      cardDetails["date"] = dateformat ;
  });
  
  console.log(cardDetails);
  let index = listofnotes.findIndex(e=>{
    return e.noteId == selectID;
   });
  console.log(index);
  console.log(cardDetails);
  
   listofnotes.splice(index,1,cardDetails);
   console.log(listofnotes);
   var json = JSON.stringify(listofnotes);
   localStorage.setItem("listOfNotes",json);
    window.location.href = '/index.html';
}

function openDeleteNote(){

    var x = document.getElementById("deleteAllBox");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}

function deleteNotes(){

  let selectID = localStorage.getItem("selected");
  let listofnotes = JSON.parse(localStorage.getItem("listOfNotes"));
  console.log(listofnotes,selectID);
  let index = listofnotes.findIndex(e=>{
    return e.noteId == selectID;
   });
   console.log(index);
   listofnotes.splice(index,1);
   console.log(listofnotes);
   var json = JSON.stringify(listofnotes);
   localStorage.setItem("listOfNotes",json);
   
    window.location.href = '/index.html';

}


$("#save-button").click(saveButtonClickHandler);