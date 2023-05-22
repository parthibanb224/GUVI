class Uber {
    constructor(time, distance) {
        this.baseFare = 10;
        this.costPerMinute = 5;
        this.time = time;
        this.costPerDist = 10;
        this.distance = distance;
        this.bookingFee = 50;

    }
    getPrice() {
        //Formula For Uber Price==> Base Fare + (Cost per minute * time in ride) + (Cost per mile * ride distance) + Booking Fee = Your Fare
        let result = this.baseFare + (this.costPerMinute * this.time) + (this.costPerDist * this.distance) + this.bookingFee;
        console.log(`UBER PRICE IS : ${result}`);
    }
}
let ticket1 = new Uber(60, 50);
let ticket2 = new Uber(90, 40);
let ticket3 = new Uber(60, 90);
ticket1.getPrice();
ticket2.getPrice();
ticket3.getPrice();