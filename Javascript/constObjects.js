const circle = {
    radius: 1
};

/* we can modify the members of a constant but we cannot change the circle
becuse it is a constant */

circle.color = 'yellow';
circle.draw = function () { }

delete circle.color;
delete circle.draw;

console.log(circle);
