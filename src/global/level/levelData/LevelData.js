/// Belongs on a tile map interface
// Level data should be fed in via tile maps, or whatever you like. Triggers and RECEPTORs here don't care about each other. They're specified in the map, but you don't need to link them in there. They shouldn't need to be aware of each other. You can add as many of these as you like obviously, and also 'if' needs be, assign a sprite name to it to load up later on! When the 'thing' is activated, that's really up to whatever sprite is assigned at the time. It'll have a state in its own right such as 'inactive' and 'active. Easy. Also, not sure if you'd want to put the x and y coords in here too, so you can pass to the sprite.
// Update: These are now generic. You never know, one thing could affect another and so on.
const levelData = [
	{
  	id: "pressurePlate1",
    spriteName: "pressurePlate",
    pos: {
    	x: 1,
      y: 2
    }
  },
  {
  	id: "pressurePlate2",
    spriteName: "pressurePlate",
    pos: {
    	x: 3,
      y: 4
    }
  },
  {
  	id: "heavyBox1",
    spriteName: "heavyBox",
    pos: {
    	x: 5,
      y: 6
    }
  }
]