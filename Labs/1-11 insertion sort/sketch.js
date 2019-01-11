var b;
var insertionsorter;
var numbarray = [];
var randonumber;
function setup() {
 /* var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
 

*/ //unused setup normally reserved for visual/graphics
  new insertionsorter(numbarray)
 
}


function draw() {

}
function numbarraygenerator (length){
	for(var k = 0; k <length; k++){
		var randonumber = random(0,9);
		array.push(length);
		console.log(randonumber);
		
		
		
		
	}
	
	
}




function insertionsorter (array){
	for(var i = 1; i < array.length; i++){
		for(var j= i; j > 0; j--){
			var temp = array[j];
			array[j] = array[j-1];
			array[j-1] = temp;
			
		}
	}
	
	
	
	
}