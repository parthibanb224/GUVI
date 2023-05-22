class circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        console.log(this.radius);
    }
    setRadius() {
        this.radius = 2.7;
    }
    getColor() {
        console.log(this.color);
    }
    setColor() {
        this.color = "blue";
    }
    toString() {
        console.log(`"Circle[radius=${this.radius},color=${this.color}]"`);
    }
    getArea() {
        let result = (3.14 * this.radius * this.radius);
        console.log(`Area of The Circle Is : ${result}`);
    }
    getCircumference() {
        let result1 = 2 * 3.14 * this.radius;
        console.log(`Circumference Of The Circle Is : ${result1}`);
    }
}
let value = new circle(1.0, "red");
value.getRadius();
value.setRadius();
value.getColor();
value.setColor();
value.toString();
value.getArea();
value.getCircumference();