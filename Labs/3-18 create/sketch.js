// current people in space JSON http://api.open-notify.org/astros.json
                                       
var jsonfilevar;
var data;
var StateGovernors;
var jsonarrayobject;
var jsondataretrive;
var republicancount; //number of Republican governors
var democratcount; //number of Democrat governors
var i;



function preload(){
	data = loadJSON("usgovernors.json");
	//StateGovernors = loadJSON("usgovernors.json");
}




function setup() {
    var cnv = createCanvas(800, 800);
    cnv.position((windowWidth-width)/2, 30);
    background(200);




	console.log(data);
	new GeneralJSONArrayLister();
//	let jsondataretrive = ( );
}

function BarGraph(sequencenumber, valuenumber){
	rect((150),50,xvaluenumber,50)
}

function GeneralJSONArrayLister(){
	var republicancount = 0; 
	var democratcount = 0; 
	
	for(var i = 1; i < 51; i++){   //for loop increments 50x, one for each state
		if (data.StateGovernors[i].party = "republican") {
			republicancount++;
			//console.log(republicancount);
		} else {
		
		democratcount++;
		//console.log(democratcount);
		}
		
	
	

	}
	console.log(republicancount)
	console.log(democratcount);


}
