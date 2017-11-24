class PressurePlate {

    constructor(x, y, name) {
        this.name = name;
    }

    defaultAction() {
        // Do whatever you're supposed to do via default. Might animations, stuff like that.
        console.log(this.name + " - default action fired.");
    }

}