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
function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1);
