//
// Final Project Game V1.0
// Filename: location.js
// 
// Ruth Murphy - CMPT 120 Fall 2016
// Final Project Location focused file
// Control HTML file is "Final Project-Murphy.html"
// Last Update: November 28, 2016

    //
    // List of Global Variables for Game
    //         
         var currentLoc = 0;
         var score = 0;
         var directionErrorCount = 0;
         var limit = 5;
         

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
    pool_loc.name="Pool";
    pool_loc.desc="You enter a room with a crystal clear pool." + "\n" + "In the corner is a women crying.";
    pool_loc.descAfter="You enter a room with a crystal clear pool.";
    pool_loc.item=women;
    pool_loc.hasItem= true;
    pool_loc.visted = false;

	//location 5 - Room with dirt floor
    var dirtRoom_loc = new Location();
    dirtRoom_loc.id=5;
    dirtRoom_loc.name="Dirt Room";
    dirtRoom_loc.desc="You enter a room with a dirt floor and a table." + "\n" + "On the table is a rusty old key for some kind of lock.";
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
    greenRoom_loc.desc="You enter a green room with what looks like red blood on the walls. You hear a far off sound." + "\n" + "It sounds like people screaming for help.";
    greenRoom_loc.descAfter="You enter a green room with what looks like red blood on the walls. You hear a far off sound." + "\n" + "It sounds like people screaming for help.";
    greenRoom_loc.item="";
    greenRoom_loc.hasItem=false;
    greenRoom_loc.visted = false;

	//location 8 - Pentagram Room
    var pentagramRm_loc = new Location();
    pentagramRm_loc.id=8;
    pentagramRm_loc.name="Pentagram Room";
    pentagramRm_loc.desc="You enter a room with a pentagram on the floor." + "\n" + "You hear an eerie chanting." + "\n" + "There is a book lying on the floor.  The book looks like something a priest would use, but the cross is upside down.";
    pentagramRm_loc.descAfter="You enter a room with a pentagram on the floor. The chanting has stopped.";
    pentagramRm_loc.item=book;
    pentagramRm_loc.hasItem= true;
    pentagramRm_loc.visted = false;

	//location 9 - Damp wet room
    var dampRoom_loc = new Location();
    dampRoom_loc.id=9;
    dampRoom_loc.name="Dark Damp Room";
    dampRoom_loc.desc="You enter a cold, damp room.  You smell Peanut Butter." + "\n" + "On a shelf in the room you see a sandwich." + "\n" + "A Gooey, Yummy Peanut Butter and Jelly Sandwich." ;
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
    var women = new Item (4, " A Crying Women", " The women agrees to come with you.", false,4);
    var key = new Item(5, " Old Rusty Key", "An old key for a lock somewhere.", false,5);
    var book = new Item(8, " Prayer Book", "You picked up a book of Satanic prayers." + "\n" + "You look in the book and see a Bible is hidden inside.",false,8);
    var peanut = new Item(9, " PB & J Sandwich",  "A Gooey, Yummy Peanut Butter and Jelly Sandwich.", false,9);

    //single array to ease calling items by name.
    var items = new Array ();
        items[4] = women;
        items[5] = key;
        items[8] = book;
        items[9] = peanut
    
