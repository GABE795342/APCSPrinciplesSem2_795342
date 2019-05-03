var javafilevar;
var StateGovernors = [];
//var jsondataretrive;
var republicancount; //number of Republican governors
var democratcount; //number of Democrat governors
var i;
var gubernatorialparty;

//	<script src="usgovernors.js" type="text/js"></script> // for seperated files if desired
var	StateGovernors= [
    {
        state_name: "Alabama",
        party: "republican",
    },
    {
        state_name: "Alaska",
        party: "republican",
    },
    {
        state_name: "Arizona",
        party: "republican",
    },
    {
        state_name: "Arkansas",
        party: "republican",
    },
	{
        state_name: "California",
        party: "democrat",
    },
    {
        state_name: "Connecticut",
        party: "democrat",
    },
    {
        state_name: "Delaware",
        party: "democrat",
    },
    {
        state_name: "Colorado",
        party: "democrat",
    },
    {
        state_name: "Florida",
        party: "republican",
    },
    {
        state_name: "Hawaii",
        party: "democrat",
    },
    {
        state_name: "Georgia",
        party: "republican",
    },
    {
        state_name: "Idaho",
        party: "republican",
    },
    {
        state_name: "Illinois",
        party: "democrat",
    },
    {
        state_name: "Indiana",
        party: "republican",
    },
    {
        state_name: "Iowa",
        party: "republican",
    },
    {
        state_name: "Kansas",
        party: "democrat",
    },
    {
        state_name: "Kentucky",
        party: "republican",
    },
    {
        state_name: "Louisiana",
        party: "democrat",
    },
    {
        state_name: "Maine",
        party: "republican",
    },
    {
        state_name: "Maryland",
        party: "republican",
    },
    {
        state_name: "Massachusetts",
        party: "republican",
    },
    {
        state_name: "Michigan",
        party: "democrat",
    },
    {
        state_name: "Mississippi",
        party: "republican",
    },
    {
        state_name: "Minnesota",
        party: "democrat",
    },
    {
        state_name: "Missouri",
        party: "republican",
    },
    {
        state_name: "Montana",
        party: "democrat",
    },
    {
        state_name: "Nebraska",
        party: "republican",
    },
    {
        state_name: "Nevada",
        party: "democrat",
    },
    {
        state_name: "New Hampshire",
        party: "republican",
    },
    {
        state_name: "New Jersey",
        party: "democrat",
    },
    {
        state_name: "New Mexico",
        party: "democrat",
    },
    {
        state_name: "New York",
        party: "democrat",
    },
    {
        state_name: "North Carolina",
        party: "democrat",
    },
    {
        state_name: "North Dakota",
        party: "republican",
    },
    {
        state_name: "Ohio",
        party: "republican",
    },
    {
        state_name: "Oklahoma",
        party: "republican",
    },
    {
        state_name: "Oregon",
        party: "democrat",
    },
    {
        state_name: "Pennsylvania",
        party: "democrat",
    },
    {
        state_name: "Rhode Island",
        party: "democrat",
    },
    {
        state_name: "South Carolina",
        party: "republican",
    },
    {
        state_name: "South Dakota",
        party: "republican",
    },
    {
        state_name: "Tennessee",
        party: "republican",
    },
    {
        state_name: "Texas",
        party: "republican",
    },
    {
        state_name: "Utah",
        party: "republican",
    },
    {
        state_name: "Vermont",
        party: "republican",
    },
    {
        state_name: "Virginia",
        party: "democrat",
    },
    {
        state_name: "Washington",
        party: "democrat",
    },
    {
        state_name: "West Virginia",
        party: "democrat",
    },
    {
        state_name: "Wisconsin",
        party: "democrat",
    },
    {
        state_name: "Wyoming",
        party: "republican",
    }
	]

//function preload(){
//	jsonfilevar = loadJSON("usgovernors.js");
//	//StateGovernors = loadJSON("usgovernors.json");
//}

function setup() {
  //GRAPHICS UNNECCESARY
  //  var cnv = createCanvas(800, 800);
  //  cnv.position((windowWidth-width)/2, 30);
  //  background(200);
  console.log("State Gubernatorial Office DEMOCRAT V. REPUBLICAN Counting Program");
  console.log("Console should display the array followed by Alaska Object");
  console.log(StateGovernors);
  console.log(StateGovernors[1]);
  new GeneralArrayLister();
//	let jsondataretrive = ( );


var republicancount = 0;
var democratcount = 0;
}


//UNUSED BARGRAPH FUNCTION
//function BarGraph(sequencenumber, valuenumber){
	
//	rect((150),50,xvaluenumber,50);
//}


function GeneralArrayLister(){
	var republicancount = 0;
	var democratcount = 0;
	console.log("This line of text should appear once")
	for(var i = 0; i < StateGovernors.length; i++){   //for loop increments 50x, one for each state
	//console.log("This line of text should appear x50")
	console.log(StateGovernors[i]);
	let gubernatorialparty = StateGovernors[i].party;
		//if (StateGovernors[i].party = "democrat") {
		//	democratcount++;
		//} else {
		//	console.log("dem");
		//}	
	console.log(gubernatorialparty);	
			//console.log(republicancount);		
			if (gubernatorialparty !== "republican"){
				console.log("Not Republican/ democratcount incremented +1")
				democratcount = democratcount + 1;
			}
			
			
			
		//original else won't work for if they are independent governors (none currently) they will be counted as democrats which is innacurate
		//else {
		//democratcount++;
		//console.log(democratcount);
		//}
	console.log("Since only Democratic Governors counted and subtracted from 50 for number of Republican Governors, the console logs before the final result are skewed and represent the programs methods")
	console.log("Current Gubernatorial political alignment:");
	console.log(democratcount + " Democratic Governors");
	republicancount = 50 - democratcount;
	console.log(republicancount + " Republican Governors");
	}
	



}





















