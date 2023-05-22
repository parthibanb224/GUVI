class person {
    constructor(name, age, place, qualification, bloodGroup) {
        this.name = name;
        this.age = age;
        this.place = place;
        this.qualification = qualification;
        this.bloodGroup = bloodGroup;
    }
    getDetails() {
        console.log(`PERSON DETAILS:
        Name = ${this.name},
        AGE = ${this.age},
        PLACE = ${this.pllace},
        QUALIFICATION = ${this.qualification},
        BLOOD GROUP = ${this.bloodGroup}.`)
    }
}
let person1 = new person("Parthiban", 25, "Theni", "BE", "B+");
let person2 = new person("Muthu", 25, "Cumbum", "BE", "A+");
let person3 = new person("Karthi", 25, "Madurai", "BA", "O+");
person1.getDetails();
person2.getDetails();
person3.getDetails();