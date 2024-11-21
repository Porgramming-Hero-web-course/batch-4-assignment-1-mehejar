{
    class Car {
        brand: string;
        model: string;
        year: number;

        constructor(brand: string, model: string, year: number) {
            this.brand = brand;
            this.model = model;
            this.year = year;


        }
        getCarAge() {
            const carAge = 2024 - this.year;
            return console.log(carAge)
        }
    }

    const toyota = new Car("Honda", "Civic", 2018);
    toyota.getCarAge();
}