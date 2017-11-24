// You'll have to make a factory that'll make a series of volatile items which will hold the state of the level. Obviously you don't want to be affecting the fixed data, as that's just awful.
const linkFactory = (linkerNodes) => {

    // Return a data set that has some id and state mappings. These will be updated as the app cycle goes on.
    return linkerNodes.map(node => {

        return {
            receptors: node.receptors.map(id => {
                return { id, receptorMode: node.mode }
            }),
            triggers: node.triggers.map(id => {
                return { id, isActive: false }
            })
        }

    });

}