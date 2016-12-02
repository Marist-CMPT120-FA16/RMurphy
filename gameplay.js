//
// Final Project Game V1.0
// Filename: gameplay.js
// 
// Ruth Murphy - CMPT 120 Fall 2016
// Final Project general game play focused file
// Control HTML file is "Final Project-Murphy.html"
// Last Update: November 28, 2016

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
					+ "3) Find the book; " + "4) Keep up your strength;" + "Score at least 50 points");
	            }
    //
    // Initialization function for executing when page (re)loads
    //
    function init() {
	   desc = "You are standing in front of a yellow house" + "\n" + "\n" + "Your Objectives are: "
	   +"\n" + "1) Rescue the Women" + "\n" + "2) Get the Key" + "\n" + "3) Find the book" 
	   +"\n" + "4) Keep up your strength" + "\n" +"5) Score at least 50";
        displayMessage(desc);
		// Inital Direction button status is set below 
	     document.getElementById("btnGo_S").disabled = true;
	     document.getElementById("btnGo_W").disabled = true;
	     document.getElementById("btnGo_E").disabled = true;
	     document.getElementById("btnGo_N").disabled = false;
       }
       
    // This is an empty array so we can fill it for the player with the items they take during the game.  
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

	// Function for the "Take" button
    // Puts items into inventory, notifies the user that the item has been taken 
	// and updates the location description shown to player.
    // The additional text related to the item is removed.
	//
	// evaluates the location, pushes item to inventory array,
    // updates flag for the item to indicate it has been taken.
		
    function btnTake(item) {
	   var loc = locations[currentLoc];
	   if (loc.hasItem === false){
	   displayMessage("There is nothing to take here");
	   } else if (loc.hasItem === true){
	     inventory.push(items[currentLoc].name);
		 items[currentLoc].isTaken = true;
		 loc.hasItem = false;
		 loc.desc=loc.descAfter
		 displayMessage(items[currentLoc].name + " Taken: " + "\n" + items[currentLoc].desc );
	   	}
	}
	
	function displayMessage(msg) {
		var target = document.getElementById("taMain");
        target.value = msg + "\n\n\n" + target.value ;  
	} 