var listOfNotes = [];
//card object
var cardDetails = {
  noteId: "",
  color: "",
  title: "",
  imageUrl: "",
  textContent: "",
  date: "",
};
//on page load
function onLoad() {
  hideLoadBox();
  hideLoadMoreButton();
  displayNotes();
}
function overlayOn(){
  console.log("hiii");
  document.getElementById("overlay").style.display = "block";
}
/***
 * added event listener to form submit button
 * when button is clicked it will validate the form and submit that form
 * @return null
 */
$("#addButton").click(addButtonClickHandler);
function addButtonClickHandler() {
  validateInputHandler();
  submitCard(form);
}

/***
 * it will display all the cards that stored on local storage
 * @return null
 */
function displayNotes() {
  let cards = JSON.parse(localStorage.getItem("listOfNotes"));
  for (let i = 0; i < cards.length; i++) {
    createCard(cards[i]);
  }
}

/***
 * it will create card element and append to cards section
 * @return null
 */
function createCard(cardDetails) {
  let anchor = document.createElement("a");
  anchor.href = "#";
  anchor.className = "cardLink";
  anchor.setAttribute("onclick", "getNextPage(this)");
  anchor.id = cardDetails.noteId;
  anchor.style.backgroundColor = selectedColor(cardDetails.color);
  let card = document.createElement("div");
  card.className = "card";
  let noteTitle = document.createElement("h4");
  noteTitle.className = "notes-title";
  noteTitle.textContent = cardDetails.title;
  let noteDate = document.createElement("p");
  noteDate.className = "notes-date";
  noteDate.textContent = cardDetails.date;
  let imageContainer = document.createElement("div");
  imageContainer.className = "image-container";
  let image = document.createElement("img");
  image.src = cardDetails.imageUrl;
  image.alt = "vikram";
  image.setAttribute("width", "100%");
  imageContainer.appendChild(image);
  let notesContent = document.createElement("p");
  notesContent.className = "card-content";
  notesContent.textContent = cardDetails.textContent;
  card.append(noteTitle);
  card.append(noteDate);
  card.append(imageContainer);
  card.append(notesContent);
  anchor.appendChild(card);
  document.getElementById("cards-container").append(anchor);
}

/***
 * it will show the form on page
 * @return null
 */
function getForm() {
  var x = document.getElementById("formcontainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/***
 *  it will validate all the entered input
 *  if notes title will more than 100 letter it will show error
 *  it check image url will be only in jpg,png,gif format or not
 *  content should not be empty
 *  also get the color of the card help of color Event listener function call
 * @return null
 */
$(".input-values").keyup(validateInputHandler);

function validateInputHandler() {
  const regex = {
    imageURL: /^(https?:).*.(?:jpg|gif|png)$/,
  };
  let title = $("#title");
  let imageURL = $("#image");
  let content = $("#textcontent");
  let titleError = $("#title-error");
  let imageURLError = $("#imageURL-error");
  let titleVal = title.val();
  let imageURLVal = imageURL.val();
  let contentVal = content.val();
  colorEventlistener();
  if (titleVal.length > 100) {
    titleError.show();
    titleError.text("Max of 100 characters allowed");
  } else {
    titleError.hide();
  }
  if (imageURLVal !== "" && !regex["imageURL"].test(imageURLVal)) {
    imageURLError.show();
    imageURLError.text("Enter a valid image url (jpg, png, gif)");
  } else {
    imageURLError.hide();
  }

  if (
    titleVal !== "" &&
    contentVal !== "" &&
    (imageURLVal === "" || regex["imageURL"].test(imageURLVal))
  ) {
    $("#addButton").removeAttr("disabled");
  } else {
    let disabled = $("#addButton").attr("disabled");
    if (typeof disabled != undefined && disabled != false) {
      $("#add-button").attr("disabled", "");
    }
  }
}

/***
 * It get the form input data and convert into object and stored in listofnotes array
 * stores in local storage
 *
 * @return null
 */
function submitCard(form) {
  let formData = new FormData(form);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = months[d.getMonth()] + " ";
  let date = d.getDate().toString() + ",";
  let year = d.getFullYear().toString();
  let dateformat = month + date + year;
  formData.forEach(function (value, key) {
    (cardDetails["noteId"] = new Date().getTime()), (cardDetails[key] = value);
    cardDetails["date"] = dateformat;
  });

  let oldNotes = JSON.parse(localStorage.getItem("listOfNotes")) || [];
  let newNotes = [...oldNotes, cardDetails];
  localStorage.setItem("listOfNotes", JSON.stringify(newNotes));
  console.log(localStorage.getItem("listOfNotes"));
  $("#onLoadElement").css("display", "none");
  hideLoadBox()
}

/***
 * this function helps to get the color picked in form
 * @return null
 */
function colorEventlistener() {
  document.getElementById("choose-color").addEventListener("click", (event) => {
    showTickMark(event.target.id);
    cardDetails["color"] = event.target.id;
  });
}
/***
 * This function will show which color is clicked
 * @return null
 */
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

/***
 * function that will return color based on id
 * @return color
 */
function selectedColor(color) {
  switch (color) {
    case "color1":
      return "#ebcced";
      break;
    case "color2":
      return "#fcfcfc";
      break;
    case "color3":
      return "#ffca71";
      break;
    case "color4":
      return "#e5ee91";
      break;
    case "color5":
      return "#ffa78c";
      break;
    default:
      break;
  }
}

/***
 * This function will hide load box icon when no cards in page
 * @return null
 */
function hideLoadBox() {
  if (localStorage.getItem("listOfNotes").length == 0) {
    $(".onLoadElement").css("display", "block");
  } else {
    $(".onLoadElement").css("display", "none");
    $("#deleteButton").css("display", "block");
  }
}

function hideLoadMoreButton() {
  if (JSON.parse(localStorage.getItem("listOfNotes")).length >= 10) {
    $(".button-LM").css("display", "block");
  }
}

/***
 * This function will helps to show the delete box container
 * @return null
 */
function openDeleteBox(){

  var x = document.getElementById("blurdiv");
  if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
/***
 * This function will helps to close the delete box container
 * @return null
 */
function closeDeleteBox() {
  var x = document.getElementById("blurdiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/***
 * This function will helps to close the form
 * @return null
 */
function hideForm() {
  var x = document.getElementById("formcontainer");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/***
 * This function will helps to show the deleteAll the cards in page and update in local storage
 * @return null
 */
function deleteAllNotes() {
  
  const removeElements = document.querySelectorAll(
    "#cards-container,#deleteAllBox,#deleteButton,#loadMoreButton"
  );
  for (let i = 0; i < removeElements.length; i++) {
    removeElements[i].remove();
  }

  const loadIcon = document.getElementById("onLoadElement");
  loadIcon.style.display = "block";

  var x = document.getElementById("blurdiv");
  if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "none";
    }
  localStorage.clear();
  sessionStorage.clear();
}

/***
 * This function will helps show the card in full size
 * @return null
 */
function getNextPage(a) {
  window.location.href = "/notesDetail.html";
  const color = $(a).css("background-color");
  const card = a.querySelector(".card");
  const title = card.querySelector(".notes-title").textContent;
  const date = card.querySelector(".notes-date").textContent;
  const imgContainer = card.querySelector(".image-container");
  const image = imgContainer.querySelector("img").src;
  const cardContent = card.querySelector(".card-content").textContent;

  const links = document.querySelectorAll("a");
  const index = Array.prototype.indexOf.call(links, a.id);
  console.log(index);
  const cardData = {
    noteId: a.id,
    color: color,
    image: image,
    title: title,
    date: date,
    textContent: cardContent,
  };
  localStorage.setItem("selected", a.id);
  sessionStorage.setItem("cardData", JSON.stringify(cardData));
}
