const Circle ={

  shapeName:"Circle ",
  shapeInputDescription:"2. Enter Radius",
  dimensionRadius:"RADIUS",
  radiusFormula:"r",
  unitRadius:" cm",
  dimensionArea:"AREA",
  areaFormula:"πr&sup2;",
  unitArea:" sq cm",
  dimensionPerimeter:"PERIMETER",
  perimeterFormula:"2πr",
  unitPerimeter:" cm",
   Radius:function(radius){
     return radius;
   },
   Area:function(radius){
     return (3.14*radius*radius).toFixed(2);
   },
   Perimeter:function(radius){
     return 2*3.14*radius;
   }
}
const Triangle ={

  shapeName:"Equilateral Triangle ",
  shapeInputDescription:"2. Enter Side(Base & Height)",
  dimensionSide:"SIDE",
  sideFormula:"s",
  unitSide:" cm",
  dimensionArea:"AREA",
  areaFormula:"0.433 * s * s",
  unitArea:" sq cm",
  dimensionPerimeter:"PERIMETER",
  perimeterFormula:"3 * s",
  unitPerimeter:" cm",
  Side:function(side){
    return side;
  },
  Area:function(side){
    return 0.433*side*side;
  },
  Perimeter:function(side){
    return 3*side;
  }
}
const Square ={

  shapeName:"Square",
  shapeInputDescription:"2. Enter Side",
  dimensionSide:"SIDE",
  sideFormula:"s",
  unitSide:" cm",
  dimensionArea:"AREA",
  areaFormula:"s * s",
  unitArea:" sq cm",
  dimensionPerimeter:"PERIMETER",
  perimeterFormula:"4 * s",
  unitPerimeter:" cm",
  Side:function(side){
    return side;
  },
  Area:function(side){
    return side*side;
  },
  Perimeter:function(side){
    return 4*side;
  }
}
const section1 = '<div class="shapeselection" id="main"><p class="text1">1. Choose a Shape</p><div class="shapes" id="shapesX"><div id="circle" class="circle"> <i class="fa-solid fa-check tick" style="display: none;"></i> </div><div id="triangle" class="triangle"><i class="fa-solid fa-check ticon tick" style="display: none;"></i></div><div id="square" class="square"><i class="fa-solid fa-check tick" style="display: none;"></i></div></div><button onclick="input()" class="button next-button" id="next-button">NEXT</button></div>';

function eventListener(){
  document.getElementById("shapesX").addEventListener("click", (event) => {
    shapeClickHandler(event);
    localStorage.setItem("shape", event.target.id);
    document.getElementById("next-button").style.visibility = "visible";
    console.log(localStorage.getItem("shape"));
  });
}

function onStart()
{
  document.getElementById("section").innerHTML = section1;
  eventListener();
}
function shapeClickHandler(event) {
  showTickMark(event.target.id);
  document.getElementById("next-button").style.visibility = "visible";
}

function showTickMark(shape) {
  hideTicks();
  document.querySelector(`.${shape} i`).style.display = "inline";
}

function hideTicks() {
    document.querySelector(".circle i").style.display = "none";
    document.querySelector(".triangle i").style.display = "none";
    document.querySelector(".square i").style.display = "none";
}

function input(){
    if(localStorage.getItem("shape")=="circle"){
      const element = document.getElementById("main");
      element.remove();
    document.getElementById("section").innerHTML = '<div class="inputcontainersection" id="main"><p class="inputdescription" id="inputdescription"></p><input type="text" id="radius" name="side" class="inputbox" ><button onclick="calculate()" class="calculatebutton">CALCULATE</button></div>';
    document.getElementById("inputdescription").innerHTML=Circle.shapeInputDescription;
  }
    if(localStorage.getItem("shape")=="triangle"){
      const element = document.getElementById("main");
      element.remove();
    document.getElementById("section").innerHTML = '<div class="inputcontainersection" id="main"><p class="inputdescription" id="inputdescription"></p><input type="text" id="side" name="side" class="inputbox" > <button onclick="calculate()" class="calculatebutton">CALCULATE</button></div>';
    document.getElementById("inputdescription").innerHTML=Triangle.shapeInputDescription;
  }
    if(localStorage.getItem("shape")=="square"){
      const element = document.getElementById("main");
      element.remove();
    document.getElementById("section").innerHTML = '<div class="inputcontainersection" id="main"><p class="inputdescription" id="inputdescription"></p><input type="text" id="side" name="side" class="inputbox" ><button onclick="calculate()" class="calculatebutton">CALCULATE</button></div>';
    document.getElementById("inputdescription").innerHTML=Square.shapeInputDescription;
  }
}

function calculate(){
  console.log(localStorage.getItem("shape"));
  if(localStorage.getItem("shape")=="circle"){
    var radius = document.getElementById('radius').value;
    if(validInput(radius)){
      const element = document.getElementById("main");
      element.remove();
      document.getElementById("section").innerHTML = '<div class="tablearea" id="main"><div class="circle"></div><p class="shapes-description" id="shape-name"></p><div class="result-table"><div class="row"><div class="column1" id="dimensionRadius"></div><div class="column2" id="radiusFormula"></div><div class="column3" id="radiusvalue"></div></div><div class="row"><div class="column1" id="dimensionArea"></div><div class="column2" id="areaFormula"></div><div class="column3" id="areavalue"></div></div><div class="row"><div class="column1" id="dimensionPerimeter"></div><div class="column2" id="perimeterFormula"></div><div class="column3" id="perimetervalue"></div> </div></div> <button onclick="startAgain()" class="startagainbutton">START AGAIN</button></div>';
      document.getElementById("shape-name").innerHTML=Circle.shapeName;
      document.getElementById("dimensionRadius").innerHTML=Circle.dimensionRadius;
      document.getElementById("dimensionArea").innerHTML=Circle.dimensionArea;
      document.getElementById("dimensionPerimeter").innerHTML=Circle.dimensionRadius;
    
      document.getElementById("radiusFormula").innerHTML=Circle.radiusFormula;
      document.getElementById("areaFormula").innerHTML=Circle.areaFormula;
      document.getElementById("perimeterFormula").innerHTML=Circle.perimeterFormula;
    
      document.getElementById("radiusvalue").innerHTML=Circle.Radius(radius)+" cm";
      document.getElementById("areavalue").innerHTML=Circle.Area(radius)+" sq cm";
      document.getElementById("perimetervalue").innerHTML=Circle.Perimeter(radius)+" cm";
    }else{
      alert("Please Enter valid Number");
    }
    
  
}
  if(localStorage.getItem("shape")=="triangle"){
    var side = parseInt(document.getElementById('side').value);
    if(validInput(side)){
      const element = document.getElementById("main");
      element.remove();
     document.getElementById("section").innerHTML = '<div class="tablearea" id="main"><div class="triangle"></div><p class="shapes-description" id="shape-name"></p><div class="result-table"><div class="row"><div class="column1" id="dimensionSide"></div><div class="column2" id="sideFormula"></div><div class="column3" id="sidevalue"></div></div><div class="row"><div class="column1" id="dimensionArea"></div><div class="column2" id="areaFormula"></div><div class="column3" id="areavalue"></div></div><div class="row"><div class="column1" id="dimensionPerimeter"></div><div class="column2" id="perimeterFormula">3</div><div class="column3" id="perimetervalue"></div> </div></div><button onclick="startAgain()" class="startagainbutton">START AGAIN</button></div>';
     document.getElementById("shape-name").innerHTML=Triangle.shapeName;
     document.getElementById("dimensionSide").innerHTML=Triangle.dimensionSide;
     document.getElementById("dimensionArea").innerHTML=Triangle.dimensionArea;
     document.getElementById("dimensionPerimeter").innerHTML=Triangle.dimensionPerimeter;
   
     document.getElementById("sideFormula").innerHTML=Triangle.sideFormula;
     document.getElementById("areaFormula").innerHTML=Triangle.areaFormula;
     document.getElementById("perimeterFormula").innerHTML=Triangle.perimeterFormula;
  
     document.getElementById("sidevalue").innerHTML=Triangle.Side(side)+" cm";
     document.getElementById("areavalue").innerHTML=Triangle.Area(side)+" sq cm";
     document.getElementById("perimetervalue").innerHTML=Triangle.Perimeter(side)+" cm";
    }else{
      alert("Please Enter valid Number");
    }
   
  }

  if(localStorage.getItem("shape")=="square"){
    var side = parseInt(document.getElementById('side').value);
    if(validInput(side)){
      const element = document.getElementById("main");
    element.remove();
  document.getElementById("section").innerHTML = '<div class="tablearea" id="main"><div class="square"></div><p class="shapes-description" id="shape-name"></p><div class="result-table"><div class="row"><div class="column1" id="dimensionSide"></div><div class="column2" id="sideFormula"></div><div class="column3" id="sidevalue"></div></div><div class="row"><div class="column1" id="dimensionArea"></div><div class="column2" id="areaFormula"></div><div class="column3" id="areavalue"></div></div><div class="row"><div class="column1" id="dimensionPerimeter"></div><div class="column2" id="perimeterFormula"></div><div class="column3" id="perimetervalue"></div> </div></div><button onclick="startAgain()" class="startagainbutton">START AGAIN</button></div>';
  document.getElementById("shape-name").innerHTML=Square.shapeName;
  document.getElementById("dimensionSide").innerHTML=Square.dimensionSide;
  document.getElementById("dimensionArea").innerHTML=Square.dimensionArea;
  document.getElementById("dimensionPerimeter").innerHTML=Square.dimensionPerimeter;

  document.getElementById("sideFormula").innerHTML=Square.sideFormula;
  document.getElementById("areaFormula").innerHTML=Square.areaFormula;
  document.getElementById("perimeterFormula").innerHTML=Square.perimeterFormula;

  document.getElementById("sidevalue").innerHTML=Square.Side(side)+" cm";
  document.getElementById("areavalue").innerHTML=Square.Area(side)+" sq cm";
  document.getElementById("perimetervalue").innerHTML=Square.Perimeter(side)+" cm";
    }else{
      alert("Please Enter valid Number");
    }
    
}
}

function startAgain(){
  const element = document.getElementById("main");
  element.remove();
  document.getElementById("section").innerHTML = section1;
  localStorage.clear();
  eventListener()
}
function validInput(input)
{
  return !isNaN(input) && input !== "";
}