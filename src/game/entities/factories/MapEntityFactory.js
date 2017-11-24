// This factory produces the various map entities that will need to be present for the player to interact with. We pass both the map data and a class to instantiate as the sprite. Assumes that all sprites can use the same constructor, which of course isn't quite right...
const mapSpriteFactory = (levelData, spriteMapping) => {
    return levelData.map(item => {
        const Sprite = spriteMapping.find(x => x.name === item.spriteName).cns;
        const spr = new Sprite(item.x, item.y, item.spriteName);
        return {
            id: item.id,
            child: spr,
            defaultAction: spr.defaultAction.bind(spr)
        }
    });
}