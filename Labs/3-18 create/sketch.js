// current people in space JSON http://api.open-notify.org/astros.json
                                       
var jsonfilevar;
var jsonarrayobject;
var jsondataretrive;

//mouse vars only for certain code--- remove if unused
var mousexvalue;
var mouseyvalue;



//let preloadobject = []

function preload(){
	jsonfilevar = loadJSON("usgovernors.json");

}




function setup() {
    var cnv = createCanvas(800, 800);
    cnv.position((windowWidth-width)/2, 30);
    background(200);




	console.log(jsonfilevar);
	new GeneralJSONArrayLister();
//	let jsondataretrive = ( );
}

function draw (){
let mousexvalue = mouseX;
let mouseyvalue =mouseY;
console.log("xvalue",mousexvalue,"yvalue",mouseyvalue);
	//console.log(jsonfilevar);
	stroke(0);
	strokeWeight(5);
	line(145, 50, 145, 750);
	line(145, 750, 745, 750);
	stroke(255);
	strokeWeight(3);
	line(145, 50, 145, 750);
	line(145, 750, 750, 750);
	rect(150,50,340,50);
	
	//text key for function
	
	
}

//implement bargraph function
//bargraph highlight function with mouseover (within constraints)


//governor json values???
//party, decade of birth, year sworn in, religion, 

                        
                     
                                            
/* Anchorage Alaska Dog JSON



//dog name popularity function/chart
//bar graph function
//y axis = number of dogs
//x axis = descending number from highest/most popular name

//likely too difficult to involve 4089 different bars on graph, data will form exponential function-shaped
//not to be done 
*/





function GeneralJSONArrayLister(){
	for(var i = 0; i < 50; i++){//for loop increments 50x, one for each state








	}




}
