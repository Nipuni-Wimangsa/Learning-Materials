let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        console.log('draw');
    }
};

//factory function - > because we have to create objects many times
function createCircle(radius) {
    return {
        //radius: radius
        /* because key and value are the same we can remove the value */
        radius,

        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);
