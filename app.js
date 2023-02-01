var link = "https://www.ratemyprofessors.com/";
var qualityRating = 4.9;    //call functions to scrape for ratings
var difficultyRating = 1.0;

window.onload = function() {
   document.getElementById("professorLink").innerHTML=link;
   document.getElementById("qualityRating").innerHTML= "Quality Rating: " + qualityRating;
   document.getElementById("difficultyRating").innerHTML= "Difficulty Rating: " + difficultyRating;
}