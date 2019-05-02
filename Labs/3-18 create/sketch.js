var javafilevar;
var StateGovernors;
//var jsondataretrive;
var republicancount; //number of Republican governors
var democratcount; //number of Democrat governors
var i;



//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects 
//reference for javascript objects


function preload(){
	javafilevar = loadJSON("usgovernors.js");
	//StateGovernors = loadJSON("usgovernors.json");


}

function setup() {
  //GRAPHICS UNNECCESARY
  //  var cnv = createCanvas(800, 800);
  //  cnv.position((windowWidth-width)/2, 30);
  //  background(200);
	console.log(javafilevar);
	new GeneralJSONArrayLister();
//	let jsondataretrive = ( );
}
//UNUSED BARGRAPH FUNCTION
//function BarGraph(sequencenumber, valuenumber){
//	rect((150),50,xvaluenumber,50);
//}

function GeneralJSONArrayLister(){
	var republicancount = 0;
	var democratcount = 0;

	for(var i = 0; i < 50; i++){   //for loop increments 50x, one for each state
		if (javafilevar.StateGovernors[i].party = "republican") {
			republicancount++;
			//console.log(republicancount);
		}
		//original else won't work for if they are independent governors (none currently) they will be counted as democrats which is innacurate
		//else {

		//democratcount++;
		//console.log(democratcount);
		//}
	}
	console.log(republicancount)
	console.log(democratcount);


}
