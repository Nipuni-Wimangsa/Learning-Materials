//factory function -> camel notation
function createCircle(radius) {
    return {
        radius,

        draw() {
            console.log('draw');
        }
    };
}

//constuctor function -> pascal notation
function CreateCircle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new CreateCircle(1);
