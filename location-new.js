//project 5 adding objects and arrays
// location-new.js 
// Ruth Murphy
// prep for update to loction.js

    //
    // List of Global Variables for Game
    //         
         var currentLoc = 0;
         var score = 0;
         var directionErrorCount = 0;
         var limit = 5;
         var beenHere0 = false;
         var beenHere1 = false;
         var beenHere2 = false;
         var beenHere3 = false;
         var beenHere4 = false;
	     var beenHere5 = false;
         var beenHere6 = false;
		 var beenHere7 = false;
		 var beenHere8 = false;
         var beenHere9 = false;
		 var beenHere10 = false;
		 var keyTaken = false;
		 var womenTaken = false;
		 var peanutTaken = false;
		 
		 	 
                  
         
         //
         // Command Button handler for input by user.
         //=======================================================================
         // 1) trim off extra spaces
         // 2) make sure all charaters are lower case
         // 3) Evaluate if north, south, east or west was entered or something else
         // 4) if direction was typed in, starting at position 0 on the line, grab first character
         // 5) Then trigger the button function that handles the movement to the locations (reuse functions)
         // NOTE: Script will take user input and validate it is a direction.
         // I have scripted this to allow for entry of more than just a sinlge letter  (N, W, E, S, n, e ,w, s).
         // it will only validate to these single letter directions.
         // Customer indicated a need for only N, S, E, W, n, s, e, w at this time
         //  Flexability was added for the user though.
         //
         function buttonGo() {
             var command = document.getElementById("txtCommand").value;
                 command = command.trim();
                 command = command.toLowerCase();
               if (command == "north" || command == "west" || command == "south" || command == "east" 
			        || command == "help" || command == "take" || command == "invent") {
                       command = command.substr(0,1);
                 }
                    if (command == "n")  {
                      btnGo_North_click();
                  }  else if (command == "s") {
                         btnGo_South_click();
                    }  else if (command == "w") {
                          btnGo_West_click();
                      }  else if (command == "e") {
                            btnGo_East_click();
						}   else if (command == "h") {
						      btnHelp();
						 }   else if (command == "i") {
						       btnInv();
						  }    else if (command == "t") {
							     btnTake();
					       }    else displayMessage("Please try again." +"\n" + "Type 'help' for valid commands." 
                                     + "\n" + " or press a button below");
		                }
//
		 // Set up Help and inventory Button actions
		 //=========================================
		 // functions to execute when the help and inventory buttons are pressed
		 //
		 
		 function btnHelp() {
		 displayMessage("Valid moves are: N, S, E, W, n, s, e, w." + 
		                "\n" + " or press a directional buttons below"
						+ "\n\n" + "Valid commands are 'Take','Invent' or 'Help'."
						+ "\n\n" + "Press the 'Inventory' button to see the contents of your bag."
						+ "\n" + "Press the 'Take' button to pick up items."
						+ "\n" + "Press the 'Help' button to see this message.");
		 }
//
         // Initialization function for executing whne page (re)loads
         //
     function init() {
	   desc = "You are standing in front of a yellow house";
       displayMessage(desc);
	   document.getElementById("btnGo_S").disabled = true;
	   document.getElementById("btnGo_W").disabled = true;
	   document.getElementById("btnGo_E").disabled = true;
	   document.getElementById("btnGo_N").disabled = false;
       }

//Location Prototype
   function Location(id, name, desc, descAfter, item,hasItem){
         this.id=id;
		 this.name=name;
		 this.desc=desc;
		 this.descAfter=descAfter;
		 this.item=item;
		 this.hasItem;
		 this.validMoves;
		 this.visited = false;
		 function toString(){
		   return desc;
		 }
		//return ("id:" + this.id + "Location: " + this.name)};
		}
// Location instances
//location 0		 
var frontDr_loc = new Location();
frontDr_loc.id=0;
frontDr_loc.name="Front Door";
frontDr_loc.desc="You are standing in front of a yellow house";
frontDr_loc.descAfter= "You are standing in front of a yellow house";
frontDr_loc.item ="";
frontDr_loc.hasItem=false;

//location 1
var kitchen_loc = new Location();
kitchen_loc.id=1;
kitchen_loc.name= "Kitchen";
kitchen_loc.desc="You walk through the door and see a kitchen";
kitchen_loc.descAfter="You walk through the door and see a kitchen";
kitchen_loc.item="";
kitchen_loc.hasItem= false;

//location 2
var tunnel_loc = new Location();
tunnel_loc.id=2;
tunnel_loc.name ="Tunnel";
tunnel_loc.desc ="You have entered a very long tunnel";
tunnel_loc.descAfter= "You have entered a very long tunnel";
tunnel_loc.item= "";
tunnel_loc.hasItem=false;

//location 3
var roomDoor_loc = new Location();
roomDoor_loc.id=3;
roomDoor_loc.name= "Room with a Door"
roomDoor_loc.desc= "You enter a room with a door.";
roomDoor_loc.descAfter="You enter a room with a door.";
roomDoor_loc.item="";
roomDoor_loc.hasItem=false;

//location 4
var pool_loc = new Location();
pool_loc.id=4;
pool_loc.name=" Pool ";
pool_loc.desc="You enter a room with a crystal clear pool. In the corner is a women crying.";
pool_loc.descAfter="You enter a room with a crystal clear pool.";
pool_loc.item=women;
pool_loc.hasItem= true;

//location 5
var dirtRoom_loc = new Location();
dirtRoom_loc.id=5;
dirtRoom_loc.name="Dirt Room";
dirtRoom_loc.desc="You enter a room with a dirt floor and a table. On the table is an odd key.";
dirtRoom_loc.descAfter="You enter a room with a dirt floor and a table.";
dirtRoom_loc.item=key;
dirtRoom_loc.hasItem= true;

//location6
var dante_loc = new Location();
dante_loc.id=6;
dante_loc.name= "Dante's Cave";
dante_loc.desc="You enter a cave with water dripping from the ceiling.";
dante_loc.descAfter="You enter a cave with water dripping from the ceiling.";
dante_loc.item="";
dante_loc.hasItem=false;

//location 7
var greenRoom_loc = new Location();
greenRoom_loc.id=7;
greenRoom_loc.name="Room with green walls";
 greenRoom_loc.desc="You enter a green room with what looks like red blood on the walls. You hear a far off sound. It almost sounds like people screaming for help.";
 greenRoom_loc.descAfter="You enter a green room with what looks like red blood on the walls. You hear a far off sound. It almost sounds like people screaming for help.";
greenRoom_loc.item="";
greenRoom_loc.hasItem=false;

//location 8
var pentagramRm_loc = new Location();
pentagramRm_loc.id=8;
pentagramRm_loc.name="Pentagram Room";
pentagramRm_loc.desc="You enter a room with a pentagram and a book on the floor. You hear an eerie chanting.";
pentagramRm_loc.descAfter="You enter a room with a pentagram on the floor. The chanting has stopped.";
pentagramRm_loc.item=book;
pentagramRm_loc.hasItem= true;

//location 9
var dampRoom_loc = new Location();
dampRoom_loc.id=9;
dampRoom_loc.name="Dark Damp Room";
dampRoom_loc.desc="You enter a cold, damp room.  You smell Peanut Butter. On a shelf in the room you find a sandwich.";
dampRoom_loc.descAfter="You enter a cold, damp room.";
dampRoom_loc.item=peanut;
dampRoom_loc.hasItem=true;

//location 10
var deadEnd_loc = new Location();
deadEnd_loc.id=10;
deadEnd_loc.name="Dead End";
deadEnd_loc.desc="You enter a cave that seems to have no exits.";
deadEnd_loc.descAfter="You enter a cave that seems to have no exits";
deadEnd_loc.item="";
deadEnd_loc.hasItem= false;

var locations = [frontDr_loc, kitchen_loc, tunnel_loc, roomDoor_loc, pool_loc, dirtRoom_loc, dante_loc, greenRoom_loc, 
                 pentagramRm_loc, dampRoom_loc, deadEnd_loc];
							
// item prototype

function Item(id, name, desc,isTaken, origLoc) {
         this.id=id;
		 this.name=name;
		 this.desc=desc;
		 this.isTaken = isTaken;
		 this.origLoc;
		 function toString(){
		   return desc;
		 }
      }
		
// item instances
var women = new Item (4, "Women Crying", " There is a women crying in the corner", false,4);
var key = new Item(5, "Old Key", "Rusty Old Key for some lock", false,5);
var book = new Item(8, "Prayer Book", "The Book looks like something a priest would use, but the cross is upside down.",false,8);
var peanut = new Item(9, "Sandwich",  "A Gooey, Yummy Peanut Butter and Jelly Sandwich", false,9);


var items = new Array ();
items[4] = women;
items[5] = key;
items[8] = book;
items[9] = peanut

					
var inventory = new Array();

//var inventory = [null,null,null,null,null,null,null,null,null,null,null];

//function btn_displayInventory() {
  function btnInv(){
	  var msg = "Inventory: " + inventory;
      displayMessage(msg);
  }
/*           function btnInv(){
			 var message = "Your Inventory List: \n";
			 for (var i = 0; i < inventory.length; i++){
			// if (inventory[i] != null) {
			    message = message + inventory[i].name + ": " + inventory[i].desc + "\n");
				}
			}
			  displayMessage(message);
	}
		*/	
		

//var navBtns = ["btnGo_N","btnGo_S","btnGo_E","btnGo_W" ];
				
var validMoves = [
                   // N S E W 
  /*Location[0] */   [1,0,0,0],
   /*Location[1] */	 [1,0,5,3],
  /*Location[2] */   [6,4,3,10],
 /*Location[3] */	 [3,5,1,2],
  /*Location[4] */	 [2,9,7,5],
  /*Location[5] */	 [3,8,4,1],
  /*Location[6] */   [6,2,6,6],
  /*Location[7] */	 [7,7,7,4],
  /*Location[8] */	 [5,8,8,8],
  /*Location[9] */	 [4,9,9,9],
  /*Location[10]*/	 [10,10,2,10]
	        	];

   function btnGo_North_click() {
         currentLoc = validMoves[currentLoc][0];
    	 look();
		 }

   function btnGo_South_click() {
        currentLoc = validMoves[currentLoc][1];
		 look();
         } 
	
	function btnGo_East_click() {
        currentLoc = validMoves[currentLoc][2];
		 look();
	      }
    		
	function btnGo_West_click() {
        currentLoc = validMoves[currentLoc][3];
		 look();
	     }		
	


       // Set up of locations that will be displayed for the user.
       //=========================================================
       // function look is the coordinator of when a location function will be called.
       // Used with button function and message functions to display the correct location to the user.
	   // Also will disable buttons that can not be used
       //
         function look() {
            var loc = locations[currentLoc];
			var desc = loc.name + ": " + loc.desc + "\n";
            if (loc.visited === false){
				score=score + 5;
				loc.visited=true;
			}
			   document.getElementById("btnGo_S").disabled = false;
			   document.getElementById("btnGo_W").disabled = false;
			   document.getElementById("btnGo_E").disabled = false;
			   document.getElementById("btnGo_N").disabled = false;
			
			if (loc.id === validMoves[currentLoc[0]]){
				document.getElementById("btnGo_N").disabled = true;
			} 
			if (loc.id === validMoves[currentLoc[1]]){
				document.getElementById("btnGo_S").disabled = true;
			}
			if (loc.id === validMoves[currentLoc[2]]){
				document.getElementById("btnGo_E").disabled = true;
			}
			if (loc.id === validMoves[currentLoc[3]]){
				document.getElementById("btnGo_W").disabled = true;
			}
			displayMessage(desc + "Your Score is: " + score +"\n");
		 }
		 
       
// function for the take button
// puts items into inventory, notify user and updates the location description
	
	//function pickUpItem(item) {
    //inventory.push(items[currentLocation].name);
    //updateDisplay("Taken " + items[currentLocation].name + ".");
    //items[currentLocation].isTaken = true;


	
    function btnTake(item) {
	   inventory.push(items[currentLoc].name);
		displayMessage(items[currentLoc].name + "Taken.");
        items[currentLoc].isTaken =true;
	}
	/* var loc = locations[currentLoc];
			//var item = items[currentLoc];
			 if (loc.item == null){
			 //if (item.isTaken === true || loc.item === false){
			    displayMessage("There is nothing to take here");
				} 
				else {
					var item = loc.item;
					inventory[item.id]=item;
					loc.item = null;
					loc.desc = loc.descAfter;
					displayMessage(item.name + "added to your inventory:")
				}
		/*		else if ((loc.id === 4) && (item[4].isTaken === false )) {
                   displayMessage ("The Women agrees to come with you.");
				   displayMessage(item[4].name + "Added to your inventory:" + " ");
			       inventory.push(item[4].name);
				   item[4].isTaken=true;
				   loc[4].desc=loc[4].descAfter;
				} 
				   else if ((loc.id === 5) && (item[5].isTaken === false )) {
				       displayMessage(" You put the key in your pocket.");
					   displayMessage(item[5].name + "Added to your inventory:" + " ");
					   inventory.push(item[5].name);
					   item[5].isTaken=true;
				       loc[5].desc=loc[5].descAfter;
				} 
					 else if ((loc.id === 9) && (item[9].isTaken === false )) {
                      displayMessage("You pick up the Peanut Butter Sandwich.");
					  displayMessage(item[9].name + "Added to your inventory:" +  " ");
                      Inventory.push(item[9].name);
					  item[9].isTaken=true;
					  loc[9].desc=loc[9].descAfter;
				}	  
					  else if ((loc.id === 8) && (item[8].isTaken === false )) {
                      displayMessage("You pick up " + item[8].name );
					  displayMessage(item[8].name + "Added to your inventory:" + " ");
                      Inventory.push(item[8].name);
					  item[8].isTaken=true;
					  loc[8].desc=loc[8].descAfter;
              } 
	       } */
				   
				
		  //
          // Function to check an error in direction.  Ie: a wall has been reached
          // ========================================================================
          // The first time a user goes to a location that is not valid (location "a" to "b" not included), they get 
          // the message that they should try another direction.  After multiple times (variable "limit") with no valid
          // direction, a new message is shown to rethink what they are doing.
          // reset function
          //
           function directionError() {
            directionErrorCount = directionErrorCount + 1;
            if (directionErrorCount < limit) {
               displayMessage("You might want to try another direction.");
            } else {
               displayMessage("Umm, Where are you going?  Pick another direction.");
            }            
         }

         //
         // Function for displying the message correctly (location and score) as we iterate through the game
         // also include the value of the score.
         //
          function displayMessage(msg) {
            var target = document.getElementById("taMain");
            target.value = msg + "\n\n\n" + target.value ;  } 