//
// Final Project Game V1.0
// Filename: navigate.js
// 
// Ruth Murphy - CMPT 120 Fall 2016
// Final Project Navigation focused file
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
    // Array for the movement of the player.  This shows all of the valid moves allowed from each location.
	// This is a location array based on direction array (Location to indv direction).
	// numbers in the array are the location numbers that are possible.  If the same number is listed as the location #
	// then movement is not allowed.
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
	// Allows the buttons to be disabled.
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
	//   - Bonus 5 points for returning back to the starting location.
    // Used with button functions/arrays and message functions to display current location desription to user.
	// Buttons are also disabled via this function.
    //
    function look() {
        var loc = locations[currentLoc];
		var desc = loc.name + ": " + loc.desc + "\n";
		// game play changes depending on if an item has been taken or not
          if (book.isTaken===false) {
				displayMessage("You hear sinister whispering in your ear and you feel dizzy" );
			} else if ((loc.id===5) && (book.isTaken===true)){
				displayMessage ("The whispering in your ear has stopped. " + "\n" + "You look down and notice you have a white glow around you.")
			  } else {
				displayMessage("You are glowing");
			    } 
		  if ((peanut.isTaken===false) && (loc.id >=2)){
				  displayMessage("You are getting hungry")
			  } 
		 // check the location to see if it has been visted for scoring
		  if (loc.visited === false){
			score=score + 5;
			loc.visited=true;
		      }
			  if ((score==55) && (inventory.length==4)){
			   alert("You made it!." + "\n" +  "You recevied all the points in Murphy's World!" + "\n" + "All Items have been picked up.");
		   }
		// loop to disable n,s,e,w buttons when direction is not allowed
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
		