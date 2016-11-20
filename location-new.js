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
                                     + "\n" + " or press a button below")
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
function Location(id, name, desc, descAfter, hasItem){
         this.id=id;
		 this.name=name;
		 this.desc=desc;
		 this.descAfter=descAfter;
		 this.hasItem;
		 this.validMoves;
		 this.visited = false;
		 //this.item = function() {
		//	 if (this.hasItem && locations[nextLocation]) {
		//		 return items[nextLocation].desc;
		//	 } else {
		//		 return "";
		//		 }
		//	 }
		//this.toString=functin() {
		//	 var returnVal = "";
		//	 returnVal=this.desc + " " + this.item();
		//	 return returnval;
		//	 }
		 }
// Location instances		 
var frontDr = new Location(0,
                           "Front Door", 
						   "You are standing in front of a yellow house",
						   "You are standing in front of a yellow house",
						   false);
var kitchen = new Location(1,
                            "Kitchen",
							"You walk through the door and see a kitchen",
							"You walk through the door and see a kitchen",
							false);
var tunnel = new Location(2,
                          "Tunnel",
						  "You have entered a very long tunnel",
						  "You have entered a very long tunnel",
						  false);
var roomDoor = new Location(3,
                            "Room with a Door",
                            "You enter a room with a door.",
							"You enter a room with a door.",
							false);
var pool = new Location(4,  
                        " Pool ",
                        "You enter a room with a crystal clear pool. In the corner is a women crying.",
						"You enter a room with a crystal clear pool.",
						true);
var dirtRoom = new Location(5, 
                            "Dirt Room",
                            "You enter a room with a dirt floor and a table. On the table is an odd key.",
							"You enter a room with a dirt floor and a table.",
							true);
var dante = new Location(6,
                         "Dante's Cave",
                         "You enter a cave with water dripping from the ceiling.",
						 "You enter a cave with water dripping from the ceiling.",
						 false);
var greenRoom = new Location(7,
                             "Room with green walls",
                            "You enter a green room with what looks like red blood on the walls. You hear a far off sound. "
							+ "It almost sounds like people screaming for help.",
							"You enter a green room with what looks like red blood on the walls. You hear a far off sound. " 
							+ "	It almost sounds like people screaming for help.",
							false);
var pentagramRm = new Location(8, 
                               "Pentagram Room",
                               "You enter a room with a pentagram and a book on the floor. You hear an eerie chanting.",
							   "You enter a room with a pentagram on the floor. The chanting has stopped.",
							   true);
var dampRoom = new Location(9, 
                            "Dark Damp Room",
							"You enter a cold, damp room.  You smell Peanut Butter. On a shelf in the room you find a sandwich.",
                            "You enter a cold, damp room.",
							true);
var deadEnd = new Location(10,
                           "Dead End",
                            "You enter a cave that seems to have no exits.",
							"You enter a cave that seems to have no exits",
							false);
var locations = [frontDr, kitchen, tunnel, roomDoor, pool, dirtRoom, dante, greenRoom, pentagramRm, dampRoom, deadEnd];
							
// item prototype

function Item(id, name, desc,isTaken, origLoc) {
         this.id=id;
		 this.name=name;
		 this.desc=desc;
		 this.isTaken= isTaken;
		 this.origLoc;
      }
		
// item instances
var women = new Item (4,
                     "Women Crying",
					 " There is a women crying in the corner",
					 false,
					 4);
var key = new Item(5, 
                   "Old Key",
				   "Rusty Old Key for some lock", 
				   false,
				   5);
var peanut = new Item(9, 
                      "Sandwich",
					  "A Gooey, Yummy Peanut Butter and Jelly Sandwich",
					  false,
					  9);
var book = new Item(8, 
                    "Prayer Book", 
					"The Book looks like something a priest would use, but the cross is upside down.",
					false,
					8);
var items = [women, key,peanut,book];
					
function Inventory (id, name, desc){
             this.id;
			 this.name=name;
			 this.desc=desc;
			 }

var inventory = new Array();

    function btnInv() {
			 var message = "Your Inventory List: \n";
			 for ( var i=0; i< Inventory.length-1; i++){
			 if (inventory[i] !=null) {
			    displayMessage(Inventory[i].name + ": " + Inventory[i].desc + "\n");
				}
			}
	}
				
//var navBtns = [btnGo_N,btnGo_S,btnGo_E,btnGo_W ];
				
// var validMoves = [ /* N S E W  */
// /*Location[0] */   [1,0,0,0],
//  /*Location[1] */	 [1,0,5,3],
//  /*Location[2] */   [6,4,3,10],
// /*Location[3] */	 [3,5,1,2],
//  /*Location[4] */	 [2,9,7,5],
//  /*Location[5] */	 [3,8,4,1],
//  /*Location[6] */   [6,2,6,6],
//  /*Location[7] */	 [7,7,7,4],
 // /*Location[8] */	 [5,8,8,8],
 // /*Location[9] */	 [4,9,9,9],
 // /*Location[10]*/	 [10,10,2,10]
//		    	];
//
 //  function btnGo_North_click() {
 //        currentLoc = validMoves[Location[0].id];
//		 look();
//	}
//	
  //  function btnGo_South_click() {
 //        currentLoc = validMoves[currentLoc][1];
//		 look();
//	}
//	
//	function btnGo_East_click() {
 //        currentLoc = validMoves[currentLoc][2];
//		 look();
//	}
//	
//	function btnGo_West_click() {
 //        currentLoc = validMoves[currentLoc][3];
//		 look();
//	}  
	
	
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
            if (Location[0]) {
               Location.id = 1;
               look();               
            } else {
              if (Location.id === 4) {
                 currentLoc = 2;
                 look();  
               } else {
                  if (Location.id === 5){
                   currentLoc = 3;
                   look();  
                 } else {
                   if (Location.id === 2){
                    currentLoc = 6;
                    look();
                  } else {
                   if (Location.id === 8){
                    currentLoc = 5;
                    look();					
                   } else {
                   if (Location.id === 9){
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
            if (Location.id === 1) {
               currentLoc = 0;
               look();
            } else {
              if (Location.id === 2) {
                 currentLoc = 4;
                 look();
              } else {
               if (Location.id === 3){
                 currentLoc = 5;
                 look();
               } else {
                if (Location.id === 6) {
                 currentLoc = 2;
                 look();
				 } else {
                  if (Location.id === 4) {
                   currentLoc = 9;
                   look();
				  } else {
                   if (Location.id === 5) {
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
            if (Location.id === 2) {
               currentLoc = 3;
               look();
            } else {
              if (Location.id === 5) {
                 currentLoc = 4;
                 look();
               } else {
                   if (Location.id === 3) {
                      currentLoc = 1;
                      look();
                 } else {
                    if (Location.id === 1) {
                       currentLoc = 5;
                       look();
				  	} else {
                      if (Location.id === 10) {
                       currentLoc = 2;
                       look();
					 } else {
                      if (Location.id === 4) {
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
         

         function btnGo_West_click() {
            if (Location.id === 4) {
                currentLoc = 5;
                look();
             } else {
               if (Location.id === 3) {
               currentLoc = 2;
               look();
               } else {
                 if (Location.id === 1) {
                   currentLoc = 3;
                   look();
                  } else {
                    if (Location.id === 5) {
                       currentLoc = 1;
                       look();
				   } else {
                     if (Location.id === 2) {
                       currentLoc = 10;
                       look();
					 } else {
                       if (Location.id === 7) {
                        currentLoc= 4;
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
          // Individual functions for the locations
          //===============================================
          // allows the description to be displayed to the user as well as a display of current score.
          //

          function frontDr() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }

         function kitchen() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
             //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
			 displayMessage(desc);
          }
          function tunnel() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
             //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function roomDoor() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function pool() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function dirtRoom() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
          function dante() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function greenRoom() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function pentagramRm() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function dampRoom() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }
		  function deadEnd() {
             var desc = Location.id + ": " + Location.desc + "\n";
             scoreEval();
			 //descUpdate();
			 desc = desc + "\n" + "Your Score is: " + score ;
             displayMessage(desc);
          }

		
// function for the take button
// puts items into inventory, notify user and updates the location description
		
    function btnTake() {
	        // var loc = locations[currentLoc];
			 if (item.isTaken == true || Location.hasItem == false){
			    displayMessage("There is nothing to take");
				} else if ((Location.id == 4) && (item[4].isTaken == false )) {
                   displayMessage ("The Women agrees to come with you.");
				   displayMessage(item[4].name + "Added to your inventory:" + " ");
			       inventory.push(item[4].name);
				   item[4].isTaken=true;
				   Location[4].desc=Location[4].descAfter;
				} 
				   else if ((Location.id == 5) && (item[5].isTaken == false )) {
				       displayMessage(" You put the key in your pocket.");
					   displayMessage(item[5].name + "Added to your inventory:" + " ");
					   inventory.push(item[5].name);
					   item[5].isTaken=true;
				       Location[5].desc=Location[5].descAfter;
				} 
					 else if ((Location.id == 9) && (item[9].isTaken == false )) {
                      displayMessage("You pick up the Peanut Butter Sandwich.");
					  displayMessage(item[9].name + "Added to your inventory:" +  " ");
                      Inventory.push(item[9].name);
					  item[9].isTaken=true;
					  Location[9].desc=Location[9].descAfter;
				}	  
					  else if ((Location.id == 8) && (item[8].isTaken == false )) {
                      displayMessage("You pick up " + item[8].name );
					  displayMessage(item[8].name + "Added to your inventory:" + " ");
                      Inventory.push(item[8].name);
					  item[8].isTaken=true;
					  Location[8].desc=Location[8].descAfter;
              } else {
				      displayMessage ("There is nothing to take here.");
			 }
	       }
				   
				
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
                      if (Location.id === 0) {
                        score = score + 5;
                        beenHere0 = true; 					
              } 
                 else if ((! beenHere1) && (Location.id === 1 )) {
                      score = score + 5;
                      beenHere1 = true;
			  }
                 else if ((! beenHere2) && (Location.id === 2 )) {
                      score = score + 5;
                      beenHere2 = true;
			  }
                 else if ((! beenHere3) && (Location.id === 3 )) {
                      score = score + 5;
                      beenHere3 = true;			
             }
                 else if ((! beenHere4) && (Location.id === 4 )) {
                      score = score + 5;
                      beenHere4 = true;			
             }
                 else if ((! beenHere5) && (Location.id === 5 )) {
                      score = score + 5;
                      beenHere5 = true;			
             }
                 else if ((! beenHere6) && (Location.id === 6 )) {
                      score = score + 5;					  
                      beenHere6 = true;						  
             }   
			     else if ((! beenHere7) && (Location.id === 7 )) {
			          score = score + 5;
					  beenHere7 = true;
	         }   
			     else if ((! beenHere8) && (Location.id === 8 )) {
			          score = score + 5;
					  beenHere8 = true;
             }   
			    else if ((! beenHere9) && (Location.id === 9 )) {
			          score = score + 5;
					  beenHere9 = true;
             }   
			    else if ((! beenHere10) && (Location.id === 10 )) {
			          score = score + 5;
					  beenHere10 = true;
			  }
			 }
			}

//
         // Function for displying the message correctly (location and score) as we iterate through the game
         // also include the value of the score.
         //
          function displayMessage(msg) {
            var target = document.getElementById("taMain");
            target.value = msg + "\n\n\n" + target.value ;  } 