//
// Final Project Game V1.0
// Filename: location.js
// 
// Ruth Murphy - CMPT 120 Fall 2016
// Final Project Location file
// Last Update: November 25, 2016

    //
    // List of Global Variables for Game
    //         
         var currentLoc = 0;
         var score = 0;
         var directionErrorCount = 0;
         var limit = 5;
         
    //
    // Command Button handler for input by user.
    //=======================================================================
    // 1) trim off extra spaces
    // 2) make sure all charaters are lower case
    // 3) Evaluate if north, south, east or west was entered or something else
    // 4) if direction was typed in, starting at position 0 on the line, grab first character
    // 5) Then trigger the button function that handles the movement to the locations (reuse functions)
    // NOTE: Script will take user input and validate it is a direction.
    // I have scripted this to allow for entry of more than just a single letter  (N, W, E, S, n, e ,w, s).
    // it will only validate to these single letter directions.
    //  Flexability was added for the user though.
	// 
	// Additional buttons allow for looking at the players inventory and taking items in the game.
	// These commands also allow single letter commands as above.
	//  Allows upper and lower case, but converts to lowercase for the script
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
	// Set up Help Button behavior
	//=========================================
	// Function to show the user what commands are allowed and the Goal of the game.
	//
		 
	function btnHelp() {
	  displayMessage("Valid moves are: N, S, E, W, n, s, e, w." + 
	                "\n" + " or press a directional buttons below"
					+ "\n\n" + "Valid commands are 'Take','Invent' or 'Help'."
					+ "\n\n" + "Press the 'Inventory' button to see the contents of your bag."
					+ "\n" + "Press the 'Take' button to pick up items."
					+ "\n" + "Press the 'Help' button to see this message."
					+ "\n\n" + "Objectives: " + "1) Rescue the Women; " + "2) Get the Key; "
					+ "3) Find the book; " + "4) Keep up your strength;" + "Score 50 or more points");
	            }
    //
    // Initialization function for executing when page (re)loads
    //
    function init() {
	   desc = "You are standing in front of a yellow house" + "\n" + "\n" + "Your Objectives are: "
	   +"\n" + "1) Rescue the Women" + "\n" + "2) Get the Key" + "\n" + "3) Find the book" 
	   +"\n" + "4) Keep up your strength" + "\n" +"5) Score 50 or more points";
        displayMessage(desc);
		// Inital Direction button status is set below 
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
		 this.hasItem=hasItem;
		 this.validMoves;
		 this.visited = false;
		 function toString(){
		   return desc;
		 }
		}
    //
    // Location arrays for use in the game.  Formatted for easier reading
    //
	
   //location 0 array - the front door	 
   var frontDr_loc = new Location();
	frontDr_loc.id=0;
	frontDr_loc.name="Front Door";
	frontDr_loc.desc="You are standing in front of a yellow house";
	frontDr_loc.descAfter= "You are standing in front of a yellow house";
	frontDr_loc.item ="";
	frontDr_loc.hasItem=false;
	frontDr_loc.visted = false;

	//location 1 - the kitchen
    var kitchen_loc = new Location();
    kitchen_loc.id=1;
    kitchen_loc.name= "Kitchen";
    kitchen_loc.desc="You walk through the door and see a kitchen";
    kitchen_loc.descAfter="You walk through the door and see a kitchen";
    kitchen_loc.item="";
    kitchen_loc.hasItem= false;
    kitchen_loc.visted = false;

	//location 2 - Tunnel
    var tunnel_loc = new Location();
    tunnel_loc.id=2;
    tunnel_loc.name ="Tunnel";
    tunnel_loc.desc ="You have entered a very long tunnel";
    tunnel_loc.descAfter= "You have entered a very long tunnel";
    tunnel_loc.item= "";
    tunnel_loc.hasItem=false;
    tunnel_loc.visted = false;

	//location 3 - room with a door
    var roomDoor_loc = new Location();
    roomDoor_loc.id=3;
    roomDoor_loc.name= "Room with a Door"
    roomDoor_loc.desc= "You enter a room with a door.";
    roomDoor_loc.descAfter="You enter a room with a door.";
    roomDoor_loc.item="";
    roomDoor_loc.hasItem=false;
    roomDoor_loc.visted = false;

	//location 4 - Pool
    var pool_loc = new Location();
    pool_loc.id=4;
    pool_loc.name="Pool ";
    pool_loc.desc="You enter a room with a crystal clear pool. In the corner is a women crying.";
    pool_loc.descAfter="You enter a room with a crystal clear pool.";
    pool_loc.item=women;
    pool_loc.hasItem= true;
    pool_loc.visted = false;

	//location 5 - Room with dirt floor
    var dirtRoom_loc = new Location();
    dirtRoom_loc.id=5;
    dirtRoom_loc.name="Dirt Room";
    dirtRoom_loc.desc="You enter a room with a dirt floor and a table. On the table is a rusty old key for some kind of lock.";
    dirtRoom_loc.descAfter="You enter a room with a dirt floor and a table.";
    dirtRoom_loc.item=key;
    dirtRoom_loc.hasItem= true;
    dirtRoom_loc.visted = false;

	//location6 - Dantes Cave
    var dante_loc = new Location();
    dante_loc.id=6;
    dante_loc.name= "Dante's Cave";
    dante_loc.desc="You enter a cave with water dripping from the ceiling.";
    dante_loc.descAfter="You enter a cave with water dripping from the ceiling.";
    dante_loc.item="";
    dante_loc.hasItem=false;
    dante_loc.visted = false;

	//location 7 - Room with green walls and blood splatter
    var greenRoom_loc = new Location();
    greenRoom_loc.id=7;
    greenRoom_loc.name="Room with green walls";
    greenRoom_loc.desc="You enter a green room with what looks like red blood on the walls. You hear a far off sound. It almost sounds like people screaming for help.";
    greenRoom_loc.descAfter="You enter a green room with what looks like red blood on the walls. You hear a far off sound. It almost sounds like people screaming for help.";
    greenRoom_loc.item="";
    greenRoom_loc.hasItem=false;
    greenRoom_loc.visted = false;

	//location 8 - Pentagram Room
   var pentagramRm_loc = new Location();
   pentagramRm_loc.id=8;
   pentagramRm_loc.name="Pentagram Room";
   pentagramRm_loc.desc="You enter a room with a pentagram and a book on the floor. You hear an eerie chanting.  The Book looks like something a priest would use, but the cross is upside down.";
   pentagramRm_loc.descAfter="You enter a room with a pentagram on the floor. The chanting has stopped.";
   pentagramRm_loc.item=book;
   pentagramRm_loc.hasItem= true;
   pentagramRm_loc.visted = false;

	//location 9 - Damp wet room
    var dampRoom_loc = new Location();
    dampRoom_loc.id=9;
    dampRoom_loc.name="Dark Damp Room";
    dampRoom_loc.desc="You enter a cold, damp room.  You smell Peanut Butter. On a shelf in the room you see a sandwich. A Gooey, Yummy Peanut Butter and Jelly Sandwich";
    dampRoom_loc.descAfter="You enter a cold, damp room. ";
    dampRoom_loc.item=peanut;
    dampRoom_loc.hasItem=true;
    dampRoom_loc.visted = false;

	//location 10 - Dead End room
    var deadEnd_loc = new Location();
    deadEnd_loc.id=10;
    deadEnd_loc.name="Dead End";
    deadEnd_loc.desc="You enter a cave that seems to have no exits.";
    deadEnd_loc.descAfter="You enter a cave that seems to have no exits";
    deadEnd_loc.item="";
    deadEnd_loc.hasItem= false;
    deadEnd_loc.visted = false;
	
	// global Location Variables
	var locations = [frontDr_loc, kitchen_loc, tunnel_loc, roomDoor_loc, pool_loc, dirtRoom_loc, dante_loc, greenRoom_loc, 
                 pentagramRm_loc, dampRoom_loc, deadEnd_loc];
    //							
    // Item prototype to allow ease of adding additional items and being able to call properties of the item easier.
    //
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
		
    // Item array of current items for game.
    var women = new Item (4, " A Crying Women", " There is a women crying in the corner", false,4);
    var key = new Item(5, " Old Rusty Key", "Rusty Old Key for some lock", false,5);
    var book = new Item(8, " Prayer Book", "The Book looks like something a priest would use, but the cross is upside down.",false,8);
    var peanut = new Item(9, " PB & J Sandwich",  "A Gooey, Yummy Peanut Butter and Jelly Sandwich", false,9);

    //single array to ease calling items by name.
    var items = new Array ();
        items[4] = women;
        items[5] = key;
        items[8] = book;
        items[9] = peanut

    // This is an empty array so we can fill it for the player.  
    // They will be able to tell what they have picked up during game play.
    // When needed, we can add or remove items easier.
    var inventory = new Array();
    //
    // Function for the inventory button to display the current inventory to the user. 
    // Also called when user types in the inventory commands that are allowed.
    //
    function btnInv(){
	    var msg = "Inventory: " + inventory;
        displayMessage(msg);
      }
    //
    // Array for the movement of the player.  This shows all of the valid moves allowed from each location.
	// This is a location array based on direction array (Location to indv direction)
    //		
    var validMoves = [
                        // N S E W 
       /*Location[0] */   [1,0,0,0],
       /*Location[1] */   [1,0,5,3],
       /*Location[2] */   [6,4,3,10],
       /*Location[3] */   [3,5,1,2],
       /*Location[4] */	  [2,9,7,5],
       /*Location[5] */	  [3,8,4,1],
       /*Location[6] */   [6,2,6,6],
       /*Location[7] */	  [7,7,7,4],
       /*Location[8] */	  [5,8,8,8],
       /*Location[9] */	  [4,9,9,9],
       /*Location[10]*/	  [10,10,2,10]
	        	       ];

     // Begin the coding for the use of the buttons in the game.
     // Evaluates what the current valid moves are depending on button (or command) pressed/issued on the screen.
     // Once the location is evaluated then the look function is executed
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
	
    // Variable & Array for the navigation buttons.
	// This will allow the buttons to be disabled as player moves through the game
    var navBtns = new Array ("btnGo_N","btnGo_S","btnGo_E","btnGo_W" );

                       
	//This is the array for the navigation buttons to use  - on and off as player travels.
	var navButtons_switch = new Array(/*    N   S   E   W */
                                    /*0*/  [0,  1,  1,  1],
                                    /*1*/  [1,  0,  0,  0],
                                    /*2*/  [0,  0,  0,  0],
                                    /*3*/  [1,  0,  0,  0],
                                    /*4*/  [0,  0,  0,  0],
                                    /*5*/  [0,  0,  0,  0],
                                    /*6*/  [1,  0,  1,  1],
                                    /*7*/  [1,  1,  1,  0],
                                    /*8*/  [0,  1,  1,  1],
                                    /*9*/  [0,  1,  1,  1],
                                    /*10*/ [1,  1,  0,  1]
                                         );

       // Set up of locations that will be displayed for the user.
       //=========================================================
       // Function look is the coordinator of when a location will be called.
	   // it will display the location text and the players current score.
	   // Scoring is done based on the players having been in the room already or not.
	   //   - player gets 5 points each time they visit a room for the first time.
       // Used with button functions/arrays and message functions to display current location desription to user.
	   // Buttons are also disabled via this function.
       //
    function look() {
        var loc = locations[currentLoc];
		var desc = loc.name + ": " + loc.desc + "\n";
         if (loc.visited === false){
			score=score + 5;
			loc.visited=true;
			 }
				for (var i = 0; i < navBtns.length; i++) {
	              var btnDisable = 0;
	                btnDisable = navButtons_switch[currentLoc][i];
	              if (btnDisable === 1) {
	               document.getElementById(navBtns[i]).disabled = true;
	             } else {
	               document.getElementById(navBtns[i]).disabled = false;
	             }
	            }
			displayMessage(desc + "Your Score is: " + score +"\n");
		}
		 
       
    // Function for the "Take" button
    // Puts items into inventory, notifies the user that the item has been taken and updates the location description.
    // The additional text related to the item is removed and description is updated for the player when they return to the room.
		
    function btnTake(item) {
	   var loc = locations[currentLoc];
	   if (loc.hasItem === false){
	   displayMessage("There is nothing to take here");
	   } else if (loc.hasItem === true){
	     inventory.push(items[currentLoc].name);
		 items[currentLoc].isTaken = true;
		 loc.hasItem = false;
		 loc.desc=loc.descAfter
		 displayMessage(items[currentLoc].name + " "+ "Taken.");
	   	}
	}			   
				
	//
    // Function to check an error in direction.  Ie: a wall has been reached
    // ========================================================================
    // The first time a user goes to a location that is not valid, they get 
    // the message that they should try another direction.  After multiple times (variable "limit") with no valid
    // direction, a new message is shown to rethink what they are doing.
    // NOTE:  The logic in this game with the buttons now prevents this set of code from being executed.
	// Leaving code as a precaution and in case browser updates allow breaking out of button functions.
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
    //=================================================================================================
	// Includes the value of the score.
    //
    function displayMessage(msg) {
        var target = document.getElementById("taMain");
        target.value = msg + "\n\n\n" + target.value ;  
	} 