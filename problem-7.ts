{
    class Car {
        model: string;
        year: number;

        constructor(model: string, year: number) {
            this.model = model;
            this.year = year;


        }
        getCarAge() {
            const carAge = 2024 - this.year;
            return console.log(carAge)
        }
    }

    const toyota = new Car('Toyota', 2018);
    toyota.getCarAge();
}