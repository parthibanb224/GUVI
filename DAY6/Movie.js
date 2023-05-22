class movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }
    static getPg(arr) {
        arr.forEach(element => {
            if (element.rating == "PG") {
                console.log(element);
            }
        });
    }
}

let movie1 = new movie("Casino Royale", "Eon Productions", "PG­13");
let movie2 = new movie("LEO", "Sun Picture", "");
let movie3 = new movie("BEAST", "Sun Picture", "");
let arr = [movie1, movie2, movie3];
movie.getPg(arr);