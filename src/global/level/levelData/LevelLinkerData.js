/// Doesn't exist on tile map, but is relatable by name or id.
// The level linker data is basically a manifest that pulls both sides of the coin together. It's designed to remove the worry of getting data mixed up by simply linking data id's together. This 'could' sit in the tilemap, or more simply just stick it on its own in a JSON file. The only potential issue is mis-spelling stuff, but frankly that's simply corrected anyway.
// You might have more than one receptor, so we also define the type of execution that'll happen, whether they all happen at once or one after the other. Either way, if you want delayed starts and stuff, that'll probably be best set on the sprite action its self. It just keeps things decoupled. So for instance here SEQUENCE will just make sure that we wait for each to finish its run, rather than at the same time. Can assume that this will be the default behavior.
// After thought: I might just stick all this in the tilemap after all... you can easily just set the mode still but as a property of the placed tile. It might just be better to keep it all in the same place I guess.
// Update: Due to receptor and trigger types now being generic, this is the only part that defines their differences. But it removes an extra step in the map editor, leaving this bit to handle the pairings.
// Each one of these linkers will need a relatable map as well so you load the right thing.
const levelLinkerData = [
  {
    receptors: ["heavyBox1"],
    triggers: ["pressurePlate1", "pressurePlate2"],
    mode: MODES.SEQUENCE
  }
]