var b;
var insertionsorter;
var numbarray = [];
function setup() {
 /* var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
 

*/ //unused setup normally reserved for visual/graphics
  var b = new insertionsorter(numbarray)
}


function draw() {

}


function insertionsorter (array){
	for(var i = 1; i < arr.length; i++){
		for(var j= i; j > 0; j--){
			var temp = arr[j];
			arr[j] = arr[j-1];
			arr[j-1] = temp;
			
		}
	}
	
	
	
	
}