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

	console.log(jsonfilevar);
	new GeneralJSONArrayLister();
//	let jsondataretrive = ( );
}

function draw (){
let mousexvalue = mouseX;
let mouseyvalue =mouseY;
console.log("xvalue",mousexvalue,"yvalue",mouseyvalue);

}

//implement bargraph function
//bargraph highlight function with mouseover (within constraints)


//governor json values???
//party, decade of birth, year sworn in, religion, 





/* Ancorage Dog JSON



//dog name popularity function/chart
//bar graph function
//y axis = number of dogs
//x axis = descending number from highest/most popular name

//likely too difficult to involve 4089 different bars on graph, data will form exponential function-shaped
//not to be done 
*/





function GeneralJSONArrayLister(){
	for(var i = 0; i < 50; i++){








	}




}
