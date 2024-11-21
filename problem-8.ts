{


    function valaidateKeys<T>(obj: T, keys: (keyof T)[]) {
        if (keys.map((key) => key in obj)) {
            console.log(true)
        }

    }

    type Person = {
        name: string;
        age: number;
        email: string;
    }

    const person: Person = { name: "Alice", age: 25, email: "alice@example.com" };
    valaidateKeys(person, ['name', 'age'])
}