var b;
var insertionsorter;
var numbarray = [];
var randonumber;
var temp;
var i;
var j;




var a9 = performance.now(); //measures time since beginning of program for total time
function setup() {
 /* var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
*/ //unused setup normally reserved for visual/graphics
  new numbarraygenerator(50)           
  new insertionsorter(numbarray)           
}

function draw() {

}

function numbarraygenerator (length){ //generates random numbers for the sorting function to sort
	//var a5 = performance.now();
	for(var k = 0; k <length; k++){
		var randonumber = random(1,10);
		numbarray.push(randonumber);
		console.log((randonumber) + k);
		
	}
	//var a7 = performance.now();
}

function insertionsorter (numbarray){ //sorting function
	var a0 = performance.now(); //measures start of time from beginning of sorting algorithm 
	for(var i = 1; i < numbarray.length; i++){
		for(var j = i; j > 0; j--){
		//	if numbarray[j-1] > numbarray[j]{
			if(numbarray[j-1] > numbarray[j]){
				var temp = numbarray[j]; //swaps out two numbers using var temp as temp storage of number
				numbarray[j] = numbarray[j-1];
				numbarray[j-1] = temp;
			}
			
		}
	}
	                                                       
	console.log(numbarray) //console log the sorted results
	var a1 = performance.now(); //logs the end of the sorting routine to measure time
	console.log("total elapsed time of whole program " + (a1 - a9) + " milliseconds");
	//console.log("required time for number generation " + (a7 - a5) + " milliseconds");
	console.log("required time to complete sorting   " + (a1 - a0) + " milliseconds");
}








