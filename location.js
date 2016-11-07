// Project 4 November 1, 2016
// Ruth Murphy CMPT 120
// Location.js file to accompany Game called "Murphy's World"

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
         
         
		 // prepare for list of items that can be "taken"
		// var goodies = new Array();
		 //goodies[0] = goodiesKey;
		 //goodies[1] = goodiesWoman;
		 //goodies[2] = goodiesPeanut;
		 
		 // Prepare a place to store the inventory for recall later  - not currently used
		 //var inventory = new Array();
		 		 
		 // *** FOR LATER USE ***
		 // what to do when user clicks inventory button
		 // This will pront out the current array that has the inventory
		 //
		 		 
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
                                     + "\n" + " or press a button below")
                   
                 /*  Use for testing to ensure txt is processed correctly uncomment next line for to testing
                     displayMessage(command);   */
            }

         //
         // Functions for direction buttons to handle the click action by user
         //================================================================================
         // ie: First Action pressing North will bring the user/ player to location 1 from 0
         // when location is at 4, player moved to location 2.  
         // Error message is put in text box if no valid location is picked for that button
         //  
         // 10-14-16  - to hit all 6 locations from 0; solution is N,W,S,W,N,N == 0,1,3,5,4,2,6)
         // bonus point if they return right back to where they started.
         //       
         function btnGo_North_click() {
            if (currentLoc === 0) {
               currentLoc = 1;
               look();               
            } else {
              if (currentLoc === 4) {
                 currentLoc = 2;
                 look();  
               } else {
                  if (currentLoc === 5){
                   currentLoc = 3;
                   look();  
                 } else {
                   if (currentLoc === 2){
                    currentLoc = 6;
                    look();
                  } else {
                   if (currentLoc === 8){
                    currentLoc = 5;
                    look();					
                   } else {
                   if (currentLoc === 9){
                    currentLoc = 4;
                    look();					
                  } else {
                    directionError(); 
                  }
				 }
				}
               }
              }
             }            
         }

         function btnGo_South_click() {
            if (currentLoc === 1) {
               currentLoc = 0;
               look();
            } else {
              if (currentLoc === 2) {
                 currentLoc = 4;
                 look();
              } else {
               if (currentLoc === 3){
                 currentLoc = 5;
                 look();
               } else {
                if (currentLoc === 6) {
                 currentLoc = 2;
                 look();
				 } else {
                  if (currentLoc === 4) {
                   currentLoc = 9;
                   look();
				  } else {
                   if (currentLoc === 5) {
                     currentLoc = 8;
                     look();				 
                   } else {
                 directionError();               
                  }
				 }
				}
               } 
              }
             }
         }

         function btnGo_East_click() {
            if (currentLoc === 2) {
               currentLoc = 3;
               look();
            } else {
              if (currentLoc === 5) {
                 currentLoc = 4;
                 look();
               } else {
                   if (currentLoc === 3) {
                      currentLoc = 1;
                      look();
                 } else {
                    if (currentLoc === 1) {
                       currentLoc = 5;
                       look();
				   } else {
                      if (currentLoc === 5) {
                       currentLoc = 7;
                       look();
					} else {
                      if (currentLoc === 10) {
                       currentLoc = 2;
                       look();
					 } else {
                      if (currentLoc === 4) {
                       currentLoc = 7;
                       look();
					} else {
                      directionError(); 
                  }
				 }
			    }
               }
			  }
             }
            }
         }

         function btnGo_West_click() {
            if (currentLoc === 4) {
                currentLoc = 5;
                look();
             } else {
               if (currentLoc === 3) {
               currentLoc = 2;
               look();
               } else {
                 if (currentLoc === 1) {
                   currentLoc = 3;
                   look();
                  } else {
                    if (currentLoc === 5) {
                       currentLoc = 1;
                       look();
				   } else {
                     if (currentLoc === 2) {
                       currentLoc = 10;
                       look();
					 } else {
                       if (currentLoc === 7) {
                        currentLoc = 4;
                        look();
                   } else {
                     directionError(); 
                 }
			    }
			   }
              }
             }              
            }
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
		 // ***** Saving this function for later use when inventory is an array maybe **
		 //
		 //function btnInv()  {
		 //var msg = "Inventory:" + inventory;
		 //displayMessage(msg);
		 //}
		 //
		 
		 // Inventory output display to the user of what they have (or do not have)
		 //
		 function btnInv() {
			 if (keyTaken == true){
				displayMessage(" You have a key.");
			} if (womenTaken == true){
				displayMessage(" There is a women standing next to you");
			} if (peanutTaken == true){
				displayMessage (" You have a Peanut Butter Sandwich");
			} else if ((peanutTaken == false) && (keyTaken == false) && (womenTaken == false)) { 
			     displayMessage (" You have nothing in your inventory at this time.") ;
		     } displayMessage(" Your Inventory includes: ");
		  }
		 
		 
       // 
       // Set up of locations that will be displayed for the user.
       //=========================================================
       // function look is the coordinator of when a location function will be called.
       // Used with button function and message functions to display the correct location to the user.
	   // Also will disable buttons that can not be used
       //
         function look() {
            var desc = "";
            switch(currentLoc) {
               case 0: frontDr();
			        document.getElementById("btnGo_S").disabled = true;
			        document.getElementById("btnGo_W").disabled = true;
			        document.getElementById("btnGo_E").disabled = true;
			        document.getElementById("btnGo_N").disabled = false;
                    break;
               case 1: kitchen();
			        document.getElementById("btnGo_S").disabled = false;
			        document.getElementById("btnGo_W").disabled = false;
			        document.getElementById("btnGo_E").disabled = false;
			        document.getElementById("btnGo_N").disabled = true;
                    break;
               case 2: tunnel();
			        document.getElementById("btnGo_S").disabled = false;
			        document.getElementById("btnGo_W").disabled = false;
			        document.getElementById("btnGo_E").disabled = false;
			        document.getElementById("btnGo_N").disabled = false;
                    break;
               case 3: roomDoor();
			        document.getElementById("btnGo_S").disabled = false;
			        document.getElementById("btnGo_W").disabled = false;
			        document.getElementById("btnGo_E").disabled = false;
			        document.getElementById("btnGo_N").disabled = true;
                    break;
               case 4: pool();
			        document.getElementById("btnGo_S").disabled = false;
			        document.getElementById("btnGo_W").disabled = false;
			        document.getElementById("btnGo_E").disabled = false;
			        document.getElementById("btnGo_N").disabled = false;
                    break;
               case 5: dirtRoom();
			        document.getElementById("btnGo_S").disabled = false;
			        document.getElementById("btnGo_W").disabled = false;
			        document.getElementById("btnGo_E").disabled = false;
			        document.getElementById("btnGo_N").disabled = false;
                    break;
               case 6: dante();
			        document.getElementById("btnGo_S").disabled = false;
			        document.getElementById("btnGo_W").disabled = true;
			        document.getElementById("btnGo_E").disabled = true;
			        document.getElementById("btnGo_N").disabled = true;
                    break;
			   case 7: greenRoom();
			        document.getElementById("btnGo_S").disabled = true;
			        document.getElementById("btnGo_W").disabled = false;
			        document.getElementById("btnGo_E").disabled = true;
			        document.getElementById("btnGo_N").disabled = true;
				    break;
			   case 8: pentagramRm();
			        document.getElementById("btnGo_S").disabled = true;
			        document.getElementById("btnGo_W").disabled = true;
			        document.getElementById("btnGo_E").disabled = true;
			        document.getElementById("btnGo_N").disabled = false;
			        break;
               case 9: dampRoom();
			        document.getElementById("btnGo_S").disabled = true;
			        document.getElementById("btnGo_W").disabled = true;
			        document.getElementById("btnGo_E").disabled = true;
			        document.getElementById("btnGo_N").disabled = false;
			        break;
               case 10: deadEnd();
			        document.getElementById("btnGo_S").disabled = true;
			        document.getElementById("btnGo_W").disabled = true;
			        document.getElementById("btnGo_E").disabled = false;
			        document.getElementById("btnGo_N").disabled = true;
                    break;			   
               default: desc = " You can not go that way";
            }
         }

		 // 
		 //Disable Button function
		 //
		 //     function disableElement() {
         //          document.getElementById("btnGo_N").disabled = true;
         //    }
		 
		 
          //
          // Individual functions for the locations
          //===============================================
          // allows the description to be displayed to the user as well as a display of current score.
          //

          function frontDr() {
             var desc = "Location 0. You are standing in front of a yellow house";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }

         function kitchen() {
             var desc = "Location 1. You walk through the door and see a kitchen";
             scoreEval();
             //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
			 displayMessage(desc);
          }
          function tunnel() {
             var desc = "Location 2. You have entered a very long tunnel";
             scoreEval();
             //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function roomDoor() {
             var desc = "Location 3. You enter a room with a door.";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function pool() {
             var desc = "Location 4. You enter a room with a crystal clear pool." + "\n" + "In the corner is a women crying.";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function dirtRoom() {
             var desc = "Location 5. You enter a room with a dirt floor and a table." + "\n" + "On the table is an odd key.";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function dante() {
             var desc = "Location 6. You enter a cave with water dripping from the ceiling." + "\n" +  "Welcome to Dante's Cave!";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function greenRoom() {
             var desc = "Location 7. You enter a green room" + "\n" +" You hear a far off sound." + " It sounds like crying.";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function pentagramRm() {
             var desc = "Location 8. You enter a room with a pentagram on the floor." + "\n" + "You hear an eerie chanting.";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function dampRoom() {
             var desc = "Location 9. You enter a cold, damp room.  You smell Peanut Butter." 
			         + "\n" + "On a shelf in the room you find a sandwich.";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function deadEnd() {
             var desc = "Location 10. You enter a cave that seems to have no exits";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }

		  //  Attempt to move repeating line into function.
		  //     think issue I am having is related to global variable vs local
		  //
		  //   function descUpdate(){
		  //	 var desc = desc + "\n" + "Your Score is: " + score ; 
		  //   }
		  
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
            // Function to check the score to decide if 5 needs to be added.
            // =============================================================
            // Do the calculation and update the score variable if needed.
            // It checks to see if the user has been to the location already.  
            // if so, then they do not get more points.
            // Total possible score = 35 {7*5} - If you start at 0 and then make your way back to 0 
            // 10-14-16 - Solution - N,W,S,E,N,N == 0,1,3,5,4,2,6
            //                to hit all 6 locations from 0
            //
              function scoreEval() {
                  if (! beenHere0) {
                      if (currentLoc === 0) {
                        score = score + 5;
                        beenHere0 = true; 					
              } 
                 else if ((! beenHere1) && (currentLoc === 1 )) {
                      score = score + 5;
                      beenHere1 = true;
			  }
                 else if ((! beenHere2) && (currentLoc === 2 )) {
                      score = score + 5;
                      beenHere2 = true;
			  }
                 else if ((! beenHere3) && (currentLoc === 3 )) {
                      score = score + 5;
                      beenHere3 = true;			
             }
                 else if ((! beenHere4) && (currentLoc === 4 )) {
                      score = score + 5;
                      beenHere4 = true;			
             }
                 else if ((! beenHere5) && (currentLoc === 5 )) {
                      score = score + 5;
                      beenHere5 = true;			
             }
                 else if ((! beenHere6) && (currentLoc === 6 )) {
                      score = score + 5;					  
                      beenHere6 = true;						  
             }   
			     else if ((! beenHere7) && (currentLoc === 7 )) {
			          score = score + 5;
					  beenHere7 = true;
	         }   
			     else if ((! beenHere8) && (currentLoc === 8 )) {
			          score = score + 5;
					  beenHere8 = true;
             }   
			    else if ((! beenHere9) && (currentLoc === 9 )) {
			          score = score + 5;
					  beenHere9 = true;
             }   
			    else if ((! beenHere10) && (currentLoc === 10 )) {
			          score = score + 5;
					  beenHere10 = true;
			  }
			 }
			}

			// 
			// Function for the take command and ties to btnINV function for showing what player has picked up
			//
			 function btnTake() {
              if ((currentLoc == 4) && (womenTaken == false )) {
                      displayMessage ("The Women agrees to come with you.");
					  womenTaken = true;					  
			  }
                 else if ((currentLoc == 5) && (keyTaken == false )) {
                      displayMessage(" You put the key in your pocket.");
                      keyTaken = true;
			  }
                 else if ((currentLoc == 9) && (peanutTaken == false )) {
                      displayMessage("You pick up the Peanut Butter Sandwich.");
                      peanutTaken = true;	
              } else displayMessage ("There is nothing to take here.");
   			}

      	
         //
         // Function for displying the message correctly (location and score) as we iterate through the game
         // also include the value of the score.
         //
          function displayMessage(msg) {
            var target = document.getElementById("taMain");
            target.value = msg + "\n\n\n" + target.value ;
         } 