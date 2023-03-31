$( document ).ready(function() {
  const videoAPI = "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0";
  $.getJSON(videoAPI, { format: "json" }).done(function (data) {
    createVideoElement(data);
    createMovieNameElement(data);
    createMovieDescriptionElement(data);
    let documentFragment = $(document.createDocumentFragment());
    for (let temp in data.comments) {
      documentFragment.append(createComment(data.comments[temp]));
    }
    $("#comments").append(documentFragment);
  });

  const posterAPI = "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346";
  $.getJSON(posterAPI, { format: "json" }).done(function (data) {
    let documentFragment = $(document.createDocumentFragment());
    for (let temp in data) {
      documentFragment.append(createImageCards(data[temp]));
    }
    $("#upcoming-movies").append(documentFragment);
  });
});


/** It will createComment Container
 * @returns Div object
 */
function createComment(temp) {
  let div = $("<div>");
  div.attr("class", "card");
  let divimg = $("<div>");
  divimg.attr("class", "img-container");
  let img = $("<img>");
  img.attr("src", temp.image);
  img.attr("alt", temp.name);
  divimg.append(img);
  let divcarddetails = $("<div>");
  divcarddetails.attr("class", "card-details");
  let subdiv1carddetails = $("<div>");
  subdiv1carddetails.attr("class", "commenter-name");
  subdiv1carddetails.html(temp.name);
  let subdiv2carddetails = $("<div>");
  subdiv2carddetails.attr("class", "comment");
  subdiv2carddetails.html(temp.comment);
  divcarddetails.append(subdiv1carddetails);
  divcarddetails.append(subdiv2carddetails);
  div.append(divimg);
  div.append(divcarddetails);

  return div;
}

function playVid() { 
  console.log("hii");
  document.getElementById("video").play(); 
  document.getElementById("video").setAttribute("controls",""); 
  let x =document.getElementById("play"); 
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/**
 * It will create Image Container
 * @returns Div object
 */
function createImageCards(temp) {
  let div = $("<div>");
  div.attr("class", "movie-container");
  let imgdiv = $("<img>");
  imgdiv.attr("src", temp.imageUrl);
  imgdiv.attr("alt", temp.title);
  div.append(imgdiv);
  console.log(div);
  return div;
}
/**
 * It will create Video Element
 * @returns null
 */
function createVideoElement(data) {
  let videoDiv = $("<video>");
  videoDiv.attr("id", "video");
  videoDiv.attr("width", "100%");
  videoDiv.attr("controls", "");
  videoDiv.attr("poster", "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg");

  let sourceDiv = $("<source>");
  sourceDiv.attr("src", data.videoUrl);
  sourceDiv.attr("type", "video/mp4");
  videoDiv.append(sourceDiv);
  $("#video-div").append(videoDiv);
}
/**
 * It will create Movie Name Element
 * @returns null
 */
function createMovieNameElement(data) {
  let movieName = $("<p>");
  movieName.attr("class", "movie-name");
  movieName.attr("id", "movie-name");
  movieName.attr("class", "movie-name");
  movieName.html(data.title);
  $("#video-div").after(movieName);
}
/**
 * It will create Movie  Description Element
 * @returns null
 */
function createMovieDescriptionElement(data) {
  let movieDescription = $("<p>");
  movieDescription.attr("class", "movie-description");
  movieDescription.attr("id", "movie-description");
  movieDescription.html(data.description);
  $("#movie-name").after(movieDescription);
}
