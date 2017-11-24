/// Execute all testing code in here.

/*
Architecture notes:
- Ensure to separate game logic / creation from the actual phaser code as much as possible. This means you can swap out the game library if needs be, or, just plain transfer
the logic to another codebase a lot more easily.
- All things relating to library specific are placed within 'game'. The rest can be in their own areas.
- Below will be each section tested in isolation. If you remove one area, the other should carry on working.
*/

/// LEVEL TRIGGERS
// Initialize linker (only happens once, very cool), this factory will basically use level linker data to
// produce an instantiated mapping and thus keeps progress as the level progresses. It will also look for an
// instance mapping of the sprite or object that you want to send a message to.
const linkerData = linkFactory(levelLinkerData);
const mapSprites = mapSpriteFactory(levelData, spriteMapping);

// Dynamic data comes from somewhere... game updates probably.
linkerData.forEach(linkNode => {

    // This tests the trigger state, usually you'd do it different, as if from a sprite interaction, etc.
    linkNode.triggers = linkNode.triggers.map(x => {
        //return toggleTrigger(x);
        return setTriggerState(x, false);
    });

    // If all's ready, run the default action on all receptors that are linked to the triggers.
    const isReady = triggerCheck(linkNode.triggers);

    if (isReady) {

        console.log("Everything is ready!");

        // Doesn't yet care about 'mode'
        console.log(linkNode);
        linkNode.receptors.forEach(receptor => {

            console.log(receptor);

            const entity = mapSprites.find(x => receptor.id === x.id);
            entity.defaultAction();

        });

    } else {
        console.log("Not quite done yet...");
    }

});

/// LEVEL CONSTRUCTION / TILEMAPS
/*
- Level construction is parsed using phaser to a point, this is only tile placement and layering however. Factories are fed various mapping data and whatnot, this will be
demonstrated below.
*/

/// SPRITE MOVEMENT AND INTERACTION
//...

/// AI
//...

/// UI
//...
