/* Fetching video json data */
fetch("store/video.json")
  .then((data) => data.json())
  .then((data) => {
    createVideoElement(data);
    createMovieNameElement(data);
    createMovieDescriptionElement(data);
    let empty = document.createElement("div");
    for (let temp in data.comments) {
      empty.append(createComment(data.comments[temp]));
    }
    document.getElementById("comments").append(empty);
  });

/* Fetching poster json data */
fetch("store/posters.json")
  .then((data) => data.json())
  .then((data) => {
    let output = document.createElement("div");
    for (let temp in data) {
      output.append(createImageCards(data[temp]));
    }
    document.getElementById("upcoming-movies").append(output);
  });



function playVid() { 
  document.getElementById("video").play(); 
  document.getElementById("video").setAttribute("controls",""); 
  let x =document.getElementById("play-icon"); 
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}



/**
 * It will createComment Container
 * @returns Div object
 */
function createComment(temp) {
  let div = document.createElement("div");
  div.className = "card";
  let divimg = document.createElement("div");
  divimg.className = "img-container";
  let img = document.createElement("img");
  img.src = temp.image;
  img.alt = temp.name;
  divimg.appendChild(img);

  let divcarddetails = document.createElement("div");
  divcarddetails.className = "card-details";
  let subdiv1carddetails = document.createElement("div");
  subdiv1carddetails.className="commenter-name";
  subdiv1carddetails.textContent = temp.name;
  let subdiv2carddetails = document.createElement("div");
  subdiv2carddetails.className="comment";
  subdiv2carddetails.textContent = temp.comment;
  divcarddetails.appendChild(subdiv1carddetails);
  divcarddetails.appendChild(subdiv2carddetails);
  div.appendChild(divimg);
  div.appendChild(divcarddetails);
  return div;
}
/**
 * It will create Image Container
 * @returns Div object
 */
function createImageCards(temp) {
  let div = document.createElement("div");
  div.className = "movie-container";
  let imgdiv = document.createElement("img");
  imgdiv.src = temp.imageUrl;
  imgdiv.alt = temp.title;
  div.appendChild(imgdiv);
  return div;
}
/**
 * It will create Video Element
 * @returns null
 */
function createVideoElement(data) {
  let videoDiv = document.createElement("video");
  videoDiv.id = "video";
  videoDiv.setAttribute("width", "100%");
  videoDiv.setAttribute("poster", "https://www.slashcam.de/images/news/sprite_fright1-16857_PIC1.jpg");
  let sourceDiv = document.createElement("source");
  sourceDiv.src = data.videoUrl;
  sourceDiv.type = "video/mp4";
  videoDiv.appendChild(sourceDiv);
  document.getElementById("video-div").appendChild(videoDiv);
}
/**
 * It will create Movie Name Element
 * @returns null
 */
function createMovieNameElement(data) {
  let movieName = document.createElement("p");
  movieName.className = "movie-name";
  movieName.id = "movie-name";
  movieName.textContent = data.title;
  document
    .getElementById("video-div")
    .insertAdjacentElement("afterend", movieName);
}
/**
 * It will create Movie  Description Element
 * @returns null
 */
function createMovieDescriptionElement(data) {
  let movieDescription = document.createElement("p");
  movieDescription.className = "movie-description";
  movieDescription.id = "movie-description";
  movieDescription.textContent = data.description;
  document
    .getElementById("movie-name")
    .insertAdjacentElement("afterend", movieDescription);
}
