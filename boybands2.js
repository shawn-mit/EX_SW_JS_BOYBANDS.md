 var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var currentBand = "";

//var loopCount = bands.length;
//console.log (bands);
for (var x = 0; x < bands.length; x ++) 
 
 {

  currentBand = "<p>" + bands[x] + "</p>";
var bandElement = document.getElementById("boybands");
 // console.log (currentBand);

document.write ( currentBand);

}







var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var vegetableArr; 

var vegCount = vegetables.length ; 
 	// console.log (vegCount) ; 

for (var i = 0 ; i < vegCount ; i ++) 

{

 vegetableArr =  "<p>" + vegetables[i]  + "</p>" ;

 var vegElement = document.getElementById("vegetables");  
  
  // vegElement.innerHTML = vegetableArr;

 document.write(vegetableArr);


}








