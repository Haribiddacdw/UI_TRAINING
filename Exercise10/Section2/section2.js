//1
cricketPlayers=[
    "Dhoni",
    "Kohli",
    "Raina",
    "Kl Rahul",
    "Bumrah",
    "Gill",
    "Gambhir",
    "Ganguly",
    "Zaheer",
    "Ashwin",
    "Jaddu"
];
console.log(cricketPlayers);

//2
cricketPlayers.shift(0);
console.log(cricketPlayers);

//3
console.log("Total Number of Players",cricketPlayers.length);

//4
cricketPlayers.push("Bidda");
console.log("Total Number of Players",cricketPlayers.length);

//5
cricketPlayers.sort();
console.log("Total Number of Players",cricketPlayers);



//6
jourseyNumberArray=[];
while(jourseyNumberArray.length<11){
    let number = Math.floor((Math.random() * 100) + 1);
    if(jourseyNumberArray.indexOf(number)==-1){
        jourseyNumberArray.push(number)
    }
}
console.log("Player Name with Jersey Number ");
for(var i=0;i<cricketPlayers.length;i++){
    console.log("playername :",cricketPlayers[i] ,"  and Jersey Number :",jourseyNumberArray[i] );
}

//7
cricketPlayers1 = cricketPlayers.map(cricketPlayers=>cricketPlayers.toUpperCase());
console.log(cricketPlayers1);
  