var b;
var insertionsorter;
var numbarray = [];
var randonumber;
var temp;
function setup() {
 /* var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
 

*/ //unused setup normally reserved for visual/graphics

  new numbarraygenerator(10)
  new insertionsorter(numbarray) 
}

function draw() {

}
function numbarraygenerator (length){
	for(var k = 0; k <length; k++){
		var randonumber = random(0,9);
		numbarray.push(randonumber);
		console.log(randonumber);
		
		
	}
	
	
}

function insertionsorter (numbarray){
	for(var i = 1; i < numbarray.length; i++){
		for(var j = i; j > 0; j--){
			
			var temp = numbarray[j];
			numbarray[j] = numbarray[j-1];
			numbarray[j-1] = temp;
			
		}
	}
	
	console.log(numbarray) //console log the sorted results
}